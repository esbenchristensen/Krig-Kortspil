let path = "Kortbilleder/";
var suitNames = ["spades", "diamonds", "clubs", "hearts"];
var newGame;
var newPlayer1;
var newPlayer2;
var newCard;

class Game {
    constructor(players, deck, player1cards, player2cards, warBool, winner, rounds, won) {
        this.players = players;
        this.deck = deck;
        this.player1cards = player1cards;
        this.player2cards = player2cards;
        this.warBool = warBool;
        this.winner = winner;
        this.rounds = rounds;
        this.won = won;
    }
    war() {
        if (newPlayer1.cards.length < 3) {
            alert("Spiller 1 har mindre end 3 kort tilbage. Spiller 2 vinder spillet.");
            newGame.won = true;
        } else if (newPlayer2.cards.length < 3) {
            alert("Spiller 2 har mindre end 3 kort tilbage. Spiller 1 vinder spillet.");
            newGame.won = true;
        } else {
            let warCardsPlayer1 = (newGame.player1CardsInPlay = newPlayer1.cards.splice(0, 3));
            let warCardsPlayer2 = (newGame.player2CardsInPlay = newPlayer2.cards.splice(0, 3));
            let playerOneWarImage1 = (document.querySelector("#playerOneWarCardImage1").src = warCardsPlayer1[0].imagePath);
            let playerOneWarImage2 = (document.querySelector("#playerOneCardImage").src = warCardsPlayer1[1].imagePath);
            let playerOneWarImage3 = (document.querySelector("#playerOneWarCardImage2").src = warCardsPlayer1[2].imagePath);
            let playerTwoWarImage1 = (document.querySelector("#playerTwoWarCardImage1").src = warCardsPlayer2[0].imagePath);
            let playerTwoWarImage2 = (document.querySelector("#playerTwoCardImage").src = warCardsPlayer2[1].imagePath);
            let playerTwoWarImage3 = (document.querySelector("#playerTwoWarCardImage2").src = warCardsPlayer2[2]?.imagePath);
            document.querySelector("#playerOneCardsLeft").innerHTML = "Kort: " + newPlayer1.cards.length;
            document.querySelector("#playerTwoCardsLeft").innerHTML = "Kort: " + newPlayer2.cards.length;
            this.compareWarCards();
        }
    }
    compareWarCards() {
        let player1rank = newGame.player1CardsInPlay[2].rank;
        let player2rank = newGame.player2CardsInPlay[2].rank;
        if (player1rank > player2rank) {
            newGame.winner = newPlayer1;
            document.querySelector("#spillerOne").classList.toggle("winner");
            document.querySelector("#spillerTwo").classList.toggle("looser");
            document.querySelector("#playerOneCardRank").innerHTML = "Card rank: " + player1rank;
            document.querySelector("#playerTwoCardRank").innerHTML = "Card rank: " + player2rank;
            document.querySelector("#winningPlayer").innerHTML = "Spiller 1 vinder!";
            newGame.giveWarCard();
        } else if (player2rank > player1rank) {
            newGame.winner = newPlayer2;
            document.querySelector("#spillerOne").classList.toggle("looser");
            document.querySelector("#spillerTwo").classList.toggle("winner");
            document.querySelector("#playerOneCardRank").innerHTML = "Card rank: " + player1rank;
            document.querySelector("#playerTwoCardRank").innerHTML = "Card rank: " + player2rank;
            document.querySelector("#winningPlayer").innerHTML = "Spiller 2 vinder!";
            newGame.giveWarCard();
        } else if (player2rank === player1rank) {
            newPlayer1.cards.push(newGame.player1CardsInPlay[0], newGame.player1CardsInPlay[1], newGame.player1CardsInPlay[2]);
            console.log("Logging cards");
            console.log(newGame.player1CardsInPlay[0], newGame.player1CardsInPlay[1], newGame.player1CardsInPlay[2]);
            newPlayer2.cards.push(newGame.player2CardsInPlay[0], newGame.player2CardsInPlay[1], newGame.player2CardsInPlay[2]);
            document.querySelector("#playerOneCardRank").innerHTML = "Card rank: " + player1rank;
            document.querySelector("#playerTwoCardRank").innerHTML = "Card rank: " + player2rank;
            document.querySelector("#war").innerHTML = "ANOTHER WAR!";
            this.war();
        }
    }
    compareCards() {
        let player1rank = newGame.player1CardsInPlay[0].rank;
        let player2rank = newGame.player2CardsInPlay[0].rank;
        if (player1rank > player2rank) {
            newGame.winner = newPlayer1;
            document.querySelector("#spillerOne").classList.toggle("winner");
            document.querySelector("#spillerTwo").classList.toggle("looser");
            document.querySelector("#playerOneCardRank").innerHTML = "Card rank: " + player1rank;
            document.querySelector("#playerTwoCardRank").innerHTML = "Card rank: " + player2rank;
            document.querySelector("#winningPlayer").innerHTML = "Spiller 1 vinder!";
            newGame.giveCard();
        } else if (player2rank > player1rank) {
            newGame.winner = newPlayer2;
            document.querySelector("#spillerOne").classList.toggle("looser");
            document.querySelector("#spillerTwo").classList.toggle("winner");
            document.querySelector("#playerOneCardRank").innerHTML = "Card rank: " + player1rank;
            document.querySelector("#playerTwoCardRank").innerHTML = "Card rank: " + player2rank;
            document.querySelector("#winningPlayer").innerHTML = "Spiller 2 vinder!";
            newGame.giveCard();
        } else if (player2rank === player1rank) {
            newPlayer1.cards.push(newGame.player1CardsInPlay[0]);
            newPlayer2.cards.push(newGame.player2CardsInPlay[0]);
            document.querySelector("#playerOneCardRank").innerHTML = "Card rank: " + player1rank;
            document.querySelector("#playerTwoCardRank").innerHTML = "Card rank: " + player2rank;
            document.querySelector("#war").innerHTML = "WAR!";
            this.war();
        }
    }
    giveWarCard() {
        if (newGame.winner === newPlayer1) {
            let tempArray1 = [];
            let tempArray2 = [];
            tempArray1 = newGame.player1CardsInPlay.splice(0, 3);
            tempArray2 = newGame.player2CardsInPlay.splice(0, 3);
            newPlayer1.cards.push(tempArray1[0], tempArray1[1], tempArray1[2]);
            newPlayer1.cards.push(tempArray2[0], tempArray2[1], tempArray2[2]);
            newGame.checkWinner();
        } else if (newGame.winner === newPlayer2) {
            let tempArray1 = [];
            let tempArray2 = [];
            tempArray1 = newGame.player1CardsInPlay.splice(0, 3);
            tempArray2 = newGame.player2CardsInPlay.splice(0, 3);
            newPlayer2.cards.push(tempArray1[0], tempArray1[1], tempArray1[2]);
            newPlayer2.cards.push(tempArray2[0], tempArray2[1], tempArray2[2]);
            newGame.checkWinner();
        }
        document.querySelector("#playerOneCardsLeft").innerHTML = "Kort: " + (newPlayer1.cards.length + newGame.player1CardsInPlay.length);
        document.querySelector("#playerTwoCardsLeft").innerHTML = "Kort: " + (newPlayer2.cards.length + newGame.player2CardsInPlay.length);
        document.querySelector("#totalCardsInGame").innerHTML =
            "Kort i spil: " + (newPlayer2.cards.length + newGame.player2CardsInPlay.length + newPlayer1.cards.length + newGame.player1CardsInPlay.length);
    }
    giveCard() {
        if (newGame.winner === newPlayer1) {
            let tempArray1 = [];
            let tempArray2 = [];
            tempArray1 = newGame.player1CardsInPlay.splice(0, 1);
            tempArray2 = newGame.player2CardsInPlay.splice(0, 1);
            newPlayer1.cards.push(tempArray1[0]);
            newPlayer1.cards.push(tempArray2[0]);
            newGame.checkWinner();
        } else if (newGame.winner === newPlayer2) {
            let tempArray1 = [];
            let tempArray2 = [];
            tempArray1 = newGame.player1CardsInPlay.splice(0, 1);
            tempArray2 = newGame.player2CardsInPlay.splice(0, 1);
            newPlayer2.cards.push(tempArray1[0]);
            newPlayer2.cards.push(tempArray2[0]);
            newGame.checkWinner();
        }
        document.querySelector("#playerOneCardsLeft").innerHTML = "Kort: " + (newPlayer1.cards.length + newGame.player1CardsInPlay.length);
        document.querySelector("#playerTwoCardsLeft").innerHTML = "Kort: " + (newPlayer2.cards.length + newGame.player2CardsInPlay.length);
        document.querySelector("#totalCardsInGame").innerHTML =
            "Kort i spil: " + (newPlayer2.cards.length + newGame.player2CardsInPlay.length + newPlayer1.cards.length + newGame.player1CardsInPlay.length);
    }
    checkWinner() {
        if (newPlayer1.cards.length + newGame.player1CardsInPlay.length === 52 || newPlayer2.cards.length + newGame.player2CardsInPlay.length === 0) {
            newGame.won = true;
            alert("Spiller 1 har vundet spillet!");
        } else if (newPlayer2.cards.length + newGame.player2CardsInPlay.length === 52 || newPlayer1.cards.length + newGame.player1CardsInPlay.length === 0) {
            newGame.won = true;
            alert("Spiller 2 har vundet spillet!");
        }
    }

