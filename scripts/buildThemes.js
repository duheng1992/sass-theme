const fs = require('fs');
const shell = require('shelljs');
const chalk = require('chalk');
const util = require('./buildUtils.js');

const DEST_PATH = 'public/assets/themes';
const INPUT_PATH = 'src/styles/themes';

shell.echo(chalk.green('Building custom theme sass files.'));

// Get the files
const themeFileNames = fs.readdirSync(INPUT_PATH)
.filter((sassFileName) => sassFileName.split('.').pop() === 'scss')
.map((sassFileName) => sassFileName.split('.')[0]);

themeFileNames.forEach((fileName) => {
  const indexFile = `${INPUT_PATH}/${fileName}.scss`;
  const cssStr = util.buildSass(null, indexFile);
  fs.writeFileSync(`${DEST_PATH}/${fileName}.css`, cssStr);
});

shell.echo(chalk.green('Finished building CSS.'));