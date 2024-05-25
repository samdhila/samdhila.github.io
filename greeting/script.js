function openEnvelope() {
    const flap = document.getElementById('flap');
    const cardContent = document.getElementById('cardContent');
    flap.style.transform = 'rotateX(-180deg)';
    setTimeout(() => {
        cardContent.style.display = 'block';
        setTimeout(() => {
            cardContent.style.opacity = '1';
        }, 50); // Small delay for a smoother transition
    }, 1000); // Matches the duration of the transform transition
}
