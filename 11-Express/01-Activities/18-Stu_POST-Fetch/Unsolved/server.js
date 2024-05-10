const express = require('express');
const path = require('path');
// Helper method for generating unique ids
const uuid = require('./helpers/uuid');
const reviews = require('./db/reviews');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET request for reviews
app.get('/api/reviews', (req, res) => {
  console.info(`GET /api/reviews`);
  res.status(200).json(reviews);
});

// GET request for a single review
app.get('/api/reviews/:review_id', (req, res) => {
  const { review_id } = req.params;

  if(!review_id) {
    return res.status(400).send('Review ID not found!');
  }

  console.info(`${req.method} request received to get a single review`);

  const review = reviews.find((rev) => rev.review_id == review_id);

  if(!review) {
    return res.status(404).json("Review not found!")
  }; 

  res.status(200).json(review);
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // TODO: Add a comment describing the functionality of following line of code:
  //  This line of code is using destructuring assignment to extract the product, review, and username properties from the req.body object. These properties likely represent the essential components of a review, such as the reviewed product, the review content, and the username of the reviewer.
  const { product, review, username } = req.body;

  // TODO: Add a comment describing why we would check to see if the following properties exist before entering the code block
  // This check ensures that the incoming request contains all the necessary data to create a new review. If any of these properties are missing, it indicates that the request is incomplete or malformed, so the server cannot proceed with creating the review. Therefore, the check ensures that only valid requests with all required data are processed.
  if (product && review && username) {
    // Variable for the object we will save
    const newReview = {
      product,
      review,
      username,
      upvotes: Math.floor(Math.random() * 100),
      review_id: uuid(),
    };

    const response = {
      status: 'success',
      body: newReview,
    };

    console.log(response);

    // TODO: Add a comment explaining the functionality of res.json()
    //The res.json() function sends a JSON response to the client. It serializes the given JavaScript object into JSON format and sends it as the response body. This function is typically used to send data back to the client in JSON format, along with setting the appropriate Content-Type header to indicate that the response body is JSON.
    res.status(201).json(response);
  } else {
    // TODO: Add a comment describing the purpose of the else statement in this POST request.
    //The purpose of the else statement in the POST request is to handle the case where the incoming request does not contain all the required data (i.e., product, review, and username properties). If any of these properties are missing, the server responds with a 500 Internal Server Error status and a JSON message indicating that there was an error in posting the review. This ensures that clients receive feedback about the error and know that their request was not successfully processed.
    res.status(500).json('Error in posting review');
  }
});

// GET request for a specific review's upvotes
app.get('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;
  
  if (!review_id) {
    return res.status(400).send('Review ID not found!');
  };

  console.info(`${req.method} request received to get upvotes for a review`);

  const review = reviews.find((rev) => rev.review_id == review_id);

  if(!review) {
    return res.status(404).json("Review not found!")
  }; 

  res.json({
    message: `The review with ID ${review.review_id} has ${review.upvotes}`,
    upvotes: review.upvotes
  });
});

// POST request to upvote a review
app.post('/api/upvotes/:review_id', (req, res) => {
  const { review_id } = req.params;
  const { upvote } = req.body;

  if(upvote === undefined) {
    return res.status(400).json('Provide a req.body with upvote!');
  };

  const review = reviews.find((rev) => rev.review_id == review_id);

  if(!review) {
    return res.status(404).json("Review not found!")
  }; 

  console.info(`${req.method} request received to upvote a review!`);

  review.upvotes++;

  res.json(`New upvote count is ${review.upvotes}!`);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
