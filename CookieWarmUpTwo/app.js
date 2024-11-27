
let setCookie = Cookies.set('click_count', 0);
console.log(setCookie);

let button = document.getElementById('button');




button.addEventListener('click', function(){
    
    newCount = parseInt(Cookies.get(setCookie));
    console.log(newCount)

    let newCookie = newCount + 1;
    console.log(newCookie)

    let newSetCookie = Cookies.set('click_count', newCookie);
    console.log(newSetCookie)

    
})