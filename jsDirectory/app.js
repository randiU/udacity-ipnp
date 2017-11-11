$(document).ready(function() {

  //changes color of box mouse is hovering over to light gray
  /**$('.front').hover(function() {
    $(this).css('background','#889da0');
  },
  function() {
    $(this).css('background','#2e3d49');
  }); */
  var cardPics, clickCheck, cardChild, refreshPage,
      cardPics = ['fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube', 'fa fa-leaf',
				  'fa fa-bicycle', 'fa fa-bomb','fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-cube',
 				  'fa fa-leaf', 'fa fa-bicycle', 'fa fa-bomb'],
      chosenCard = $('.card'),
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

    startGame = $('.start').click(function() {
      var shuffledCards = shuffle(cardPics);

      $('.card').each(function() {
        $(this).removeClass(this.children());
        $(this).addClass("<i class=" + shuffledCards[0] + "></i>");
        shuffledCards = shuffledCards.splice(0,1);
      });
    });
  /**function startGame() {
    //start game by shuffling cards
    var shuffledCards = shuffle(cardPics);
    cardChild.each(function() {
      cardChild.removeClass();
      cardChild.append("<i class=" + index[0] "></i>");
      shufflecards = shuffledCards.splice(0,1);
  });*/


});
