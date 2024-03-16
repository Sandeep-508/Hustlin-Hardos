let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let var_num = document.querySelector(".var_num");
i = 100;

add.addEventListener("click", () => {
    var_num.innerHTML = ++i;
});
sub.addEventListener("click", () => {
    var_num.innerHTML = --i;
});

function update() {
    let time = document.querySelector(".time");

    let date = new Date();

    let hour = date.getHours();
    let mins = date.getMinutes();
    let sec = date.getSeconds();
    let milsec = date.getMilliseconds();

    let timeString = `${hour}:${mins}:${sec}:${milsec}`;

    time.innerHTML = timeString;
}

update();

setInterval(update, 1);

// Accordion


let accord_items = document.querySelectorAll(".accord_items");
let accord_item = document.querySelector(".accord_items");
let text = document.querySelector(".text_to_disp");
let svg_show = document.querySelector(".svg_to_change");
text.style.display = "block";
svg_show.innerHTML = `<svg width="11" height="4" viewBox="0 0 11 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.9 3.864V0.516H10.26V3.864H0.9Z" fill="black"/>
</svg>`;

accord_items.forEach(element => {
    let text_disp = element.querySelector(".text_to_disp");
    let svg = element.querySelector(".svg_to_change");
    let btn = element.querySelector(".disp_btn");
    btn.addEventListener("click", () => {
        accord_items.forEach(other => {
            if (other !== element) {
                let text = other.querySelector(".text_to_disp");
                let svg_icon = other.querySelector(".svg_to_change");

                text.style.display = "none";
                svg_icon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.82 15.852V9.336H0.34V6.924H6.82V0.407999H9.268V6.924H15.784V9.336H9.268V15.852H6.82Z" fill="black"/>
</svg>`;
            }

        });
        let disp_text = window.getComputedStyle(text_disp).display;
        if (disp_text === "none") {
            text_disp.style.display = "block";
            svg.innerHTML = `<svg width="11" height="4" viewBox="0 0 11 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.9 3.864V0.516H10.26V3.864H0.9Z" fill="black"/>
</svg>`;
        } else {
            text_disp.style.display = "none";
            svg.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.82 15.852V9.336H0.34V6.924H6.82V0.407999H9.268V6.924H15.784V9.336H9.268V15.852H6.82Z" fill="black"/>
</svg>`;
        }
    });
});

let scroll = document.querySelector(".scroll_to_top");
let scrollPt = 200;

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollPt) {
        scroll.style.display = "block";
    } else {
        scroll.style.display = "none";
    }

    scroll.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    });
});

let loading = document.querySelector(".loading_screen");
setInterval(() => {
    loading.classList.add("show");
}, 4000);

let isLoading = false;

const path = document.querySelector(".path");
const loading_svg = document.querySelector(".loading");


setTimeout(() => {
    document.documentElement.style.setProperty("--stroke-dasharray", "0");
    loading_svg.animate({
        background: "transparent",
    }, {
        fill: "forwards",
        duration: 2000,
        iterations: 1,
    })

    path.animate({
        stroke: "transparent",
    }, {
        fill: "forwards",
        duration: 200,
        iterations: 1,
    })
}, 5000);