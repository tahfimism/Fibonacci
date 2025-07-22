
let scrollContainer;
let targetScrollLeft = 0;
let currentScrollLeft = 0;
let animationFrameId = null;



function render(num) {
    const scrollContainer = document.querySelector('.scroll-container');

    // Clear previous content
    scrollContainer.innerHTML = '';

    
    let html = '';
    for (let i = num.length - 1; i >= 0; i--) {
        html += `<div class="number-div">${num[i].toString()}</div>`;
    }

    // Set content all at once
    scrollContainer.innerHTML = html;

    // Reset scroll tracking vars if you’re using them elsewhere
    currentScrollLeft = scrollContainer.scrollLeft;
    targetScrollLeft = scrollContainer.scrollLeft;
}






function calculate() {
    let a = 0;
    let b = 1;
    let num = [a, b];

    let input = document.getElementById('input-number');
    let n = parseInt(input.value);

    for (let i = 2; i < n; i++) {
        let next = a + b;
        num.push(next);
        a = b;
        b = next;
    }

    console.log(num);
    render(num);
    input.value = '';
}




document.querySelector('button').addEventListener('click', calculate)

document.getElementById('input-number').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});





// Call render function to display numbers on page load
initial_num = [21, 13, 8, 5, 3, 2, 1, 0]
render(initial_num);












document.addEventListener('DOMContentLoaded', () => {
    scrollContainer = document.querySelector('.scroll-container');

    scrollContainer.addEventListener('scroll', () => {
        if (animationFrameId === null) {
            currentScrollLeft = scrollContainer.scrollLeft;
            targetScrollLeft = scrollContainer.scrollLeft;
        }
    });

    // other initialization code here...
});


// rest of your code...


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
         // Prevent default vertical scrolling of the window
        
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