#!/usr/bin/env node
'use strict';

const { program } = require('commander');

program.option('-l, --less', 'loss less mode');
program.version(require('../package.json').version);
program.parse(process.argv);

const imageminFn = program.less
    ? require('../lib/index.js').lossLessminifyFile
    : require('../lib/index.js').lossyMinifyFile;

Promise.all(program.args.map(imageminFn)).catch(function (e) {
    console.error(e);
    process.exit(1);
});
