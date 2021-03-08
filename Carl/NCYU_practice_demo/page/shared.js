// 參考 https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/286572/
const ForReading = 1;
let _ActiveXObject = new ActiveXObject('Scripting.FileSystemObject');
let _TextFile = _ActiveXObject.OpenTextFile('./template.txt', ForReading);
let _ReadLine = _TextFile.ReadLine();

document.getElementById('template').innerHTML = _ReadLine;