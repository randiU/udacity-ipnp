$(document).ready(function() {
  "use strict";
  //changes color of box mouse is hovering over to light gray
  /**$('.front').hover(function() {
    $(this).css('background','#889da0');
  },
  function() {
    $(this).css('background','#2e3d49');
  }); */
  var cardPics, clickCheck, cardChild, refreshPage, start,

      cardPics = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf',
				  'fa fa-bicycle', 'fa fa-bomb','fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube',
 				  'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'],
      chosenCard = $('.card'),
      start = $('.start'),
      cardChild = chosenCard.children(),
      //flips card over to reveal image
      clickCheck = $('.front').click(function() {
        $(this).toggleClass('front');
        $(this).toggleClass('open');
      }),
      //refreshes page
      refreshPage = $("button").click(function() {
        location.reload(true);
      });

  // Shuffle function from http://stackoverflow.com/a/2450976
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
  }

  //Uses start button to shuffle cards
  function startGame() {
      shuffle(cardPics);
      cardChild.removeClass();
      cardChild.each(function(index) {
        $(this).addClass(cardPics[index]);
        index++;
    });
  };





startGame();
});
