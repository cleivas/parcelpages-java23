import moonImgUrl from './media/moon.jpg'
import anime from 'animejs';

const imgEl = document.querySelector('img');
imgEl.src = moonImgUrl;

anime({
    targets: imgEl,
    rotate: '360deg',
    direction: 'alternate',
    loop: true
})