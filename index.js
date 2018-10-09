console.log('Starting');

const fs = require('fs');
const rawFileData = fs.readFileSync('20181008_clean.txt', 'utf8');



const fileData = rawFileData
  .split("\n")
  .filter(v => v.indexOf('<DIR>') < 0);

console.log(fileData.length);
let timeMSIndex=[];
let bigObj={};
for (let line of fileData) {
  // two cases either line is the directory name or its file details
  //console.log(line);
  if (line.length > 0) {
    if (line.indexOf('Directory') > 0) {
      var dirName = line.substring(14);
    }
    else {
      const dTime = line.substr(0, 17);
      const dTimeParts = dTime.split('/');
      const dTimeMS = new Date(`${dTimeParts[1]}/${dTimeParts[0]}/${dTimeParts[2]}`).getTime()
      const fSize = parseInt(line.substring(18, 35).replace(',', ''));
      const fName = line.substring(36);
      const fullName = JSON.stringify(`${dirName}\\${fName}`);
      //
      // given this data create one array with the time MS and store the time as a key to an object with all the data
      //
      timeMSIndex.push(dTimeMS);
      var dArray=[dTimeMS, dTime, fSize, fullName];
      (dTimeMS in bigObj) ? bigObj[dTimeMS].push(dArray) : bigObj[dTimeMS]=[dArray];
    }
  }
}

//Sort the MS
const outFileName='outfile.txt';

fs.unlink(outFileName);
let index=[...new Set(timeMSIndex)].sort();

console.log('Appending to outfile');

for(let k of index) {
  for(let s of bigObj[k]) {
    var out=`${s[0]},${s[1]},${s[2]},${s[3]}` + "\n";
    fs.appendFile(outFileName,out,'utf8');
  }
}
console.log('Finished');