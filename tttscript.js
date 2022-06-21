let buttons = document.querySelectorAll('.btn');
let record = document.querySelectorAll('.btn');
let clic = new Audio('click.mp3')
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
            index = index + 1;
            if (index > 8) {

                let arr = [];

                Array.from(record).forEach((value) => {
                    arr.push(value.innerHTML);
                })


                winArr.forEach((value) => {
                    let os = 0;
                    let xs = 0;
                    value.forEach((index) => {
                        if (arr[index] == 'o') {
                            os = os + 1;
                        }
                        if (arr[index] == 'x') {
                            xs = xs + 1;
                        }
                    })

                    if (xs == 3) {
                        winner = winner + 1;
                    }
                    else if (os == 3) {
                        winner = winner - 1;
                    }
                })
                if (winner > 0) {
                    winner = 'x'
                }
                else if (winner < 0) {
                    winner = 'o'
                }
                else {
                    winner = 'no one';
                }
                console.log(`${winner} winner`)
                document.querySelector('.result').innerHTML = "winner is  " + winner;
            }
        }

    })
})

