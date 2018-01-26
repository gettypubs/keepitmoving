var Peepub   = require('pe-epub-fs')(require('pe-epub'));
var epubJson = require('/Users/galbers/GitHub/keepitmoving/public/epub.json'); // see examples/example.json for the specs
var myPeepub = new Peepub(epubJson);

myPeepub.create('/Users/galbers/GitHub/keepitmoving/static/downloads/keepitmoving.epub')
  .then(function(filePath){
  console.log(filePath); // the same path to your epub file!
});

