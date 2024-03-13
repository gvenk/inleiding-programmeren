const gameAchtergrond = document.querySelector('main')
let backgroundPositionX = 0;

function scrollBackground() {
    backgroundPositionX -= 2; // Change the speed as needed
    // backgroundPositionX = backgroundPositionX + 2; // Change the speed as needed
    // gameAchtergrond.style.backgroundPosition = `${backgroundPositionX}px 0px`;

    gameAchtergrond.style.backgroundPosition = backgroundPositionX + 'px 0px';
    requestAnimationFrame(scrollBackground);
    //
}
// setInterval(scrollBackground, 1)
scrollBackground();
