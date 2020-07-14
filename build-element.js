const fs=require('fs-extra');
const concat=require('concat');
//(async)

(async function build(){
 // console.log(process.argv.slice(0));
const prjctName='sidebarApp';
if(prjctName==='' || prjctName ===undefined){
  console.log("required projcet name");
  return false;
}else{
  const files_es2015=[
'./dist/'+prjctName + '/runtime-es2015.js',
'./dist/'+prjctName + '/polyfills-es2015.js',
'./dist/'+prjctName + '/main-es2015.js'
  ];

 await fs.ensureDir('./dist/'+prjctName+'/elements');
 await concat(files_es2015,'./dist/'+prjctName+'/elements/'+prjctName+'-elements-es2015.js');


 fs.readFile('./dist/'+prjctName+'/elements/'+prjctName+'-elements-es2015.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/webpackJsonp/g, 'webpackJsonp'+prjctName);
  fs.writeFile('./dist/'+prjctName+'/elements/'+prjctName+'-elements-es2015.js', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});

 const files_es5=[
  './dist/'+prjctName + '/runtime-es5.js',
  './dist/'+prjctName + '/polyfills-es5.js',
  './dist/'+prjctName + '/main-es5.js'
    ];

await fs.ensureDir('./dist/'+prjctName+'/elements');
 await concat(files_es5,'./dist/'+prjctName+'/elements/'+prjctName+'-elements-es5.js')

 fs.readFile('./dist/'+prjctName+'/elements/'+prjctName+'-elements-es5.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/webpackJsonp/g, 'webpackJsonp'+prjctName);
  fs.writeFile('./dist/'+prjctName+'/elements/'+prjctName+'-elements-es5.js', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});


 console.log("done generating bundle for "+prjctName);
}




})()
