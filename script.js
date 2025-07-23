
let scrollContainer;
let targetScrollLeft = 0;
let currentScrollLeft = 0;
let animationFrameId = null;



function render(num) {
    const scrollContainer = document.querySelector('.scroll-container');
    scrollContainer.innerHTML = '';

    let html = '';
    for (let i = 0; i < num.length; i++) {
        html += `<div class="number-div" title="${num[i].toString()}">${num[i].toString()}</div>`;
    }
    scrollContainer.innerHTML = html;

    // Add click toggle listeners after DOM is ready
    const divs = scrollContainer.querySelectorAll('.number-div');
    divs.forEach(div => {
        div.addEventListener('click', () => {
            // Collapse any other expanded boxes first if you want only one open
            divs.forEach(d => {
                if (d !== div) d.classList.remove('expanded');
            });
            div.classList.toggle('expanded');
        });
    });

    currentScrollLeft = scrollContainer.scrollLeft;
    targetScrollLeft = scrollContainer.scrollLeft;
}






function calculate() {
    let a = 0n;           // BigInt zero
    let b = 1n;           // BigInt one
    let num = [a, b];

    let input = document.getElementById('input-number');
    let n = parseInt(input.value);

    for (let i = 2; i < n; i++) {
        let next = a + b;  // BigInt addition
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
initial_num = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
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