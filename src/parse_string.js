/*

Purpose:    File to process a dir /s output from windows
Author:     Jennifer Morgan
Date:       05/10/2018

*/

const moment = require('moment');
const ms = require('ms');

const extractPresets = {
    directory: [22,25],
    name: [36],
    dateTime: [0,17],
    topLevelDir: [1,10],
    topLevelDirName: [14],
    fileSize: [18,35]
};

const doExtract = (key,str, test) => {
    const [start, end] = extractPresets[key];
    let ret = end ? str.substring(start,end) : str.substring(start);
    return test ? ret === test : ret;
};

const getName = (str) => {
    return doExtract('name', str);
};

const isDirectory = (str) => {
    return doExtract('directory',str,'DIR');
};

const getDateTime = (str) => {
    let dt = doExtract('dateTime', str);
    return new Date(`${dt.substring(3,5)}/${dt.substring(0,2)}/${dt.substring(6)}`);
};

const getFileSize = (str) => {
    const fSize=doExtract('fileSize',str)
    const num=fSize.split('').filter( v => v!==',').join('');
    return parseInt(num);
};

const isTopDirectory = (str) => {
    return doExtract('topLevelDir', str, 'Directory')
};

const getNameTopDirectory = (str) => {
    return doExtract('topLevelDirName', str);
};

const getDateTimeMS= (str) => {
    return getDateTime(str).getTime();
};

module.exports = {
    isDirectory,
    getName,
    getDateTime,
    isTopDirectory,
    getNameTopDirectory,
    getFileSize,
    getDateTimeMS
};

