let buttons = document.querySelectorAll('.btn');
let record = document.querySelectorAll('.btn');
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
    let arr = [];
    [...record].forEach((value) => {
        arr.push(value.innerHTML);
    })
    console.log(arr)

    winArr.forEach((value) => {
        let os = 0;
        let xs = 0;
        if (arr[value[0]] == arr[value[1]] && arr[value[1]] == arr[value[2]] && arr[value[0]] !== " " && arr[value[1]] !== " " && arr[value[2]] !== " ") 
        // if (arr[value[0]] == arr[value[1]] && arr[value[1]] == arr[value[2]] && arr[value[0]] !== " " )
         {
            console.log("winner")
        }
    })
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

let winner = 0;

let btn = Array.from(buttons)
btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "") {
            e.target.innerHTML = changeturn();
            clic.play();
            checkWin = checkwin();
            if(checkWin=="winner"){

                console.log(checkwin() + "winner")
            };

        }
    })
})