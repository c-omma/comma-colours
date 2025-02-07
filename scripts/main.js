const main_colors = document.querySelectorAll('.colour');
const alt_colors = document.querySelectorAll('.colour_alt');
const shadows = document.querySelectorAll('.shadow');

const bg_main = document.getElementById('main_bg');
const bg_alt = document.getElementById('alt_bg');
const bg_shadow = document.getElementById('shadow_bg');

const title_main = document.getElementById('main_title');
const title_alt = document.getElementById('alt_title');
const title_shadow = document.getElementById('shadow_title');

const text_main = document.getElementById('main_text');
const text_alt = document.getElementById('alt_text');
const text_shadow = document.getElementById('shadow_text');

function hide_bg() {
    bg_alt.style.opacity = 0;
    bg_shadow.style.opacity = 0;
}

function show_bg() {
    bg_alt.style.opacity = 100;
    bg_shadow.style.opacity = 100;
}

function hide_title() {
    title_alt.style.opacity = 0;
    title_shadow.style.opacity = 0;
}

function show_title() {
    title_alt.style.opacity = 100;
    title_shadow.style.opacity = 100;
}

function hide_text() {
    text_alt.style.opacity = 0;
    text_shadow.style.opacity = 0;
}

function show_text() {
    text_alt.style.opacity = 100;
    text_shadow.style.opacity = 100;
}

/* background colours */

bg_main.addEventListener('click', () => {
    navigator.clipboard.writeText('#F1E7E5');
    setTimeout(() => {
        main_colors[0].style.backgroundColor = '#EADAD7';
    }, 0);
    setTimeout(() => {
        main_colors[0].style.backgroundColor = '#F1E7E5';
    }, 50);
});

bg_main.addEventListener('mouseover', () => {
    show_bg();
    hide_text(); hide_title();
    bg_alt.addEventListener('mouseleave', hide_bg);
});

bg_alt.addEventListener('click', () => {
    navigator.clipboard.writeText('#F9F9F9');
    setTimeout(() => {
        alt_colors[0].style.backgroundColor = '#EBEBEB';
    }, 0);
    setTimeout(() => {
        alt_colors[0].style.backgroundColor = '#F9F9F9';
    }, 50);
});

bg_shadow.addEventListener('click', () => {
    navigator.clipboard.writeText('#BCA59F');
    setTimeout(() => {
        shadows[0].style.backgroundColor = '#AB8E87';
    }, 0);
    setTimeout(() => {
        shadows[0].style.backgroundColor = '#BCA59F';
    }, 50);
});

/* title colours */

title_main.addEventListener('click', () => {
    navigator.clipboard.writeText('#C38783');
    
    setTimeout(() => {
        main_colors[1].style.backgroundColor = '#84645C';
    }, 0);
    setTimeout(() => {
        main_colors[1].style.backgroundColor = '#C38783';
    }, 50);
});

title_main.addEventListener('mouseover', () => {
    show_title();
    hide_bg(); hide_text();
    title_alt.addEventListener('mouseleave', hide_title);
});


title_alt.addEventListener('click', () => {
    navigator.clipboard.writeText('#9EA476');
    
    setTimeout(() => {
        alt_colors[1].style.backgroundColor = '#8C9362';
    }, 0);
    setTimeout(() => {
        alt_colors[1].style.backgroundColor = '#9EA476';
    }, 50);
});

title_shadow.addEventListener('click', () => {
    navigator.clipboard.writeText('#904F4A');
    setTimeout(() => {
        shadows[1].style.backgroundColor = '#79423E';
    }, 0);
    setTimeout(() => {
        shadows[1].style.backgroundColor = '#904F4A';
    }, 50);
});

/* text colours */ 

text_main.addEventListener('click', () => {
    navigator.clipboard.writeText('#906D64');

    setTimeout(() => {
        main_colors[2].style.backgroundColor = '#785B54';
    }, 0);
    setTimeout(() => {
        main_colors[2].style.backgroundColor = '#906D64';
    }, 50);
});

text_main.addEventListener('mouseover', () => {
    show_text();
    hide_bg(); hide_title();
    text_alt.addEventListener('mouseleave', hide_text);
});

text_alt.addEventListener('click', () => {
    navigator.clipboard.writeText('#F5DAAF');
    
    setTimeout(() => {
        alt_colors[2].style.backgroundColor = '#F2CD92';
    }, 0);
    setTimeout(() => {
        alt_colors[2].style.backgroundColor = '#F5DAAF';
    }, 50);
});

text_shadow.addEventListener('click', () => {
    navigator.clipboard.writeText('#4F362F');
    setTimeout(() => {
        shadows[2].style.backgroundColor = '#402C26';
    }, 0);
    setTimeout(() => {
        shadows[2].style.backgroundColor = '#4F362F';
    }, 50);
});