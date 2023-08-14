let holder;
document.addEventListener("mouseover", e => {

    if (e.target.matches(".product")) {
        /*e.target.style.backgroundColor = 'blue';*/
        e.target.classList.add('color');
    }
    if (e.target.matches(".bubble")) {
        holder = e.target.children[0].innerHTML;
        let hiddentext = e.target.children[1].innerHTML;
        setTimeout(() => {e.target.innerHTML = hiddentext}, 500);
    } 
});
document.addEventListener("mouseout", e => {
    if (e.target.matches(".product")) {
        e.target.classList.remove('color');
    }
    if (e.target.matches(".bubble")) {
        e.target.children[0].innerHTML = holder;
    }
});

