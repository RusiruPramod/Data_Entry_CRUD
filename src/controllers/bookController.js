const Book = require('../models/bookModel');

// Create Book
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get All Books
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
};

// Get Book by ID
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

// Update Book
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete Book
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
