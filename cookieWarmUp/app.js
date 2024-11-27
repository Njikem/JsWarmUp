 

let container = document.getElementById('image');

container.insertAdjacentHTML('afterend', 

    `<div id="images">
      
    <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww" alt="image" width="300px"/>
     <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXN8ZW58MHx8MHx8fDA%3D" alt="image" width="300px"/>
      <img src="https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D" alt="image" width="300px"/>


    </div>`
)



for(let i= 0; i < images.length; i++){

    let image = images[i];
    console.log(image[0])

    image.addEventListner('click', function() {

        let cookie = Cookies.set('image_url', image);
        console.log(cookie);
 
    })


}
    
