num = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39, 41,43,45,47,49,51,53,55,57,59,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39, 41,43,45,47,49,51,53,55,57,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39, 41,43,45,47,49,51,53,55,57
]

let scrollContainer;
let targetScrollLeft = 0;
let currentScrollLeft = 0;
let animationFrameId = null;

function render(){

    scrollContainer = document.querySelector('.scroll-container')

    // Clear existing content to prevent duplication if render is called multiple times
    scrollContainer.innerHTML = ''; 

    const len = num.length
    for(let i = 0; i < len; i++){
        scrollContainer.innerHTML += `<div class="number-div">${num[i]}</div>`
    
    }

    // Initialize currentScrollLeft and targetScrollLeft to the actual scroll position
    currentScrollLeft = scrollContainer.scrollLeft;
    targetScrollLeft = scrollContainer.scrollLeft;
}

// Call render function to display numbers on page load
render();

// Add scroll event listener to synchronize with manual dragging
// This should be outside render() and after render() is called to ensure scrollContainer is defined
scrollContainer.addEventListener('scroll', () => {
    if (animationFrameId === null) { // Only update if no animation is running
        currentScrollLeft = scrollContainer.scrollLeft;
        targetScrollLeft = scrollContainer.scrollLeft;
    }
});

function animateScroll() {
    const difference = targetScrollLeft - currentScrollLeft;
    if (Math.abs(difference) < 0.5) { // Stop animation if very close to target
        scrollContainer.scrollLeft = targetScrollLeft;
        animationFrameId = null;
        return;
    }

    // Adjust this value for smoother/faster animation
    currentScrollLeft += difference * 0.1; // Move 10% of the remaining difference
    scrollContainer.scrollLeft = currentScrollLeft;

    animationFrameId = requestAnimationFrame(animateScroll);
}

// Add event listener for horizontal mouse wheel scrolling on the whole window
window.addEventListener('wheel', (e) => {
    if (scrollContainer) { // Ensure the container exists
        e.preventDefault(); // Prevent default vertical scrolling of the window
        
        // Always update currentScrollLeft to actual position before calculating new target
        currentScrollLeft = scrollContainer.scrollLeft; 
        targetScrollLeft = currentScrollLeft + e.deltaY * 2; // Accumulate scroll amount, faster

        // Clamp targetScrollLeft to valid range
        targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, scrollContainer.scrollWidth - scrollContainer.clientWidth));

        if (animationFrameId === null) { // Start animation if not already running
            animationFrameId = requestAnimationFrame(animateScroll);
        }
    }
});