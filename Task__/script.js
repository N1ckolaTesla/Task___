const swiper1 = new Swiper ('.swiper-container', {
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev'
    },
    pagination: {
        el: '.pagination',
        clickable: true,
    },
    spaceBetween: 24,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    speed: 500
});



let btnBool = false;
let textBool = '640px';
let blockOpBool = 'block';
let showV = 'block';
let hideV = 'none';
let arrowV = 'rotate(180deg)';

function showText() {
    const arrow = document.querySelector('#arrow');
    const text = document.querySelector('.text-info');
    const blockOp = document.querySelector('.block-opacity');
    const show = document.querySelector('.-show');
    const hide = document.querySelector('.-hide');

    if (textBool === '640px') {
        textBool = '100%';
        blockOpBool = 'none';
        text.style.maxHeight = textBool;
        blockOp.style.display = blockOpBool;
        show.style.display = hideV;
        hide.style.display = showV;
        arrow.style.transform = arrowV;

    } else {
        textBool = '640px';
        blockOpBool = 'block';
        text.style.maxHeight = textBool;
        blockOp.style.display = blockOpBool;
        show.style.display = showV;
        hide.style.display = hideV;
        arrow.style.transform = '';
    }

}

$(document).ready(function(){
    $(".review-items").owlCarousel({
        items: 4,
        margin: 24,
        nav: true,
        responsive: {
            0: {items: 2},
            900: {items: 3},
            1200: {items: 4},
        },
    });
  });


let switch_1 = 'flex';
let switch_2 = 'none';
let opacity = 0;
const btn = document.querySelectorAll('.offer-btn');
const items = document.querySelector('.offer-items');
const items2 = document.querySelector('.offer-items-2');

function showTab(n) {

    if (!btn[n].classList.contains('btn-active')) {
        for (let i = 0; i < btn.length; i++) {
            if (btn[i].classList.contains('btn-active')) {
                btn[i].classList = 'offer-btn';
            }
        }
        btn[n].classList += ' btn-active';
        if (n === 0) {
            items2.style.display = switch_2;
            items.style.display = switch_1;
            let interval = setInterval(() => {
                if (opacity <= 1) {
                    opacity += 0.005;
                    items.style.opacity = opacity;
                } else {
                    clearInterval(interval);
                }
            }, 2);
            opacity = 0;
            items.style.opacity = 1;
        } else {
            items.style.display = switch_2;
            items2.style.display = switch_1;
            let interval2 = setInterval(() => {
                if (opacity <= 1) {
                    opacity += 0.005;
                    items2.style.opacity = opacity;
                } else {
                    clearInterval(interval2);
                }
            }, 2);
            opacity = 0;
            items2.style.opacity = 1;
        }
    }
}

// function showTab(n) {

//     if (!btn[n].classList.contains('btn-active')) {
//         for (let i = 0; i < btn.length; i++) {
//             if (btn[i].classList.contains('btn-active')) {
//                 btn[i].classList = 'offer-btn';
//             }
//         }
//         btn[n].classList += ' btn-active';
//         if (n === 0) {
//             items.style.display = switch_1;
//             items2.style.display = switch_2;
//             let interval = setInterval(() => {
//                 if (opacity <= 1) {
//                     opacity += 0.005;
//                     items.style.opacity = opacity;
//                 } else {
//                     clearInterval(interval);
//                 }
//             }, 2);
//             opacity = 0;
//             items.style.opacity = 1;
//         } else {
//             items.style.display = switch_2;
//             items2.style.display = switch_1;
//             let interval2 = setInterval(() => {
//                 if (opacity <= 1) {
//                     opacity += 0.005;
//                     items2.style.opacity = opacity;
//                 } else {
//                     clearInterval(interval2);
//                 }
//             }, 2);
//             opacity = 0;
//             items2.style.opacity = 1;
//         }
//     }
// }


