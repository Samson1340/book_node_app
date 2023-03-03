const { getAllBooks } = require("../../models/book");



exports.getBookPage = (req, res) => {
    // getAllBooks((books) => {
        // console.log(books)
        const viewsData = {
            books: getAllBooks(),
            pageTitle: 'Book Page - Products List'
        };
        res.render('book', viewsData);
    // })
    // console.log(getAllBooks());
        // console.log(viewsData.books)
        // console.log(viewsData.pageTitle)
}

exports.postAddBookPage = (req, res) => {
    const body = req.body.title;
    saveBooks(body);
    // console.log(body)
    res.send(body);
    
}