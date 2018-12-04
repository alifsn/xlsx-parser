
const xlsx = require('xlsx');

function parseXlsx(pathFile) {
    const workbook = xlsx.readFile(pathFile);
    const sheet_name_list = workbook.SheetNames;
    const result = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    return result;   
}

module.exports = {
    parseXlsx
};