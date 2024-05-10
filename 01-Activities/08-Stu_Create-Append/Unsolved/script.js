const body = document.body;
const h1El = document.createElement('h1');
const infoEl = document.createElement('div');
const imgEl = document.createElement('img');
const kittenEl = document.createElement('div');
const nameEl = document.createElement('div');
const favoriteEl = document.createElement('div');
// Create ordered list element
const listEl = document.createElement('ol');
// Create ordered list items
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const li4 = document.createElement('li');

h1El.textContent = 'Welcome to my page';
kittenEl.textContent = 'This is my kitten 🐱.';
nameEl.textContent = 'His name is Jax.';
favoriteEl.textContent = 'My favorite foods are:';

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list
favoriteEl.appendChild(listEl);

h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
infoEl.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
imgEl.setAttribute('src', 'http://placekitten.com/200/300');
nameEl.setAttribute('style', 'font-size:25px; text-align:center;');
kittenEl.setAttribute('style', 'font-size:25px; text-align:center;');
favoriteEl.setAttribute('style', 'font-size:20px;');

// TODO: Add ordered list items containing four favorite foods
li1.textcontent= "lobster";
li2.textContent= 'fruit';
li3.textContent= 'popcorn';
li4.textContent= "cereal";

listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

listEl.setAttribute("style", "backround: #333333; padding 20px")

li1.setAttribute("style", "color: black; background: orange; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", "color: green; background: silver; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", "color: blue; background:  black; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", "color: black; background: gray; padding: 5px; margin-left: 35px;");