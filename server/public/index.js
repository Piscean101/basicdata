
document.addEventListener("mouseover", e => {
    if (e.target.matches(".product")) {
        /*e.target.style.backgroundColor = 'blue';*/
        e.target.classList.add('color');
    }
});
document.addEventListener("mouseout", e => {
    if (e.target.matches(".product")) {
        e.target.classList.remove('color');
    }
});
