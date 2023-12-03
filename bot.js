
let spaan = document.querySelector(".up");

window.onscroll = function() {
    if(this.scrollY >= 1000){
        spaan.classList.add("show");
    } else {
        spaan.classList.remove("show")
    }
};

spaan.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
