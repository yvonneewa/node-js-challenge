
  // TODO: Complete function
  // It's done when I click on a card and the hidden number is revealed.

  // * It's done when the number is visible if the card is clicked.
  const revealedNumbers ="revealed"
  const state = element.getAttribute('data-state');

const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

 
  if (state === 'hidden') {
    
    element.dataset.state = 'revealed';
  ;

    element.setAttribute( element.dataset.revealedNumbers);
  } else {
    
    element.dataset.state = 'hidden';
   
  }


});
