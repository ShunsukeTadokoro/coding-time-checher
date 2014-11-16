// setting
var startCol = 6; // 作業開始時間を記録する列
var endCol = 7;   // 作業終了時間を記録する列

function onEdit(e) {
  var range = e.range;
  var rangeRow = range.getRow();
  var rangeCol = range.getColumn();
  var lastCell = range.getSheet().getRange(rangeRow, range.getLastColumn()); // 一番右側のセルを取得
  Logger.log(lastCell);
  if((rangeCol == startCol || rangeCol == endCol) && lastCell.getValue()==''){
    lastCell.setValue('\'' + Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyy/MM/dd HH:mm'));
  }
}