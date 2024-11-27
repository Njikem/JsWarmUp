
//Add event Listener to the button, when click the background color change to my favourite color

let button = document.getElementById('btnOne');

button.addEventListener('click', function() {
    button.style.backgroundColor = 'purple';
    button.style.border = 'none';
})


// change the text of the button the clicked

let buton = document.getElementById('btnTwo');

buton.addEventListener('click', function(){
    buton.innerHTML = 'I have been clicked';
    buton.style.border = 'none';
})


// When the button is clicked, the button is replace with an image

let buttonThree = document.getElementById('btnThree');

buttonThree.addEventListener('click', function(){
   let image = document. createElement('img');
   image.src = '/images/smoothie.jpg';

   image.style.width = '300px';

   //This replace the button with the image tag
   buttonThree.parentNode.replaceChild(image, buttonThree); 
})

//appenChild add the image inside the button. It dose not replace the button with image tag

// You can also replace button with outerHTML

//buttonThree.outerHTML = '/images/smoothie.jpg';// After adding the event listener




//When the button is click a new p tag is inserted after the button


let buttonFour = document.getElementById('btnFour');

let ptag = document.getElementById('ptag');

buttonFour.addEventListener('click', function(){
    ptag.insertAdjacentHTML('beforeend', '<p>Hello Everyone! Just Checking.</p>')


})



//To Delete the ptag after delete button has been clicked

let deleteButton = document.getElementById('btnFive');

deleteButton.addEventListener('click', function(){
    if(ptag){
        ptag.remove(); // Reove p tag from the Dom
    }
})




//mouse over a div and background color change
let container = document.getElementById('container');

container.addEventListener('mouseover', function(){

     container.style.backgroundColor = 'blue';

})


//mouse out a div and background color change

container.addEventListener('mouseout', function(){
    container.style.backgroundColor = 'red';
})




//When the user click the button a new p tag is injected into the page when the user type into the input

let inputTag = document.getElementById('input');

let buttonSix = document.getElementById('btnSix');



buttonSix.addEventListener('click', function(){
    input = inputTag.value; //get user value from the input
    console.log(input);

   let  pTag = document.createElement('p');
    pTag.textContent = `Hello: ${input}`;

    document.body.appendChild(pTag);
    
     
})