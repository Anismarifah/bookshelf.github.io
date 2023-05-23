const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    updateBookByIdHandler,
    deleteBookByIdhandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler,
    },
    {
        method: 'PUT',
        PATH: '/books/{bookId}',
        handler: updateBookByIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId',
        handler: deleteBookByIdhandler,
    },
];

module.exports = routes;