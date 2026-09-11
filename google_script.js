// ===================================================
// QUIZ ARENA — GOOGLE APPS SCRIPT BACKEND
// Paste this entire code into your Google Sheet's Apps Script editor:
// 1. In Google Sheets, click Extensions ➔ Apps Script
// 2. Erase everything and paste this entire code
// 3. Click Deploy ➔ New deployment ➔ Select type: Web App
//    - Description: Quiz Arena Submissions
//    - Execute as: Me (your Google email)
//    - Who has access: Anyone
// 4. Click Deploy and copy the Web App URL into config.js (SCRIPT_URL)
// ===================================================

var TEACHER_PASSWORD = 'teacher2026';
var SHEET_NAME_SESSIONS = 'Quiz_Sessions';
var SHEET_NAME_STUDENTS = 'Student_Scores';

function doPost(e) {
  try {
    var raw = e.postData ? e.postData.contents : '';
    if (!raw) {
      return response({ success: false, error: 'No data received' });
    }
    
    var data = JSON.parse(raw);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Check if logging a live arena session
    if (data.action === 'log_quiz_session' || data.students) {
      logSessionData(ss, data);
      return response({ success: true, message: 'Session logged successfully' });
    }

    return response({ success: false, error: 'Unknown action' });
  } catch (err) {
    return response({ success: false, error: err.toString() });
  }
}

function logSessionData(ss, data) {
  var timestamp = data.timestamp || new Date().toISOString();
  var quizTitle = data.quizTitle || 'HSC Quiz';
  var students = data.students || [];

  // 1. Log to Student_Scores sheet
  var studentSheet = ss.getSheetByName(SHEET_NAME_STUDENTS);
  if (!studentSheet) {
    studentSheet = ss.insertSheet(SHEET_NAME_STUDENTS);
    var headers = ['Timestamp', 'Quiz Title', 'Rank', 'Student Name', 'Final Score', 'Correct Answers', 'Total Questions', 'Accuracy %'];
    studentSheet.appendRow(headers);
    studentSheet.getRange(1, 1, 1, headers.length)
                .setFontWeight('bold')
                .setBackground('#1e293b')
                .setFontColor('#ffffff');
    studentSheet.setFrozenRows(1);
  }

  students.forEach(function(s) {
    studentSheet.appendRow([
      timestamp,
      quizTitle,
      s.rank,
      s.name,
      s.score,
      s.correctCount,
      s.totalQuestions,
      (s.accuracy + '%')
    ]);
  });

  // 2. Log to Quiz_Sessions overview sheet
  var sessionSheet = ss.getSheetByName(SHEET_NAME_SESSIONS);
  if (!sessionSheet) {
    sessionSheet = ss.insertSheet(SHEET_NAME_SESSIONS);
    var sessionHeaders = ['Timestamp', 'Quiz Title', 'Total Participants', 'Winner (1st Place)', 'Winning Score', 'Average Score'];
    sessionSheet.appendRow(sessionHeaders);
    sessionSheet.getRange(1, 1, 1, sessionHeaders.length)
                .setFontWeight('bold')
                .setBackground('#0f172a')
                .setFontColor('#ffffff');
    sessionSheet.setFrozenRows(1);
  }

  var winnerName = students.length > 0 ? students[0].name : 'N/A';
  var winningScore = students.length > 0 ? students[0].score : 0;
  var totalScore = students.reduce(function(acc, curr) { return acc + (curr.score || 0); }, 0);
  var avgScore = students.length > 0 ? Math.round(totalScore / students.length) : 0;

  sessionSheet.appendRow([
    timestamp,
    quizTitle,
    students.length,
    winnerName,
    winningScore,
    avgScore
  ]);
}

function doGet(e) {
  try {
    var pw = (e.parameter && e.parameter.password) ? e.parameter.password : '';
    if (pw !== TEACHER_PASSWORD) {
      return response({ success: false, error: 'Unauthorized' });
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME_STUDENTS);
    if (!sheet) {
      return response({ success: true, scores: [] });
    }

    var values = sheet.getDataRange().getValues();
    if (values.length <= 1) {
      return response({ success: true, scores: [] });
    }

    var headers = values[0];
    var scores = values.slice(1).map(function(row) {
      var obj = {};
      headers.forEach(function(h, idx) {
        obj[h] = row[idx];
      });
      return obj;
    });

    return response({ success: true, scores: scores });
  } catch (err) {
    return response({ success: false, error: err.toString() });
  }
}

function response(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
