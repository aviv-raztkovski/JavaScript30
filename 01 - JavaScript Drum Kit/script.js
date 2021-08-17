window.addEventListener('keydown', function keyPress(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeClass));

function removeClass(e) {
    if (e.propertyName != 'transform') return;
    this.classList.remove('playing');
}