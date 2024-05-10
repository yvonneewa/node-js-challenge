// TODO: Create a class constructor named ForumItem that takes in 'authorName' and 'createdOn'.
class ForumItem {
  constructor(authorName,  createdOn) {
    this.authorName = authorName;
    this.createdOn = createdOn;
  }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    super(authorName, createdOn);
    this.title = title;
    this.text = text;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
    this.text =text;
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn) {
    super(authorName, createdOn);
    this.text = text;
  }
}

// TODO: Create a new object using the Comment class constructor.
const comment = new Comment ("Check,Please!");
// TODO: Create a new object using the BlogPost class constructor.
const BlogPost = new BlogPost("Honey", "Where?", "text of yhe new blog post", new Data);
// TODO: Log both newly created BlogPost and Comment to the console.

console.log(BlogPost);
console.log(comment);