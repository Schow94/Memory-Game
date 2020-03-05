window.onload = function() {
  console.log('DOM has loaded');
  //Use count to allow only 2 cards face up at a time
  var count = 1;
  var firstClick, secondClick;
  var currScore = 0;
  var counter = 0;
  var matches = 0;

  //Array of card #s representing card hands
  // //12 Cards
  // var numbers = [
  //   [1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1],
  //   [63, 300, 100, 001, 71, 36, 63, 300, 001, 36, 100, 71],
  //   [123, 1, 213, 2, 3, 111, 123, 2, 1, 3, 111, 213]
  // ];

  //24 Cards
  //Use this arr as a backup if creating random deck fails
  var numbers = [
    [
      1,
      2,
      3,
      4,
      5,
      6,
      6,
      5,
      4,
      3,
      2,
      1,
      63,
      300,
      100,
      001,
      71,
      36,
      63,
      300,
      001,
      36,
      100,
      71
    ],
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      12,
      11,
      10,
      9,
      8,
      7,
      6,
      5,
      4,
      3,
      2,
      1
    ]
    // [123, 1, 213, 2, 3, 111, 123, 2, 1, 3, 111, 213]
  ];

  //Randomly create a deck & shuffle
  //Create Arr of random #s
  const createArr = () => {
    let num = 12;
    let arr = [];
    let randomNum;
    while (num > 0) {
      randNum = Math.floor(Math.random() * 100);
      arr.push(randNum);
      arr.push(randNum);
      num--;
    }
    return arr;
  };

  //Shuffle Arr
  function shuffle(arr) {
    //Variable Declarations
    var currIdx = arr.length;
    var temp;
    var randomIdx;
    //Loop arr.length to 1
    while (0 !== currIdx) {
      randomIdx = Math.floor(Math.random() * currIdx);
      currIdx--;
      temp = arr[currIdx];
      arr[currIdx] = arr[randomIdx];
      arr[randomIdx] = temp;
    }
    return arr;
  }

  //Create Deck
  const createAndShuffle = () => {
    return shuffle(createArr());
  };

  //Randomly pick from pre-made
  var randomNum = Math.floor(Math.random() * (numbers.length + 1));
  var randomArr = createAndShuffle() || numbers[0];

  //Selectors
  var article = document.querySelector('article');
  var button = document.querySelector('.start-btn');
  var header = document.querySelector('header');
  var cardImage = document.querySelector('.card-image');
  var newGameBtn = document.querySelector('.refresh-btn');
  var title = document.querySelector('.title');
  var cards = document.getElementsByClassName('back');
  var instructions = document.querySelector('.instructions');

  //Create hand/shuffle cards - Create HTML w/ JS as soon as DOM loads
  function createDeck(e) {
    // var topRow = document.createElement('div');
    // topRow.className = 'row-top';
    // var bottomRow = document.createElement('div');
    // bottomRow.className = 'row-bottom';
    var rowOne = document.createElement('div');
    rowOne.className = 'row row-1';
    var rowTwo = document.createElement('div');
    rowTwo.className = 'row row-2';
    var rowThree = document.createElement('div');
    rowThree.className = 'row row-3';
    var rowFour = document.createElement('div');
    rowFour.className = 'row row-4';

    article.removeChild(cardImage);
    article.removeChild(instructions);
    article.append(rowOne);
    article.append(rowTwo);
    article.append(rowThree);
    article.append(rowFour);

    // //Playing with 12 cards
    // //Create Top Row Cards
    // for (let i = 0; i < 6; i++) {
    //   var cardFace = document.createElement('div');
    //   var cardBack = document.createElement('div');

    //   cardBack.className = `card card-${i + 1} back`;
    //   cardFace.className = `card card-${i + 1} face`;

    //   var pGraph = document.createElement('p');
    //   pGraph.innerText = `${randomArr[i]}`;
    //   pGraph.classList.add(`val-${randomArr[i]}`);
    //   pGraph.classList.add('card-text');
    //   cardFace.append(pGraph);
    //   topRow.append(cardBack);
    //   topRow.append(cardFace);
    // }

    // //Create Bottom Row Cards
    // for (let i = 6; i < randomArr.length; i++) {
    //   var cardFace = document.createElement('div');
    //   var cardBack = document.createElement('div');

    //   cardBack.className = `card card-${i + 1} back`;
    //   cardFace.className = `card card-${i + 1} face`;
    //   // cardFace.onclick = null;
    //   // cardBack.classList.add('click-disabled');
    //   var pGraph = document.createElement('p');
    //   pGraph.innerHTML = `${randomArr[i]}`;
    //   pGraph.classList.add(`val-${randomArr[i]}`);
    //   pGraph.classList.add('card-text');
    //   cardFace.append(pGraph);
    //   bottomRow.append(cardBack);
    //   bottomRow.append(cardFace);
    // }

    //Playing with 24 cards 4 x 6
    //Row 1 Cards
    for (let i = 0; i < 6; i++) {
      var cardFace = document.createElement('div');
      var cardBack = document.createElement('div');

      cardBack.className = `card card-${i + 1} back`;
      cardFace.className = `card card-${i + 1} face`;

      var pGraph = document.createElement('p');
      pGraph.innerText = `${randomArr[i]}`;
      pGraph.classList.add(`val-${randomArr[i]}`);
      pGraph.classList.add('card-text');
      cardFace.append(pGraph);
      rowOne.append(cardBack);
      rowOne.append(cardFace);
    }

    //Row 2 Cards
    for (let i = 6; i < 12; i++) {
      var cardFace = document.createElement('div');
      var cardBack = document.createElement('div');

      cardBack.className = `card card-${i + 1} back`;
      cardFace.className = `card card-${i + 1} face`;
      var pGraph = document.createElement('p');
      pGraph.innerHTML = `${randomArr[i]}`;
      pGraph.classList.add(`val-${randomArr[i]}`);
      pGraph.classList.add('card-text');
      cardFace.append(pGraph);
      rowTwo.append(cardBack);
      rowTwo.append(cardFace);
    }

    //Row 3 Cards
    for (let i = 12; i < 18; i++) {
      var cardFace = document.createElement('div');
      var cardBack = document.createElement('div');

      cardBack.className = `card card-${i + 1} back`;
      cardFace.className = `card card-${i + 1} face`;

      var pGraph = document.createElement('p');
      pGraph.innerText = `${randomArr[i]}`;
      pGraph.classList.add(`val-${randomArr[i]}`);
      pGraph.classList.add('card-text');
      cardFace.append(pGraph);
      rowThree.append(cardBack);
      rowThree.append(cardFace);
    }

    // Row 4 Cards
    for (let i = 18; i < 24; i++) {
      var cardFace = document.createElement('div');
      var cardBack = document.createElement('div');

      cardBack.className = `card card-${i + 1} back`;
      cardFace.className = `card card-${i + 1} face`;

      var pGraph = document.createElement('p');
      pGraph.innerText = `${randomArr[i]}`;
      pGraph.classList.add(`val-${randomArr[i]}`);
      pGraph.classList.add('card-text');
      cardFace.append(pGraph);
      rowFour.append(cardBack);
      rowFour.append(cardFace);
    }
  }

  //Event Handlers

  //Start game - Show user cards for 4sec
  button.addEventListener('click', e => {
    button.classList.remove('start-btn');
    button.innerText = 'New Game?';
    button.style.backgroundColor = 'orange';
    button.style.color = 'black';
    button.classList.add('refresh-btn');
    button.addEventListener('click', e => {
      window.location.reload();
    });

    //Create Deck Here
    createDeck();

    //Prevent clicking on anything that's not a card
    const pageHandler = e => {
      var arr = e.target.className.split(' ');
      if (!arr.includes('card')) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    //Prevent clicking on back of cards while showing face to users
    const backHandler = e => {
      var arr = e.target.className.split(' ');
      if (arr.includes('back')) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    //Prevent clicking on face of cards at all times
    const faceHandler = e => {
      var arr = e.target.className.split(' ');
      if (arr.includes('face')) {
        e.stopPropagation();
        e.preventDefault();
      }
    };

    //Disable Clicking on anything in article w/ className
    //that includes 'back'
    article.addEventListener('click', faceHandler, true);
    article.addEventListener('click', backHandler, true);
    article.addEventListener('click', pageHandler, true);

    //Allow user to start clicking on cards 4 sec after game starts
    var timer = setTimeout(() => {
      // console.log('Time out');
      article.removeEventListener('click', backHandler, true);
    }, 4000);

    //Shows user cards for 4 sec & then flips cards face down
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.zIndex = -1;
      var timer = setTimeout(() => {
        cards[i].style.zIndex = 1;
      }, 4000);
    }

    //Add Score Box to Header
    var score = document.createElement('p');
    score.innerText = `Score: ${currScore}`;
    var bestScore = document.createElement('p');
    bestScore.innerText = 'Best Score: ';
    var div = document.createElement('div');
    div.append(bestScore);
    div.append(score);
    title.after(div);
    div.className = 'score-box';

    //Count 1, 2, 3, Go & before user can play game
    var interval = setInterval(() => {
      counter++;
      console.log(counter);
      title.innerText = `${counter}`;
      if (counter === 4) {
        title.innerText = 'Go';
      }
    }, 1000);

    var timeOut = setTimeout(() => {
      clearInterval(interval);
    }, 4000);

    var timeOut2 = setTimeout(() => {
      title.innerText = `Give up Yet?`;
      // title.style.fontSize = '2em';
    }, 10000);
  });

  //Flip a card
  article.addEventListener('click', function(e) {
    var DOMScore = document.querySelector('.score-box');

    console.log('count: ', count);
    //Start count/clicks at 1 & max out at 2 clicks
    //Card #1
    if (count === 1) {
      firstClick = e.target;
      firstClick.style.zIndex = -1;
      count++;
      currScore++;
      DOMScore.children[1].innerHTML = `Score: ${currScore}`;
    }
    //Card #2
    else if (count === 2) {
      secondClick = e.target;
      //Revealing face of card #2
      secondClick.style.zIndex = -1;
      count++;

      setTimeout(() => {
        count = 1;
      }, 1000);
      currScore++;
      DOMScore.children[1].innerHTML = `Score: ${currScore}`;

      // const cardHandler = e => {
      //   if (e.target.className === 'card card-1 back') {
      //     console.log(true);
      //     e.stopPropagation();
      //     e.preventDefault();
      //   }
      //   // e.stopPropagation();
      //   // e.preventDefault();
      // };
      // article.addEventListener('click', cardHandler, false);
      article.classList.add('click-disabled');

      if (
        firstClick.nextSibling.children[0].className !==
        secondClick.nextSibling.children[0].className
      ) {
        console.log('Cards do NOT match!');
        firstClick.nextSibling.classList.add('wrong');
        secondClick.nextSibling.classList.add('wrong');

        var time2 = setTimeout(() => {
          firstClick.style.zIndex = 1;
          secondClick.style.zIndex = 1;
          firstClick.nextSibling.classList.remove('wrong');
          secondClick.nextSibling.classList.remove('wrong');
          article.classList.remove('click-disabled');
        }, 1000);
        //After 1 sec, you can click on a new card again
      }
      //IF 2 cards are same
      else if (
        firstClick.nextSibling.children[0].className ===
        secondClick.nextSibling.children[0].className
      ) {
        matches++;
        console.log('matches: ', matches);
        firstClick.nextSibling.classList.add('correct');
        if (matches === 12) {
          title.innerText = 'Congratulations, we have a winner!';
          title.classList.add('winner');
        }
        // firstClick.nextSibling.classList.add('click-disabled');
        secondClick.nextSibling.classList.add('correct');
        // secondClick.nextSibling.classList.add('click-disabled');
      }
    }
  });
};
