const fs = require('fs');
const shell = require('shelljs');
const chalk = require('chalk');
const util = require('./buildUtils.js');

const SRC_FOLDER = 'src';
const STYLE_DIR = process.argv[2] || 'publish/styles/';
const THEME_PATH = `${SRC_FOLDER}/styles/themes`;

shell.echo(chalk.green(`Styles`));
// Build sass
const indexFile = `${SRC_FOLDER}/styles/theme.sass`;
const cssStr = util.buildSass(null, indexFile);
shell.mkdir(`-p`, `${STYLE_DIR}`);
fs.writeFileSync(`${STYLE_DIR}/theme.css`, cssStr);

const themeFileNames = fs.readdirSync(THEME_PATH)
.filter((sassFileName) => sassFileName.split('.').pop() === 'scss')
.map((sassFileName) => sassFileName.split('.')[0]);

shell.mkdir(`-p`, `${STYLE_DIR}/themes`);
themeFileNames.forEach((fileName) => {
  const themeFile = `${THEME_PATH}/${fileName}.scss`;
  const cssStr = util.buildSass(null, themeFile);
  fs.writeFileSync(`${STYLE_DIR}/themes/${fileName}.css`, cssStr);
});

// Move util
['util', 'mixins', 'variables', 'overlay'].forEach((sassFile) => {
  shell.cp(`-Rf`, `${SRC_FOLDER}/styles/${sassFile}.sass`, `${STYLE_DIR}`);
});
