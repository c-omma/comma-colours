const main_colors = document.querySelectorAll(".colour");
const alt_colors = document.querySelectorAll(".colour_alt");

const bg_main = document.getElementById('main_bg');
const bg_alt = document.getElementById('alt_bg');
const title_main = document.getElementById('main_title');
const title_alt = document.getElementById("alt_title");
const text_main = document.getElementById('main_text');
const text_alt = document.getElementById('alt_text');

function hide_bg() {
    bg_alt.style.visibility = "hidden";
}

function show_bg() {
    bg_alt.style.visibility = "visible";
}

bg_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#F1E7E5");
    setTimeout(() => {
        main_colors[0].style.backgroundColor = "#EADAD7";
    }, 0);
    setTimeout(() => {
        main_colors[0].style.backgroundColor = "#F1E7E5";
    }, 50);
});

bg_main.addEventListener('mouseover', () => {
    show_bg();
    bg_alt.addEventListener('mouseleave', hide_bg);
});

bg_alt.addEventListener('click', () => {
    navigator.clipboard.writeText("#F9F9F9");
    setTimeout(() => {
        alt_colors[0].style.backgroundColor = "#EBEBEB";
    }, 0);
    setTimeout(() => {
        alt_colors[0].style.backgroundColor = "#F9F9F9";
    }, 50);
});

function hide_title() {
    title_alt.style.visibility = "hidden";
}

function show_title() {
    title_alt.style.visibility = "visible";
}

title_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#C38783");
    
    setTimeout(() => {
        main_colors[1].style.backgroundColor = "#84645C";
    }, 0);
    setTimeout(() => {
        main_colors[1].style.backgroundColor = "#C38783";
    }, 50);
});

title_main.addEventListener('mouseover', () => {
    show_title();
    title_alt.addEventListener('mouseleave', hide_title);
});


title_alt.addEventListener('click', () => {
    navigator.clipboard.writeText("#9EA476");
    
    setTimeout(() => {
        alt_colors[1].style.backgroundColor = "#8C9362";
    }, 0);
    setTimeout(() => {
        alt_colors[1].style.backgroundColor = "#9EA476";
    }, 50);
});

function hide_text() {
    text_alt.style.visibility = "hidden";
}

function show_text() {
    text_alt.style.visibility = "visible";
}

text_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#906D64");

    setTimeout(() => {
        main_colors[2].style.backgroundColor = "#785B54";
    }, 0);
    setTimeout(() => {
        main_colors[2].style.backgroundColor = "#906D64";
    }, 50);
});

text_main.addEventListener('mouseover', () => {
    show_text();
    text_alt.addEventListener('mouseleave', hide_text);
});

text_alt.addEventListener('click', () => {
    navigator.clipboard.writeText("#F5DAAF");
    
    setTimeout(() => {
        alt_colors[2].style.backgroundColor = "#F2CD92";
    }, 0);
    setTimeout(() => {
        alt_colors[2].style.backgroundColor = "#F5DAAF";
    }, 50);
});