    prepareGame() {
        newGame.drawCard();
    }
    drawCard() {
        newGame.checkWinner();
        newGame.rounds++;
        document.querySelector("#spillerOne").className = "";
        document.querySelector("#spillerTwo").className = "";
        document.querySelector("#rounds").innerHTML = "Runder: " + newGame.rounds;
        document.querySelector("#war").innerHTML = "";
        let playerOneWarImage1 = (document.querySelector("#playerOneWarCardImage1").src = "#");
        let playerOneWarImage2 = (document.querySelector("#playerOneCardImage").src = "#");
        let playerOneWarImage3 = (document.querySelector("#playerOneWarCardImage2").src = "#");
        let playerTwoWarImage1 = (document.querySelector("#playerTwoWarCardImage1").src = "#");
        let playerTwoWarImage2 = (document.querySelector("#playerTwoCardImage").src = "#");
        let playerTwoWarImage3 = (document.querySelector("#playerTwoWarCardImage2").src = "#");
        let one = (newGame.player1CardsInPlay = newPlayer1.cards.splice(0, 1));
        let two = (newGame.player2CardsInPlay = newPlayer2.cards.splice(0, 1));
        let playerOneImage = (document.querySelector("#playerOneCardImage").src = one[0].imagePath);
        let playerTwoImage = (document.querySelector("#playerTwoCardImage").src = two[0].imagePath);
        document.querySelector("#playerOneCardsLeft").innerHTML = "Kort: " + newPlayer1.cards.length;
        document.querySelector("#playerTwoCardsLeft").innerHTML = "Kort: " + newPlayer2.cards.length;
        this.compareCards();
        console.log(newPlayer1.cards);
    }
}

