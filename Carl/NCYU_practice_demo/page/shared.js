// 參考 https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/286572/
// 結果不能用 https://ithelp.ithome.com.tw/questions/10189068
const ForReading = 1;
let _ActiveXObject = new ActiveXObject('Scripting.FileSystemObject');
console.log('_ActiveXObject', _ActiveXObject);
let _TextFile = _ActiveXObject.OpenTextFile('./template.txt', ForReading);
console.log('_TextFile', _TextFile);
let _ReadLine = _TextFile.ReadLine();
console.log('_ReadLine', _ReadLine);
document.getElementById('template').innerHTML = _ReadLine;
console.log('document.getElementById(template)', document.getElementById('template'));