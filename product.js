let copy = document.querySelector('.copyright');
let dt = new Date();

copy.innerHTML = `&#169; ${dt.getFullYear()} Copyright : Dopar Energy Ltd.`;

//CODE FOR PRODUCTS VIEWER

let mainImg = document.querySelector('.product-images > img')
let proBtns = document.querySelectorAll('.product-images > div img');

proBtns.forEach(element => {
    element.addEventListener('mouseenter' , () => {
        element.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)'
    })

    element.addEventListener('mouseleave' , () => {
        element.style.boxShadow = 'none'
    })

    element.addEventListener('mousedown' , () => {
        element.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5) inset'
    })

    element.addEventListener('click' , () => {
        console.log(element);
        mainImg.src = element.src;
    })
});