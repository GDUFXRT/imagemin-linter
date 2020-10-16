'use strict';
const fs = require('fs');
const promisify = require('util.promisify');

const lossLessPlugins = require('./lossLessPlugins').map(([name, opts]) =>
    require(name)(opts),
);
const lossyPlugins = require('./lossyPlugins').map(([name, opts]) =>
    require(name)(opts),
);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

function getMinifyFileFn(plugins) {
    return async filename => {
        const { size: srcSize } = await stat(filename);

        const updateFile = async fileStream => {
            const targetSize = fileStream.length;

            // 图片变小才进行覆盖写入
            return targetSize < srcSize
                ? await writeFile(filename, fileStream)
                : true;
        };

        return [...plugins, updateFile].reduce(
            (acc, it) => acc.then(it),
            readFile(filename),
        );
    };
}

exports.lossyMinifyFile = getMinifyFileFn(lossyPlugins);
exports.lossLessminifyFile = getMinifyFileFn(lossLessPlugins);
