const subscribeButton = document.querySelector('#card1 button');
function buttonclick(){
    subscribeButton.classList.add('slide');
    subscribeButton.classList.add('trsitionButton');
    
    setTimeout(function(){
        subscribeButton.classList.remove('slide');
        subscribeButton.classList.remove('trsitionButton');
        
    },2000)
}
