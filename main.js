console.log('test');
const product = document.getElementsByClassName('product');
console.log(product);
document.addEventListener("mouseover", e => {
    if (e.target.matches(".product")) {
        /*e.target.style.backgroundColor = 'blue';*/
        e.target.classList.add('color');
    }
    for (let i = 0 ; i < product.length + 1 ; i++) {
        if (e.target.matches(`#product-${i}`)) {
            /*console.log(e.target.id);*/
        }
    }
});
document.addEventListener("mouseout", e => {
    if (e.target.matches(".product")) {
        e.target.classList.remove('color');
    }
});