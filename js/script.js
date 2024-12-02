/**
 * Sets the display property of an element to either "flex" or "none" to show
 * or hide it.
 * @param {string} elementId - The id of the element to be shown or hidden.
 * @param {boolean} show - If false, the element will be hidden, otherwise it will be shown.
 */
function toggleDisplay(elementId, show) {
    const displayStyle = show ? "flex" : "none";
    document.getElementById(elementId).style.display = displayStyle;
}

/**
 * Ends the game by hiding the canvas, showing the game over screen, clearing all
 * intervals and pausing the background music.
 */
function gameOver() {
    toggleDisplay("canvas", false);
    toggleDisplay("gameover", true);
    clearAllIntervals();
    bg_music.pause();
}

/**
 * Clears all intervals created by setInterval.
 * This is a workaround for a bug in Chrome,
 * where intervals created by requestAnimationFrame
 * can't be cleared by clearInterval.
 */
function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) {
        clearInterval(i);
    }
}

/**
 * Ends the game by hiding the canvas, showing the win screen, stopping the
 * game and pausing the background music.
 */
function winScreen() {
    endGame();
    toggleDisplay("canvas", false);
    toggleDisplay("win", true);
    toggleDisplay("startscreen", false);
    bg_music.pause();
}

/**
 * Starts the game by initializing the level and game settings, hiding the 
 * start screen and game over screen, displaying the game canvas, and playing
 * the background music on a loop.
 */
function startGame() {
    initLevel();
    init();
    toggleDisplay("startscreen", false);
    toggleDisplay("canvas", true);
    toggleDisplay("gameover", false);
    toggleDisplay("instruction2", false);
    toggleDisplay("policyid", false);
    bg_music.loop = true;
    bg_music.volume = 0.1;
    bg_music.play();
}

/**
 * Restarts the game by hiding the win screen and game over screen, showing the
 * game canvas, ending the game and reinitializing the game settings.
 */
function restartGame() {
    toggleDisplay("win", false);
    toggleDisplay("gameover", false);
    toggleDisplay("canvas", true);
    endGame();
}


/**
 * Goes back to the start menu by hiding the game over screen and win screen, 
 * showing the start screen and hiding the game canvas.
 */
function goToStartMenu() {
    toggleDisplay("gameover", false);
    toggleDisplay("startscreen", true);
    toggleDisplay("canvas", false);
    toggleDisplay("win", false);
    toggleDisplay("instruction2", true);
    toggleDisplay("policyid", true);
}

/**
 * Checks if the device is currently in portrait orientation, and shows or
 * hides the orientation warning accordingly.
 */
function checkOrientation() {
    const warning = document.getElementById('orientation-warning');
    if (window.matchMedia("(orientation: portrait)").matches) {
        warning.style.display = "flex";
    } else {
        warning.style.display = "none";
    }
}

/**
 * Shows the instructions screen by hiding the start screen and the policy and
 * displaying the instruction screen.
 */
function showInstructions() {
    toggleDisplay("startscreen", false);
    toggleDisplay("instructionid", true);
    toggleDisplay("impressum", false);
}

/**
 * Hides the instructions screen by showing the start screen and hiding the
 * instruction screen.
 */
function hideInstructions() {
    toggleDisplay("startscreen", true);
    toggleDisplay("instructionid", false);
}

/**
 * Shows the policy screen by hiding the start screen and instruction screen,
 * and displaying the policy screen.
 */
function showpolicy() {
    toggleDisplay("startscreen", false);
    toggleDisplay("instructionid", false);
    document.getElementById("impressum").style.display = "block";
}

/**
 * Hides the policy screen by showing the start screen and hiding the policy
 * screen.
 */
function hidepolicy() {
    toggleDisplay("startscreen", true);
    document.getElementById("impressum").style.display = "none";
}



window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
window.onload = checkOrientation;




