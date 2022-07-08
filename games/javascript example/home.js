
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = '#29323c';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function ageInDays() {
    var birthYear = prompt('what year were you born.... Good friend');
    var ageInDayss = (2022 - birthYear)  ;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('If you are truly ' + birthYear + ' then your age is ' + ageInDayss + ' years old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    document.getElementById("flex-box-result").style.border = " solid #0000FF";
    console.log(ageInDayss);

}

function reset () {
    document.getElementById('ageInDays').remove();
}

function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('boom');
    image.src = "https://cdn2.thecatapi.com/images/7av.gif";
    div.appendChild(image);

}

function resetOut () {
    document.querySelector('img').remove();
}

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsIn());
    console.log('computer Choice', botChoice);
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message)

}

function randToRpsIn() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock' : {'scissors':1, 'rock': 0.5, 'papper':0},
        'paper' : {'rock':1, 'paper': 0.5, 'scissors':0},
        'scissors' : {'paper':1, 'scissors': 0.5, 'rock':0},
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice]
    let computerScore = rpsDatabase[computerChoice][yourChoice]

    return [yourScore, computerScore]
}

function finalMessage ([yourScore,computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color':'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd (humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height=150  width=120 style='box-shadow: 0px 10px 50px rgba(20 , 30, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height=150  width=120 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1);'>"
   

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


    
}


var all_buttons = document.getElementsByTagName('button');
var  copyAllButton = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButton.push(all_buttons[i].classList[1])
}

console.log(copyAllButton);

function buttonColorChange(buttonThing) {
    if (buttonThing.value === 'red') {
        buttonsRed();
    } else if (buttonThing.value === 'green') {
        buttonsGreen();
    } else if (buttonThing.value === 'reset') {
        buttonsColorReset();
    } else if (buttonThing.value === 'random') {
        randomColor();
    }
}



function buttonsRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsColorReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButton[i]);
    }
}

function randomColor() {
    let choices = ['btn-primary','btn-warning','btn-danger', 'btn-success']
    
    for (let i=0; i < all_buttons.length; i++) {
        let randomNumbers = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumbers]);
    }
}

// container 5

let blackjackGame = {
    'you':{'scorespan': '#your-blackjack-result', 'div': '#yourbox', 'score': 0},
    'dealer':{'scorespan': '#dealer-blackjack-result', 'div': '#dealerbox', 'score': 0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1, 11]},
    'win': 0,
    'draw': 0,
    'losses': 0,
    'isStand':false,
    'turnsOver':false,
}

const YOU = blackjackGame ['you']
const DEALER = blackjackGame ['dealer']

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#hit').addEventListener('click', blackjackHit);

document.querySelector('#stand').addEventListener('click', dealerLogic);

document.querySelector('#deal').addEventListener('click', blackjackDeal);

function blackjackHit() {
    if (blackjackGame['isStand']  === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card,YOU);
        showScore(YOU);

    }
}

function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = `images/${card}.png`;
        cardImage.style.width = '85px';
        cardImage.style.height = '100px';
        cardImage.style.padding = '5px';
        // cardImage.style.display = 'flex';
        // cardImage.style.flexPosition = 'row';
        // cardImage.style.flexWrap = 'wrap';
        // cardImage.style.justifyContent = 'space-around';
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
}

function blackjackDeal() {
    if (blackjackGame['turnsOver'] === true) {

        blackjackGame['isStand'] = false;

        let yourImage = document.querySelector('#yourbox').querySelectorAll('img');
        let dealerImage = document.querySelector('#dealerbox').querySelectorAll('img');

        for (i=0; i < yourImage.length; i++) {
            yourImage[i].remove();
        }

        for (i=0; i < dealerImage.length; i++) {
            dealerImage[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-result').style.color = '#ffffff';

        document.querySelector('#blackjack-result').textContent = "Let's Play";
        document.querySelector('#blackjack-result').style.color = 'black';

        blackjackGame['turnsOver'] = true;
    }
}

function updateScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scorespan']).textContent = 'BUST!'
        document.querySelector(activePlayer['scorespan']).style.color = 'red'
    } else {
        document.querySelector(activePlayer['scorespan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true)  {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
   
    
        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
        console.log(blackjackGame['turnsOver']);
}



// computer winner and return who just won
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            blackjackGame['win']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            blackjackGame['losses']++;
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']) {
            blackjackGame['draw']++;
        }

    } else if (YOU['score'] > 21 && DEALER['score'] <=21) {
        blackjackGame['losses']++;
        winner = DEALER;

    } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
        blackjackGame['draw']++;
    }
    console.log(blackjackGame);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#win').textContent = blackjackGame['win'];
            message = 'You Won';
            messageColor = 'green';
            winSound.play();

        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You Lost';
            messageColor = 'red';
            lossSound.play();

        } else {
            document.querySelector('#draw').textContent = blackjackGame['draw'];
            message = 'You Drew';
            messageColor = 'yellow';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}
