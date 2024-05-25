function showSurprise() {
    document.getElementById('surprise').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".header h1", { duration: 2, y: -50, opacity: 0, ease: "bounce.out" });
    gsap.from(".content p", { duration: 1.5, x: -100, opacity: 0, stagger: 0.5 });
    gsap.to(".animate__pulse", { duration: 0.5, scale: 1.1, repeat: -1, yoyo: true });

    document.querySelector('button').addEventListener('click', () => {
        gsap.to("#surprise", { duration: 1, scale: 1.2, opacity: 1, display: "block" });
    });
});
