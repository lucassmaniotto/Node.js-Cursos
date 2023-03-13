const fs = require('fs').promises;
module.exports = (pathFile, data) => {
  fs.writeFile(pathFile, data, {flag: 'w'});
}

/* 
  const path = require('path');
  const filePath = path.resolve(__dirname, 'file.txt');

  const jsonPath = path.resolve(__dirname, 'json.json');

  const people = [
    { name: 'John', age: 20, city: 'New York' },
    { name: 'Mary', age: 30, city: 'London' },
    { name: 'Pierre', age: 40, city: 'Paris' },
    { name: 'Kimiko', age: 50, city: 'Tokyo'},
    { name: 'Paulo', age: 60, city: 'Rio de Janeiro'}
  ]

  const peopleJSON = JSON.stringify(people, '', 2);

  Escreve no arquivo, sobrescrevendo o que já existe nele.
  fs.writeFile(jsonPath, peopleJSON, {flag: 'w', encoding: 'utf8'}, (err) => {
    if (err) throw err;
    console.log('Arquivo escrito com sucesso!');
  }); 


  Escreve no arquivo, sem sobrescrever o que já existe nele.
  fs.writeFile(filePath, 'Hello World\n', {flag: 'a', encoding: 'utf8'}, (err) => {
    if (err) throw err;
    console.log('Arquivo escrito com sucesso!');
  }); 
*/
