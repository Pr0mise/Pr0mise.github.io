document.querySelector('.burger-menu').addEventListener('click', () => {
    document.querySelector('.burger-menu').classList.toggle('open');
    document.querySelector('.mobile-menu').classList.toggle('open');
});

document.querySelector('#daniela>img').addEventListener('click', () => {
    document.querySelector('#daniela-detail').classList.toggle('open');
});

document.querySelector('#jakub>img').addEventListener('click', () => {
    document.querySelector('#jakub-detail').classList.toggle('open');
});

document.querySelector('#dalibor>img').addEventListener('click', () => {
    document.querySelector('#dalibor-detail').classList.toggle('open');
});

document.querySelector('#alex>img').addEventListener('click', () => {
    document.querySelector('#alex-detail').classList.toggle('open');
});

document.querySelector('#jozef>img').addEventListener('click', () => {
    document.querySelector('#jozef-detail').classList.toggle('open');
});

document.querySelector('#filip>img').addEventListener('click', () => {
    document.querySelector('#filip-detail').classList.toggle('open');
});

function closeOverlay() {
    for(e of document.getElementsByClassName('team-card-detail')) {
        e.classList.remove('open');
    }
}