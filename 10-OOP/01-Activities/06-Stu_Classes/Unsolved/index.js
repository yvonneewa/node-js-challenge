// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.x

// TODO: Give BlogPost a property called 'comments' that is set to an empty array.x

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.x

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array. x

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', and 'createdOn'. x

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) with (text)'.x

// TODO: Create a new object using the Comment class constructor. x

// TODO: Create a new object using the BlogPost class constructor.

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.

class BlogPost{
    constructor(authorName,tittle,text, createdOn)
    this.authorName = authorName;
    this.tittle = tittle;
    this.text = tittle;
    this.createdOn = createdOn;
    this.comments =[];
    this.printMetaData() =function() {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
        
    }
}
addComment = (comment) {
    this.comments.push(comment);
  };

  class Comments {
    constructor(authorName,tittle,text, createdOn)
    this.authorName = authorName;
    this.tittle = tittle;
    this.text = tittle;
    this.createdOn = createdOn;
    this.comments =[];
    this.printMetaData() =function() {
        console.log(`Created by ${this.authorName} on ${this.createdOn}`);
        
    }
}

const myComment = new Comment("check, please!");
const myBlogPost = new BlogPost("i need to pagar");

myBlogPost.addComment(myComment);

console.log("Blog Post Meta Data:");
myBlogPost.printMetaData();

console.log("Comment Meta Data:");
myComment.printMetaData();