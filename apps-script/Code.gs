/**
 * Recibe los registros del formulario de la invitación y los agrega
 * como filas en la hoja "Asistentes" del Google Sheet donde vive este script.
 */
const SHEET_NAME = "Asistentes";
const COLUMNS = [
  "fecha_registro", "nombre", "apellido", "email", "telefono",
  "empresa", "cargo", "asistira", "acompanantes", "restricciones", "comentarios"
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS);
      sheet.setFrozenRows(1);
    }

    const p = e.parameter;
    sheet.appendRow(COLUMNS.map((col) => p[col] || ""));

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
