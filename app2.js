const smallBlock = document.getElementById("small-block");

function moveRight(position) {
    smallBlock.style.left = `${position}px`;
    if (position === 450){
        return;
    }

    setTimeout(() => {
        moveRight(position + 1);
    }, 50);
}

moveRight(0);