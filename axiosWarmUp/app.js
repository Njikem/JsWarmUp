
//axios request when button is clicked

let button = document.getElementById('btnOne');


//success function
function successFunction(response){
    console.log(response)
    
    //container for the image
    let container = document.getElementById('image_container');
    
    container.insertAdjacentHTML('beforeend', '<img src="https://images.dog.ceo/breeds/frise-bichon/stevebaxter_bichon_frise.jpg" width=250px alt=dog/>');
    

}


//Failure function

function failureFunction(error){
    console.log(error)

    document.body.innerHTML = 'Something has happened';
}


//Event Listener and axios request

button.addEventListener('click', function(){
    axios.request({
        method: 'GET',
        url: "https://dog.ceo/api/breeds/image/random",
    }).then(successFunction).catch(failureFunction)
})




//Axios request on photo list

let btnTwo = document.getElementById('btnTwo');


//success function

function success(response){
    console.log(response);

    
    let container = document.getElementById('container');

    for(let i = 0; i < response.data.length; i++){

        container.insertAdjacentHTML('beforeend', `<div>

            <img src="${response.data[i].download_url}" alt="image" width="200px"/>
            <h4>${response.data[i].author}</h4>

            
            </div>`)

    }
}


//failure function

function failure(error){
    console.log(error)
}


//event listener and axios request
btnTwo.addEventListener('click', function(){
    axios.request({
        method: 'GET',
        url: 'https://picsum.photos/v2/list',
    
    }).then(success).catch(failure)
})