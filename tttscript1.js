let buttons = document.querySelectorAll('.btn');
let record = document.querySelectorAll('.btn');
let result = document.querySelector(".result")
let reset = document.querySelector(".reset")
let clic = new Audio('click.mp3');




let index = 0;
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
    // console.log(arr)

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
    console.log(result.innerHTML);
    index = 1;
    console.log(winner + "wins")
}

const changeturn = () => {
    if (turn === "x") {
        turn = "o"
        return "o";
    }
    else {
        turn = "x"
        return "x";
    }
}





// let resetGame=()=>{
//     Array.from(record).forEach((button) => {
//         button.innerHTML="";
//     })
// }
// reset.addEventListener('click',resetGame())

// let winner = 0;


// let btn = Array.from(buttons)
[...record].forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "" && index == 0) {
            e.target.innerHTML = changeturn();
            clic.play();
            checkwin();
            // if (win !== 'false') {
            //     result.innerHTML = win + "winner";
            //     console.log(result.innerHTML);
            //     index = 1;
            // };

        }
    })
})