var btn = document.getElementById("btn1");
var ul = document.querySelector(".un");
btn.addEventListener("click", () => {
    if (ul.style.right == "0%") {
        ul.style.right = "-100%";
        btn.innerHTML = "<span><i class='fa-solid fa-bars'></i></span>";
    }
    else {
        ul.style.right = "0%";
        btn.innerHTML = "<span><i class='fa-solid fa-xmark'></i></span>";
    }
});

var scroll = document.getElementById("scroll");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scroll.style.display = "block";
    }
    else {
        scroll.style.display = "none";
    }
})
scroll.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
})

function link() {
    ul.style.right = "-100%";
    btn.innerHTML = "<span><i class='fa-solid fa-bars'></i></span>";
}