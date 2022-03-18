
const readlineSync = require('readline-sync');

//Init
let own = [];
let player = [];
var deck = []
let bet = 0;
let wallet = 0;

//get score
let own_card1;
let own_card2;
let player_card1;
let player_card2;

let player_value = 0;
let own_value = 0;

function Deck() {

    let face = ["Clubs", "Diamonds", "Hearts", "Spades"];
    let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "King", "Queen", "Jack"]

    for (let i = 0; i < face.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(`${face[i]}-${values[j]}`)
        }
    }
    // console.log(deck);



}


function playing() {

    let card1 = Math.floor(Math.random() * 53);
    let card2 = Math.floor(Math.random() * 53);


    deck.map((item, index) => {
        if (index == card1) {
            // console.log("Card1: " + item);
            player.push(item);
            player_card1 = item.split("-");
        }
        else if (index == card2) {
            // console.log("Card2: " + item);
            player.push(item);
            player_card2 = item.split("-");
        }
        else if (index == 50) {
            own.push(item);
            own_card1 = item.split("-");
        }
        else if (index == 51) {
            own.push(item)
            item.split("-")
            own_card2 = item.split("-");
        }
    })


    // console.log(deck.length);

    console.log("You got " + player[0] + ", " + player[1]);
    console.log("The dealer got " + own[0] + ", " + own[1]);
}


function get_value() {

    //Player card1
    player_card1.map((item) => {
        if (item == "Ace") {
            player_value += 1;

        }
        else if (item == "King" || item == "Queen" || item == "Jack" || item == "10") {
            player_value += 0;
        }
        else if (item == "2" || item == "3" || item == "4" || item == "5" || item == "6" || item == "7" || item == "8" || item == "9") {
            player_value += parseInt(item)
        }

    })

    //Player card2
    player_card2.map((item) => {
        if (item == "Ace") {
            player_value += 1;

        }
        else if (item == "King" || item == "Queen" || item == "Jack" || item == "10") {
            player_value += 0;
        }
        else if (item == "2" || item == "3" || item == "4" || item == "5" || item == "6" || item == "7" || item == "8" || item == "9") {
            player_value += parseInt(item)
        }
    })

    //Own_card1
    own_card1.map((item) => {
        if (item == "Ace") {
            own_value += 1;

        }
        else if (item == "King" || item == "Queen" || item == "Jack" || item == "10") {
            own_value += 0;
        }
        else if (item == "2" || item == "3" || item == "4" || item == "5" || item == "6" || item == "7" || item == "8" || item == "9") {
            own_value += parseInt(item)
        }
    })

    //Own_card2
    own_card2.map((item) => {
        if (item == "Ace") {
            own_value += 1;

        }
        else if (item == "King" || item == "Queen" || item == "Jack" || item == "10") {
            own_value += 0;
        }
        else if (item == "2" || item == "3" || item == "4" || item == "5" || item == "6" || item == "7" || item == "8" || item == "9") {
            own_value += parseInt(item)
        }
    })


    // console.log("P_value: "+player_value);
    // console.log("O_value: "+own_value);
}


function play_more() {

    shuffle()
    var str = readlineSync.question('Wanna play more (Yes/No)? \n');
    if (str == "Yes" || str == "yes") {
        main()
    }
    else if (str == "No" || str == "no") {
        console.log(`You got total ${wallet} chips`);
    }
}


function battle() {

    if (player_value > own_value) {
        wallet += parseInt(bet);
        console.log(`You won!!!, received ${bet} chips`);
    }
    else if (player_value == own_value) {
        wallet += parseInt(0);
        console.log(`You draw!!!, received 0 chips`);

    }
    else if (player_value < own_value) {
        wallet -= parseInt(bet);
        console.log(`You lose!!!, received -${bet} chips`);
    }


}


function shuffle() {
    for (let i = deck.length - 1; i > 0; i--) {
        var cur = Math.floor(Math.random() * (i + 1));
        var deck_tmp = deck[i];
        deck[i] = deck[cur];
        deck[cur] = deck_tmp;
        
    }
}


function main() {

    bet = readlineSync.question('Please put your bet \n');
    Deck()
    playing()
    get_value()
    battle()
    play_more()
}






main()



