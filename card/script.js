function openEnvelope() {
    const flap = document.getElementById('flap');
    const cardContent = document.getElementById('cardContent');
    const music = document.getElementById('birthdayMusic');

    flap.style.transform = 'rotateX(-180deg)';

    setTimeout(() => {
        cardContent.style.display = 'block';
        setTimeout(() => {
            cardContent.style.opacity = '1';
            music.play(); // Play the music
        }, 50); // Small delay for a smoother transition
    }, 1000); // Matches the duration of the transform transition
}
