//Select Element by id
let htag = document.getElementById('htag');

htag.style.color = 'red';
htag.style.fontFamily = 'monospace';

//Select Elements by class name
let ptag = document.getElementsByClassName('ptag');

for(let i = 0; i < ptag.length; i++){
    let tag = ptag[i];
    console.log(tag);

    tag.innerHTML = 'Coffee is good, I love tea more.'
}

// Select all the images from the page and add new image
let images = document.getElementsByClassName('image');

for(let i = 0; i < images.length; i++){

    let imgTag = images[i];
    console.log(imgTag);

    imgTag.src = '/images/smoothie.jpg';

}


//Add new a tag on the p tag 

let tags = document.getElementsByClassName('cofee');

for(let i = 0; i < tags.length; i++){
    let tag = tags[i];
    console.log(tag);
    if(tag.textContent.toLowerCase().includes('link')){
        let atag = document.createElement('a');
        atag.href = 'https://unsplash.com/collections/djSXQQCWing';
        atag.textContent = 'Visit this random site';
        atag.target = '_blank'; //Open link in a new tab
        
        
        tag.appendChild(document.createTextNode('')); // Add a space before the link
        tag.appendChild(atag);
    }
   
}


//Array of Object

let items = [
    {
        img_src: 'https://images.unsplash.com/photo-1499971856191-1a420a42b498?q=80&w=981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Tshirt',
        description: 'great cutton Tshirt',
        price: 35,
        is_instock: true
        

    },
    {
        img_src: 'https://images.unsplash.com/photo-1502898746234-cdef14a6eec4?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Jeans',
        description: 'Stretchy Jean',
        price: 55,
        is_instock: true
        

    },
    {
        img_src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
        name: 'Jacket',
        description: 'Lovely Jacket',
        price: 60,
        is_instock: false
        

    }
]

let container = document.getElementById('container');

for(let i = 0; i < items.length; i++){
    let item = items[i];
    console.log(item)
    container.insertAdjacentHTML('beforeend', 
        
        `<div>
        
        <img src="${item.img_src}" alt="clothe" width="300px"/>
         <h5>Name: ${item.name}</h5>
         <p>description: ${item.description}</p>
         <p>Price: $${item.price}</p>
         <p>In-stock: ${item.is_instock? 'yes' : 'No'}</p>
       
        </div>`)


        if(!item.is_instock){
            //Add "Out of stock" message
            let stockMsg = document.createElement('p');
            stockMsg.textContent = 'Out of stock';

            // Add the message to the last inserted product div
            let lastProduct = document.lastElementChild;
            lastProduct.appendChild(stockMsg);

            

        }
}