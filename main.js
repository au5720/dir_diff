

const ParseFile = require('./src/parse_file');
const FileDetails = require('./src/schemas/file_details');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');

  const filePath1='20181001.txt';
  let fileData=ParseFile.parseFileNames(filePath1);
  var fDetail=null;
  var cnt=0;
  for(let obj of fileData) {
      //console.log(obj);
      fDetail = new FileDetails(obj);
      fDetail.save(err => {
          if(err) throw err;
      });
      cnt++;
      if((cnt % 10000) === 0) { console.log(cnt + ' inserted');}
  }
});

// const filePath1='20181001.txt';
// let fileObject=ParseFile.parseFileNames(filePath1);

// let keys=Object.keys(fileObject);
// console.log(keys[0]);
// var k = keys[10000];

// console.log(fileObject[k]);

// console.log(fileData1.length);

// const filePath2='20181005.txt';
// let fileData2=ParseFile.parseFileNames(filePath2);
// console.log(fileData2.length);

// var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database(':memory:');

 
// db.serialize(function() {
    
//     console.log('Creating the tables');

//     db.run("CREATE TABLE data_20181001 (filename TEXT)");
//     db.run("CREATE TABLE data_20181005 (filename TEXT)");

//     console.log('inserting data now into 20181001');

//   var cnt=0;
//   var stmt1 = db.prepare("INSERT INTO data_20181001 VALUES (?)");
//   for(let fileName of fileData1){
//     stmt1.run(fileName);
//     cnt++;
//     if((cnt % 50000) === 0) { console.log(cnt);}
//   }
//   stmt1.finalize();

//   console.log('inserting data now into data_20181005');

//   var cnt=0;
//   var stmt2 = db.prepare("INSERT INTO data_20181005 VALUES (?)");
//   for(let fileName of fileData2){
//     stmt2.run(fileName);
//     cnt++;
//     if((cnt % 50000) === 0) { console.log(cnt);}
//   }
//   stmt2.finalize();
 
//   console.log('about to run the query');

//   var SQL="select count(*) from data_20181001 where filename='undefined'";
//   db.each(SQL, function(err, row) {
//     console.log(row);
//   });

//   var SQL="select count(*) from data_20181005 where filename='undefined'";
//   db.each(SQL, function(err, row) {
//     console.log(row);
//   });

//   var SQL="select filename from data_20181005 where filename not in (select filename from data_20181001)";
//   db.each(SQL, function(err, row) {
//     console.log(row.filename);
//   });

// });
 
// db.close();
