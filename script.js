document.body.addEventListener("keyup", (tecla) => {
    playSound(tecla.code.toLowerCase())
});

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split('');
        playComposition(songArray);
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play()
    }

    if (keyElement) {
        keyElement.classList.add('active');

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 250)
    }
}

function playComposition(array) {
        let wait = 0;
        for (let songItem of array) {
            setTimeout(() => {
                playSound(`key${songItem}`)
            }, wait)
            wait += 250;
        }
}
