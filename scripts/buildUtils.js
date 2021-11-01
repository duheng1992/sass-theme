const fs = require('fs');
const path = require('path');
const sass = require('sass');

exports.buildSass = function(content, sourceFile, indentedSyntax = false) {
  try {
    const result = sass.renderSync({
      data: content,
      file: sourceFile,
      indentedSyntax,
      importer: function(url, prev, done) {
        if (url[0] === '~') {
          return tildeImport(url.slice(1));
        }

        return {file: url};
      }
    });
    return result.css.toString()
  } catch (e) {
    console.error('\x1b[41m');
    console.error('at ' + sourceFile + ':' + e.line + ":" + e.column);
    console.error(e.formatted);
    console.error('\x1b[0m');
    return "";
  }
}

function tildeImport(targetUrl) {
  var packageRoot = path.join(__dirname, '..');
  var filePath = path.resolve(packageRoot, 'node_modules', targetUrl);

  if (!fs.existsSync(path.dirname(filePath))) {
    throw Error('style file not exists', url, filePath);
  }
  return {
    file: filePath,
    contents: fs.readFileSync(filePath, 'utf-8'),
  }
}
