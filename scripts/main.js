const bg_main = document.getElementById('.colour_background');
const bg_alt = document.getElementById('.colour_alt_background');

bg_main.addEventListener('mouseover', () => {
    bg_alt.style.visibility = "visible";
    // refactoring needed
    
});

bg_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#F1E7E5");
    setTimeout(() => {
        bg_main.style.backgroundColor = "#EADAD7";
    }, 0);
    setTimeout(() => {
        bg_main.style.backgroundColor = "#F1E7E5";
    }, 50);
});

const title_main = document.getElementById('.colour_title');

title_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#C38783");
    
    setTimeout(() => {
        title_main.style.backgroundColor = "#84645C";
    }, 0);
    setTimeout(() => {
        title_main.style.backgroundColor = "#C38783";
    }, 50);
});

const text_main = document.getElementById('.colour_text');

text_main.addEventListener('click', () => {
    navigator.clipboard.writeText("#906D64");

    setTimeout(() => {
        text_main.style.backgroundColor = "#785B54";
    }, 0);
    setTimeout(() => {
        text_main.style.backgroundColor = "#906D64";
    }, 50);
});
