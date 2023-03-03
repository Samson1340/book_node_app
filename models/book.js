const mainDir = require('../utils/path')
const fs = require('fs');
const path = require('path');
    
exports.saveBooks =(body) => {
    const dataPath = path.join(mainDir, 'data', 'books.json');
    fs.readFile(dataPath, (err, booksData)=>{
        let books = []
        if(!err){
                books = JSON.parse(booksData)
        }
        books.push(body);
        fs.writeFile('books.json', JSON.stringify(books), err => {
            console.log(err)
        })
    })

}
//     let book = [];
// var getAllBooks = () => {
   
//     const dataPath = path.join(mainDir, 'data', 'books.json');
//     fs.readFile(dataPath, (err, booksData) => {
//         if (err) throw err;
//         this.books = JSON.parse(booksData);
//         // _books.add(JSON.parse(booksData))
//     })
//     console.log(books)
//     return books;

// };
const dataPath = path.join(mainDir, 'data', 'books.json');
var getAllBooks = fs.readFile(dataPath, (err, booksData) => {
    let books = [];
    if (err) throw err;
    books = JSON.parse(booksData);
    // _books.add(JSON.parse(booksData))
    // console.log(books)
    return books;
})
console.log(getAllBooks)


module.exports = { getAllBooks }
