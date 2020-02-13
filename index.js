window.onload = function() {
  console.log('DOM has loaded');
  //Use count to allow only 2 cards face up at a time
  var count = 0;
  var firstClick;
  var secondClick;
  var currScore = 0;

  //Randomly pick number for cards
  var numbers = [
    [1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1],
    [63, 300, 100, 001, 71, 36, 63, 300, 001, 36, 100, 71],
    [123, 1, 213, 2, 3, 111, 123, 2, 1, 3, 111, 213]
  ];
  var randomNum = Math.floor(Math.random() * numbers.length + 1);
  var randomArr = numbers[randomNum] || numbers[1];
  console.log(randomArr);

  //Selectors
  var article = document.querySelector('article');
  var button = document.querySelector('button');
  var header = document.querySelector('header');
  var cardImage = document.querySelector('.card-image');

  var cards = document.getElementsByClassName('back');

  //Create hand/shuffle cards - Create HTML w/ JS as soon as DOM loads
  function createDeck() {
    var topRow = document.createElement('div');
    topRow.className = 'row-top';
    var bottomRow = document.createElement('div');
    bottomRow.className = 'row-bottom';
    article.removeChild(cardImage);
    article.append(topRow);
    article.append(bottomRow);

    //Create Top Row Cards
    for (let i = 0; i < 6; i++) {
      var cardFace = document.createElement('div');
      var cardBack = document.createElement('div');

      cardBack.className = `card card-${i + 1} back`;
      cardFace.className = `card card-${i + 1} face`;
      var pGraph = document.createElement('p');
      pGraph.innerText = `${randomArr[i]}`;
      cardFace.append(pGraph);
      topRow.append(cardBack);
      topRow.append(cardFace);
    }

    //Create Bottom Row Cards
    //Create hand/shuffle cards - Create HTML w/ JS as soon as DOM loads
    for (let i = 6; i < randomArr.length; i++) {
      var cardFace = document.createElement('div');
      var cardBack = document.createElement('div');

      cardBack.className = `card card-${i + 1} back`;
      cardFace.className = `card card-${i + 1} face`;
      var pGraph = document.createElement('p');
      pGraph.innerHTML = `${randomArr[i]}`;
      cardFace.append(pGraph);
      bottomRow.append(cardBack);
      bottomRow.append(cardFace);
    }
  }

  //Event Handlers
  //Start game - Show user cards for 2sec
  button.addEventListener('click', e => {
    button.innerText = 'Give up yet?';
    button.style.backgroundColor = 'orange';
    button.style.color = 'black';

    //Create Deck Here
    createDeck();

    for (let i = 0; i < cards.length; i++) {
      cards[i].style.zIndex = -1;
      var timer = setTimeout(() => {
        cards[i].style.zIndex = 1;
      }, 2000);
    }

    var score = document.createElement('p');
    score.innerText = `Score: ${currScore}`;
    var bestScore = document.createElement('p');
    bestScore.innerText = 'Best Score: ';
    var div = document.createElement('div');
    div.append(bestScore);
    div.append(score);
    header.append(div);
    div.className = 'score-box';
  });

  //Flip a card - changes color of div/text from blue to white
  article.addEventListener('click', function(e) {
    //Have to select for score here every time we change score to
    //reflect changes to DOM with each update
    var DOMScore = document.querySelector('.score-box');
    console.log(DOMScore);

    if (count === 0) {
      firstClick = e.target;
      firstClick.style.zIndex = -1;
      count++;
      currScore++;
      DOMScore.children[1].innerHTML = `Score: ${currScore}`;
    } else if (count === 1) {
      secondClick = e.target;
      secondClick.style.zIndex = -1;
      count++;
      currScore++;
      DOMScore.children[1].innerHTML = `Score: ${currScore}`;

      if (
        firstClick.nextSibling.innerText !== secondClick.nextSibling.innerText
      ) {
        firstClick.nextSibling.classList.add('wrong');
        secondClick.nextSibling.classList.add('wrong');

        var time2 = setTimeout(() => {
          firstClick.style.zIndex = 1;
          secondClick.style.zIndex = 1;
          firstClick.nextSibling.classList.remove('wrong');
          secondClick.nextSibling.classList.remove('wrong');
        }, 1500);
      } else if (
        firstClick.nextSibling.innerText === secondClick.nextSibling.innerText
      ) {
        firstClick.nextSibling.style.backgroundColor = 'green';
        firstClick.nextSibling.style.color = 'black';
        secondClick.nextSibling.style.backgroundColor = 'green';
        secondClick.nextSibling.style.color = 'black';
      }
    } else {
      count = 0;
      firstClick = e.target;
      firstClick.style.zIndex = -1;
      count++;
      currScore++;
      DOMScore.children[1].innerHTML = `Score: ${currScore}`;
    }

    console.log(
      'firstClick: ',
      firstClick.nextSibling.innerText,
      'secondClick: ',
      secondClick.nextSibling.innerText
    );
    console.log('count:', count);
    console.log('score:', currScore);
  });
  //Event Listener to update Score in DOM
};
