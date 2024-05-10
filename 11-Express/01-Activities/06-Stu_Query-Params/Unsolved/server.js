const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// Route to handle GET requests for retrieving terms
// This route can accept query parameters for sorting terms
app.get('/api/terms/', (req, res) => {
  // req.query contains the parsed query string parameters
  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc')); // Returns terms sorted in descending order
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc')); // Returns terms sorted in ascending order
  }

  // If there is no query parameter, return all terms
  return res.json(termData);
});

// Route to handle GET requests for retrieving a specific term
app.get('/api/term/:term', (req, res) => {
  // req.params contains route parameters
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]); // Returns the requested term
    }
  }

  // Return a message if the term doesn't exist in our database
  return res.json('No term found');
});

// Route to handle GET requests for retrieving terms by category
app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]); // Adds terms with the requested category to the result array
    }
  }
  return res.json(result); // Returns terms with the requested category
});

// Route to handle GET requests for retrieving all unique categories
app.get('/api/categories', (req, res) => {
  // Extracts unique categories from the term data
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result); // Returns unique categories
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
