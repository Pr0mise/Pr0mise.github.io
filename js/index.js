document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.burger-menu').classList.toggle('open');
    document.querySelector('.mobile-menu').classList.toggle('open');
});

document.querySelector('#daniela>img').addEventListener('click', () => {
    document.querySelector('#daniela-detail').classList.toggle('open');
    document.querySelector('.detail-overlay').classList.toggle('open');
});

function closeOverlay() {
    document.querySelector('.team-card-detail').classList.remove('open');
}