let button = document.querySelector('.button');
let inputDir = { x: 0, y: 0 };
let speed = 5;
let lastTime = 0;
let snakeArr = [{ x: 13, y: 14 }];
let arrleft = document.querySelector(".arrowleft");
let arrright = document.querySelector(".arrowright");
let arrup = document.querySelector(".arrowup");
let arrdown = document.querySelector(".arrowdown");
food = { x: 5, y: 8 };

const move = new Audio('move.mp3');
const game = new Audio('gameover.mp3');

function main(ctime) {
    window.requestAnimationFrame(main);
    // console.log(ctime);
    if ((ctime - lastTime) / 1000 < 1 / speed) {
        return;
    }
    lastTime = ctime;
    gameEngine();
}
function isCollide(snake) {
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true;
        }
    }
    if (snake[0].x >= 20 || snake[0].x <= 0 || snake[0].y >= 20 || snake[0].y <= 0) {
        return true;
    }
    return false;
}


function gameEngine() {
    let board = document.querySelector('.board');
    if (isCollide(snakeArr)) {
        game.play();
        inputDir = { x: 0, y: 0 };
        alert("Enter any key to play the GAME ?");
        snakeArr = [{ x: 13, y: 14 }];
    }

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {

        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 18;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    board.innerHTML = "";
    snakeArr.forEach((z, index) => {
        snakeE = document.createElement('div');
        snakeE.style.gridRowStart = z.y;
        snakeE.style.gridColumnStart = z.x;
        if (index === 0) {
            snakeE.classList.add('head');
        }
        else {
            snakeE.classList.add('snake');
        }
        board.appendChild(snakeE);
    })

    foodE = document.createElement('div');
    foodE.style.gridRowStart = food.y;
    foodE.style.gridColumnStart = food.x;
    foodE.classList.add('food')
    board.appendChild(foodE);
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', z => {
    inpurDir = { x: 0, y: 1 };
    move.play();
    switch (z.key) {
        case 'ArrowUp':
            console.log("arrowup");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case 'ArrowDown':
            console.log("arrowdown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case 'ArrowRight':
            console.log("arrowright");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        case 'ArrowLeft':
            console.log("arrowleft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        default:
            break;
    }
})

arrleft.addEventListener("click", z => {
    inpurDir = { x: 0, y: 1 };
    move.play();
    inputDir.x = -1;
    inputDir.y = 0;
});
arrright.addEventListener("click", z => {
    inpurDir = { x: 0, y: 1 };
    move.play();
    inputDir.x = 1;
    inputDir.y = 0;
});
arrup.addEventListener("click", z => {
    inpurDir = { x: 0, y: 1 };
    move.play();
    inputDir.x = 0;
    inputDir.y = -1;
})
arrdown.addEventListener("click", z => {
    inpurDir = { x: 0, y: 1 };
    move.play();
    inputDir.x = 0;
    inputDir.y = 1;
});