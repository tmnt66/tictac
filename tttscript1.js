let buttons = document.querySelectorAll('.btn');
let record = document.querySelectorAll('.btn');
let result = document.querySelector(".result")
let reset = document.querySelector(".reset");
let clic = new Audio('click.mp3');
let chance = document.querySelector('.turn');

let continuePlay = 1;
let turn = "o";
let winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let checkwin = () => {
    let winner = '';

    let arr = [];
    [...record].forEach((value) => {
        arr.push(value.innerHTML);
    })


    winArr.forEach((value) => {

        if (arr[value[0]] == arr[value[1]] && arr[value[1]] == arr[value[2]] && arr[value[0]] !== "" && arr[value[1]] !== "" && arr[value[2]] !== "") {
            if (arr[value[0]] == 'x')
                winner = "X"
            else if (arr[value[0]] == 'o')
                winner = "O"
            declareWinner(winner);
      
        }

    })

    return winner
}

const declareWinner=(winner)=>{
    result.innerHTML = winner +" "+ "wins";
    continuePlay = 0;

}

const changeturn = () => {
    if (turn === "x") {
        turn = "o"
        chance.innerHTML =" X 's turn"
        return "o";
    }
    else {
        turn = "x";
        chance.innerHTML = "O 's turn"
        return "x";
    }
}

// let btn = Array.from(buttons)
[...record].forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "" && continuePlay == 1) {
            e.target.innerHTML = changeturn();
         
            clic.play();
            checkwin();
        }
    })
})


    let resetGame=

    reset.addEventListener('click',()=>{
        [...buttons].forEach((button) => {
            button.innerHTML="";
        })

        continuePlay = 1;
        result.innerHTML = "Enjoy Your Game"
    })