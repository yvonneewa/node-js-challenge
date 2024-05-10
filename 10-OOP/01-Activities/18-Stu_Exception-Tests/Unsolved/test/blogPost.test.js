
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.
  const BlogPost = require('../blogPost.js');

  describe('BlogPost', () => {
    describe('constructor', () => {
      test('throws an error when authorName provided is less than 2 characters long', () => {
        expect(() => {
          new BlogPost('p');
        }).toThrow('Author must be at least 2 characters long.');
      });
  
      test('throws an error when authorName provided contains invalid characters', () => {
        expect(() => {
          new BlogPost('Invalid$Name');
        }).toThrow('Author must only contain letters, numbers, dashes, and underscores.');
      });
  
      test('does not throw an error when authorName provided meets requirements', () => {
        expect(() => {
          new BlogPost('Valid_Name123');
        }).not.toThrow();
      });
    });
  });
  