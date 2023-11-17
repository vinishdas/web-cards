const subscribeButton = document.querySelector('#card1 button');
const copybutton = document.querySelector('.container');
 
async function copyCSS(selector) {
    // Get the button element using the provided selector
    var buttonElement = document.querySelector(selector);

    // Check if the button element exists
    if (buttonElement) {
        // Get the computed styles of the button
        var cssCode = window.getComputedStyle(buttonElement).cssText;

        try {
            // Use navigator.clipboard.writeText to copy the CSS code to the clipboard
            await navigator.clipboard.writeText(cssCode);
            console.log('CSS code copied to clipboard:', cssCode);
        } catch (err) {
            console.error('Unable to copy CSS code to clipboard:', err);
        }
    } else {
        console.error('Button element not found!');
    }
}

function buttonclick(){
    subscribeButton.classList.add('slide');
    subscribeButton.classList.add('trsitionButton');
    if(subscribeButton.innerHTML==='Subscribe'){
        subscribeButton.innerHTML = 'subscribed';
    }
    setTimeout(function(){
        subscribeButton.innerHTML = 'Subscribe';
        subscribeButton.classList.remove('slide');
        subscribeButton.classList.remove('trsitionButton');
        
    },4000)
}
