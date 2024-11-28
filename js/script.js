function toggleDisplay(elementId, show) {
    const displayStyle = show ? "flex" : "none";
    document.getElementById(elementId).style.display = displayStyle;
}

function gameOver() {
    toggleDisplay("canvas", false);
    toggleDisplay("gameover", true);
    clearAllIntervals();
    bg_music.pause();
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++){
        clearInterval(i);
    } 
}

function winScreen() {
    toggleDisplay("canvas", false);
    toggleDisplay("win", true);
    bg_music.pause();
}

function startGame() {
    init();
    toggleDisplay("startscreen", false);
    toggleDisplay("canvas", true);
    toggleDisplay("gameover", false);
    bg_music.loop = true;
    bg_music.volume = 0.1;
    bg_music.play();
}

function restartGame() {
    toggleDisplay("gameover", false);
    toggleDisplay("canvas", true);
    endGame();
    init();
}


function goToStartMenu() {
    toggleDisplay("gameover", false);
    toggleDisplay("startscreen", true);
    toggleDisplay("canvas", false);
    endGame();
}




