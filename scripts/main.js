const main_colors = document.querySelectorAll(".colour");

const bg_main = document.getElementById('main_bg');
bg_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#F1E7E5");
    setTimeout(() => {
        main_colors[0].style.backgroundColor = "#EADAD7";
    }, 0);
    setTimeout(() => {
        main_colors[0].style.backgroundColor = "#F1E7E5";
    }, 50);
});

const bg_alt = document.getElementById('alt_bg');
bg_main.addEventListener('mouseover', () => {
    bg_alt.style.visibility = "visible";
    bg_alt.addEventListener('mouseleave', () => {
        bg_alt.style.visibility = "hidden";
    });
});


const title_main = document.getElementById('main_title');
title_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#C38783");
    
    setTimeout(() => {
        main_colors[1].style.backgroundColor = "#84645C";
    }, 0);
    setTimeout(() => {
        main_colors[1].style.backgroundColor = "#C38783";
    }, 50);
});

const title_alt = document.getElementById("alt_title");
title_main.addEventListener('mouseover', () => {
    title_alt.style.visibility = "visible";
    title_alt.addEventListener('mouseleave', () => {
        title_alt.style.visibility = "hidden";
    });
});

const text_main = document.getElementById('main_text');
text_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#906D64");

    setTimeout(() => {
        main_colors[2].style.backgroundColor = "#785B54";
    }, 0);
    setTimeout(() => {
        main_colors[2].style.backgroundColor = "#906D64";
    }, 50);
});

const text_alt = document.getElementById('alt_text');
text_main.addEventListener('mouseover', () => {
    text_alt.style.visibility = "visible";
    text_alt.addEventListener('mouseleave', () => {
        text_alt.style.visibility = "hidden";
    });
});
