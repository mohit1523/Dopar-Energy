let copy = document.querySelector('.copyright');
let dt = new Date();

copy.innerHTML = `&#169; ${dt.getFullYear()} Copyright : Dopar Energy Ltd.`;

let productImg = document.querySelectorAll('.product-container > div');

document.getElementById('pic1').addEventListener("click" , () => {
    productImg.forEach(element => {
        element.style.transform = 'translateX(-30vw)';
    });
})
document.getElementById('pic2').addEventListener("click" , () => {
    productImg.forEach(element => {
        element.style.transform = 'translateX(-60vw)';
    });
})
document.getElementById('pic3').addEventListener("click" , () => {
    productImg.forEach(element => {
        element.style.transform = 'translateX(0vw)';
    });
})
document.getElementById('pic4').addEventListener("click" , () => {
    productImg.forEach(element => {
        element.style.transform = 'translateX(-60vw)';
    });
})
document.getElementById('pic5').addEventListener("click" , () => {
    productImg.forEach(element => {
        element.style.transform = 'translateX(0vw)';
    });
})
document.getElementById('pic6').addEventListener("click" , () => {
    productImg.forEach(element => {
        element.style.transform = 'translateX(-30vw)';
    });
})


//CODE FOR PRODUCT IMAGES VIEWER

let mainImg = document.querySelector('.main-img')
let proBtns = document.querySelectorAll('.product-images > div img');

proBtns.forEach(element => {
    element.addEventListener('click' , () => {
        mainImg.src = element.src;
    })
});
