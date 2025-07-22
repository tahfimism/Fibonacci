num = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39, 41,43,45,47,49,51,53,55,57,59,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39, 41,43,45,47,49,51,53,55,57,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39, 41,43,45,47,49,51,53,55,57
]

let scrollContainer;

function render(){

    scrollContainer = document.querySelector('.scroll-container')

    // Clear existing content to prevent duplication if render is called multiple times
    scrollContainer.innerHTML = ''; 

    const len = num.length
    for(let i = 0; i < len; i++){
        scrollContainer.innerHTML += `<div class="number-div">${num[i]}</div>`
    
    }
}

// Call render function to display numbers on page load
render();

// Add event listener for horizontal mouse wheel scrolling on the whole window
window.addEventListener('wheel', (e) => {
    console.log("Wheel event fired!"); // Debugging line
    if (scrollContainer) { // Ensure the container exists
        e.preventDefault(); // Prevent default vertical scrolling of the window
        scrollContainer.scrollLeft += e.deltaY * 2; // Scroll the specific container horizontally, faster
    }
});