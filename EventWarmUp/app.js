
let imgContainer = document.getElementById('img');

imgContainer.addEventListener('click', imageClick);

function imageClick(){
    imgContainer.src = 'images/coffee.jpg';
   
 }
    

 let h1Tag = document.getElementById('h1tag');

 h1Tag.addEventListener('mouseover', function(){

    let h3Tag = document.createElement('h3');
    h3Tag.textContent = 'Secret Hover';
    console.log(h3Tag)

    document.body.appendChild(h3Tag);

    h3Tag.addEventListener('click', h3function);

    function h3function(){
        if(h3Tag){
            h3Tag.remove();
        }
    }
   

 })





//Keydown event
document.body.addEventListener('keydown', function(event){
    if(event.key.toLowerCase() === 'p'){

        document.body.style.backgroundColor = 'purple';

    }
    
})
 
//keyup event
 

document.body.addEventListener('keyup', function(event){
    if(event.key.toLowerCase() === 'p'){

        document.body.style.backgroundColor = 'red';

    }
    
})


//event listener on buttons

let button = document.getElementById('btnOne');

button.addEventListener('click', function(){
     //create a new tag
     let htag = document.createElement('h1');
     htag.textContent = 'Pzza';

     document.body.appendChild(htag);

     htag.addEventListener('click', function(){
        if(htag){
            htag.remove();
        }
     })
})

let buttonTwo = document.getElementById('btnTwo');

buttonTwo.addEventListener('click', function(){
     //create a new tag
     let htag = document.createElement('h1');
     htag.textContent = 'Burger';

     document.body.appendChild(htag);

     htag.addEventListener('click', function(){
        if(htag){
            htag.remove();
        }
     })
})


let buttonThree = document.getElementById('btnThree');

buttonThree.addEventListener('click', function(){
     //create a new tag
     let htag = document.createElement('h1');
     htag.textContent = 'Soda';

     document.body.appendChild(htag);

     htag.addEventListener('click', function(){
        if(htag){
            htag.remove();
        }
     })
})