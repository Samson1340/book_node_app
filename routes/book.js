const express = require('express');
const { getBookPage, postAddBookPage } = require('../controllers/book/BookController');
const router = express.Router();



router.get('/', getBookPage);
router.post('/add', postAddBookPage);

// router.post('/', function(req, res) {

//     const isBn = req.params.isbn;
//     const data = getData.find((book) => book.isbn === isBn);
//     console.log(data);
//     res.render('bookDetail', data);
// })

// router.post("/",function(req,res){
//     const isBn = req.params.isbn;
//     let index = getData.books.findIndex((book => book.isbn === isBn));
//     let deleteBook = getData.books.splice(index,1)
//      res.redirect('/book'); 
// })


module.exports = router