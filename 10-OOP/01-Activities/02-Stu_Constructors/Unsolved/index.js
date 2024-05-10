// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogPost(parauthorName, title, text, createdOn) {
    this.parauthorName = parauthorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function(authorName, createdOn) {
        console.log( `created by $(parauthorName) on $(createdOn)`);
    };
     
}
// TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'

// TODO: Create a new object using the 'BlogPost' constructor
const BlogPost = new blogpost("me", "its me", "im the best", "12/12/2012" ) 
// TODO: Ca/ll the 'printMetaData/()' method on the new object/
blogpost.printMetaData();