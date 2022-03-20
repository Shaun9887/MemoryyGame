document.addEventListener('DOMContentLoaded', function () {
    
    const cardArray = [
        {
            name: 'Steelers',
            img: 'images/Steelers.png'
        },
        {
            name: 'Steelers',
            img: 'images/Steelers.png'
        },
        {
            name: 'Titans',
            img: 'images/Titans.png'
        },
        {
            name: 'Titans',
            img: 'images/Titans.png'
        },
        {
            name: 'Bucs',
            img: 'images/Bucs.png'
        },
        {
            name: 'Bucs',
            img: 'images/Bucs.png'
        },
        {
            name: 'Chargers',
            img: 'images/Chargers.png'
        },
        {
            name: 'Chargers',
            img: 'images/Chargers.png'
        },
        {
            name: 'Lions',
            img: 'images/Lions.png'
        },
        {
            name: 'Lions',
            img: 'images/Lions.png'
        },
        {
            name: 'Packers',
            img: 'images/Packers.png'
        },
        {
            name: 'Packers',
            img: 'images/Packers.png'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random());
    
    const board = document.querySelector('.board');
    const resultDisplay = document.querySelector('#result');
    let checks = 1;
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            let flippedCard = document.createElement('class');
            flippedCard.innerText = false;
            card.setAttribute('src', 'images/Football.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            card.appendChild(flippedCard);
            board.appendChild(card);
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            cardsWon.push(cardsChosen);
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
        } else {
            cards[optionOneId].setAttribute('src', 'images/Football.png');
            cards[optionTwoId].setAttribute('src', 'images/Football.png');
        };
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = checks++;
        if (cardsWon.length === cardArray.length / 2){
            resultDisplay.textContent = 'Congratulations! You found them all! Refresh to play again.';
        };
    };

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        };
    }

    createBoard();

});