class Player {
    constructor(cards, wins, cardsInPlay) {
        this.cards = cards;
        this.wins = wins;
        this.cardsInPlay = cardsInPlay;
    }
}

class Card {
    constructor(value, id, suit, rank, imagePath, name, visible) {
        this.value = value;
        this.id = id;
        this.suit = suit;
        this.rank = rank;
        this.imagePath = imagePath;
        this.name = name;
        this.visible = visible;
    }
    pushToDeck(card) {
        newGame.deck.push(card);
    }
}

function initGame() {
    resetGame();
    /* LAV NYT SPIL */
    newGame = new Game();
    newGame.players = [];
    newGame.deck = [];
    newGame.player1CardsInPlay = [];
    newGame.player2CardsInPlay = [];
    newGame.warBool = false;
    newGame.winner;
    newGame.won = false;
    newGame.rounds = 0;

    /* LAV KORT */
    suitNames.forEach((element) => {
        for (let index = 1; index <= 13; index++) {
            newCard = new Card();
            newCard.rank = index;
            newCard.value = index;
            if (index === 11) {
                newCard.value = "jack";
            } else if (index === 12) {
                newCard.value = "queen";
            } else if (index === 13) {
                newCard.value = "king";
            } else if (index === 1) {
                newCard.value = "ace";
                newCard.rank = 14;
            }
            newCard.id = newCard.value + "_of_" + element;
            newCard.suit = element;

            newCard.imagePath = path + newCard.id + ".png";
            newCard.name = newCard.id;
            newCard.visible = false;
            newCard.pushToDeck(newCard);
            newGame.deck = newGame.deck.sort((a, b) => 0.5 - Math.random());
        }
    });

    /* LAV SPILLERE */
    newPlayer1 = new Player();
    newPlayer1.cards = newGame.deck.splice(0, 26);
    document.querySelector("#playerOneCardsLeft").innerHTML = "Kort: " + newPlayer1.cards.length;
    newPlayer1.wins = 0;
    newPlayer1.cardsInPlay = [];
    newGame.players.push(newPlayer1);

    newPlayer2 = new Player();
    newPlayer2.cards = newGame.deck.splice(0, 26);
    document.querySelector("#playerTwoCardsLeft").innerHTML = "Kort: " + newPlayer2.cards.length;
    newPlayer2.wins = 0;
    newPlayer2.cardsInPlay = [];
    newGame.players.push(newPlayer2, newGame.player2cards);
}

function resetGame() {
    document.querySelector("#rounds").innerHTML = "";
    document.querySelector("#playerOneCardRank").innerHTML = "";
    document.querySelector("#playerTwoCardRank").innerHTML = "";
    document.querySelector("#winningPlayer").innerHTML = "";
    document.querySelector("#spillerOne").className = "";
    document.querySelector("#spillerTwo").className = "";
    document.querySelector("#playerOneWarCardImage1").src = "#";
    document.querySelector("#playerOneCardImage").src = "#";
    document.querySelector("#playerOneWarCardImage2").src = "#";
    document.querySelector("#playerTwoWarCardImage1").src = "#";
    document.querySelector("#playerTwoCardImage").src = "#";
    document.querySelector("#playerTwoWarCardImage2").src = "#";
}

function autoPlay() {
    while (newGame.won === false) {
        newGame.drawCard();
        if (newGame.rounds > 50000) {
            newGame.won = true;
        }
    }
}
