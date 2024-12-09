const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.close-button');
const mobileNav = document.querySelector('nav ul');
const navItem = document.querySelectorAll('li a');
// const schoolNameEle = document.getElementById('School_name');
// const schoolName = schoolNameEle.innerText;
// let index=0;
// function updateText(){
//     index++;
//     schoolNameEle.innerText = schoolName.slice(0, index);
//     if(index == schoolName.length){
//         index = 0;
//     }
//     setTimeout(updateText, 400);
// }


// updateText();

const schoolNameEle = document.getElementById('School_name');
const schoolName = schoolNameEle.innerText;

schoolNameEle.innerHTML = schoolName
    .split('')
    .map((char) => `<span>${char}</span>`)
    .join('');

let index = 0;
function updateText() {
    const spans = schoolNameEle.querySelectorAll('span');
    if (index < spans.length) {
        spans[index].style.opacity = '1';
        index++;
        setTimeout(updateText, 200); // Adjust delay for speed
    } else {
        setTimeout(() => {
            // Reset effect
            spans.forEach((span) => (span.style.opacity = '0'));
            index = 0;
            updateText();
        }, 1000); // Delay before restart
    }
}

schoolNameEle.querySelectorAll('span').forEach((span) => {
    span.style.opacity = '0';
    span.style.transition = 'opacity 0.4s ease';
});

updateText();




const Display = () => {
    mobileNav.style.display = 'block';
    closeButton.style.display = 'block';
};

const Close = () => {
    mobileNav.style.display = 'none';
    closeButton.style.display = 'none';
}

// When pressed toggle button then mobile navmenu should appear
toggleButton.addEventListener('click', () => {
    Display();
});

// When pressed clicked on close button, the mobile navmenu should disappear

closeButton.addEventListener('click', () => {
    Close();
});

// When clicked on navitems the mobile navmenu should close;
// Attach click event listeners to each nav item
navItem.forEach(navItem => {
    navItem.addEventListener('click', () => {
        if (window.innerWidth < 876) // Adjust the breakpoint as needed
            Close();
    });
});
