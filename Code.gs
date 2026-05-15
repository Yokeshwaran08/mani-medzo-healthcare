// ============================================================
// TSK Primecare – Google Apps Script (Code.gs)
// Handles form submissions from the website and appends
// rows to a "Responses" sheet tab in this Spreadsheet.
// Deploy as: Web App → Execute as Me → Anyone (or Anyone, even anonymous)
// ============================================================

var SHEET_NAME = "Responses";
var HEADERS    = ["Timestamp", "Name", "Service", "Phone Number", "Message"];

/* ── Helper: get or create the Responses sheet with bold headers ── */
function getSheet() {
  var ss    = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);

    // Write bold headers
    var headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
    headerRange.setValues([HEADERS]);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#36454f");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);

    // Set column widths for readability
    sheet.setColumnWidth(1, 180); // Timestamp
    sheet.setColumnWidth(2, 160); // Name
    sheet.setColumnWidth(3, 180); // Service
    sheet.setColumnWidth(4, 160); // Phone Number
    sheet.setColumnWidth(5, 300); // Message
  }

  return sheet;
}

/* ── doGet: handles GET requests (the fetch method used by the site) ── */
function doGet(e) {
  return handleRequest(e && e.parameter ? e.parameter : {});
}

/* ── doPost: handles POST requests (fallback / future use) ── */
function doPost(e) {
  var params = {};

  try {
    // Try JSON body first
    if (e && e.postData && e.postData.contents) {
      params = JSON.parse(e.postData.contents);
    }
  } catch (err) {
    // Fall back to form parameters
    params = e && e.parameter ? e.parameter : {};
  }

  return handleRequest(params);
}

/* ── Core handler: validate, sanitise, and append the row ── */
function handleRequest(params) {
  try {
    var name    = sanitise(params.name    || params.Name    || "");
    var service = sanitise(params.service || params.Service || "");
    var phone   = sanitise(params.phone   || params.Phone   || params["phone number"] || "");
    var message = sanitise(params.message || params.Message || "");

    var sheet = getSheet();

    sheet.appendRow([
      new Date(),  // Timestamp (auto)
      name,
      service,
      phone,
      message
    ]);

    return buildResponse({ success: true, message: "Row appended successfully." });

  } catch (err) {
    return buildResponse({ success: false, error: err.toString() });
  }
}

/* ── Build a JSON ContentService response with CORS headers ── */
function buildResponse(payload) {
  var output = ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
  return output;
}

/* ── Strip leading/trailing whitespace and limit length ── */
function sanitise(value) {
  if (typeof value !== "string") value = String(value);
  return value.trim().substring(0, 1000);
}
