
const assert = require('assert');
const sinon = require('sinon');
const xlsx = require('xlsx');
const { utils } = xlsx;

const index = require('./index');

describe('parseXlsx', () => {

    let sheetDatas = [ 
        { Desa: 40, Poktan: 2480 },
        { Desa: 41, Poktan: 1820 },
        { Desa: 42, Poktan: 1730 } 
    ];

    beforeEach(() => {
        sinon.stub(xlsx, 'readFile').returns({
            SheetNames: sinon.stub(),
            Sheets: sinon.stub()
        });
        sinon.stub(utils, 'sheet_to_json').resolves(sheetDatas);
    });

    afterEach(() => {
        xlsx.readFile.restore();
        utils.sheet_to_json.restore();
    });

    it('Should be return json array of excel', async() => {
        const result = await index.parseXlsx('test.xlsx');
        assert.equal(result.length, 3);
    });

});