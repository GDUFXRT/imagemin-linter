import fs from 'fs';
import path from 'path';
import promisify from 'util.promisify';

const stat = promisify(fs.stat);
const FIXTURES_PATH = path.resolve(__dirname, '__fixtures__');

describe('index module', () => {
    const FILENAMES = [
        FIXTURES_PATH + '/test.gif',
        FIXTURES_PATH + '/test.jpg',
        FIXTURES_PATH + '/test.png',
        FIXTURES_PATH + '/test.svg',
    ];
    const stats = () =>
        Promise.all(
            FILENAMES.map(async f => {
                const { size } = await stat(f);
                return { f, size };
            }),
        );

    const { lossLessminifyFile } = require('../lib/index');

    describe('lossLessminifyFile function', () => {
        it('should work as expected', async () => {
            const before = await stats();
            await Promise.all(FILENAMES.map(lossLessminifyFile));
            const after = await stats();

            expect(after).not.toEqual(before);
        });
    });
});
