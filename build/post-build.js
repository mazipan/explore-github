var concat = require('concat-files')
var zlib = require('zlib');
var fs = require('fs')

var input_files = []

var dist_folder = __dirname + '/../dist/'
var dist_js_folder = dist_folder + 'static/js/'
var dist_css_folder = dist_folder + 'static/css/'
var index_js = dist_folder + 'index.js'
var index_css = dist_folder + 'index.css'

var js_files = fs.readdirSync(dist_js_folder)
var new_line_file = dist_folder + 'tmp_new_line.txt'
var new_line = '\n'

// write a file to be a separator
fs.writeFileSync(new_line_file, new_line);

// manifest
input_files = input_files.concat(dist_js_folder + js_files.filter(a=>a.match(/^manifest\.(.*)\.js$/)))
input_files.push(new_line_file)
// vendor
// input_files = input_files.concat(dist_js_folder + js_files.filter(a=>a.match(/^vendor\.(.*)\.js$/)))
// input_files.push(new_line_file)
// app
input_files = input_files.concat(dist_js_folder + js_files.filter(a=>a.match(/^app\.(.*)\.js$/)))

console.log('start merging to index.js and index.css..')
concat(input_files, index_js, function(err) {
  if (err) throw err
  console.log('done merging file');

  //remove new line file
  fs.unlink(new_line_file)

  //js
  const inp_js = fs.createReadStream(index_js);
  const out_js = fs.createWriteStream(index_js + '.gz');
  inp_js.pipe(zlib.createGzip()).pipe(out_js);

});

//css
var css_files = fs.readdirSync(dist_css_folder)

css_files = css_files.filter(a=>a.match(/^app\.(.*)\.css$/))

if (css_files.length > 0) {
  fs.writeFileSync(index_css, fs.readFileSync(dist_css_folder + css_files[0]));

  //css
  const inp_css = fs.createReadStream(index_css);
  const out_css = fs.createWriteStream(index_css + '.gz');
  inp_css.pipe(zlib.createGzip()).pipe(out_css);
}