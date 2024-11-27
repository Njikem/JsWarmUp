
let button = document.getElementById('btnOne');

//success function
function sunccessFuntion(response){
    console.log(response);

    let container = document.getElementById('container');

    for(let i = 0; i < response.data.length; i++){

        container.insertAdjacentHTML('beforeend', `<div>
      
            <h4>Name: ${response.data[i].name}</h4>
            <p>Address: ${response.data[i].address_1}</p>
          </div>`)

    }

   
}

//Failure function
function failureFunction(error){
    console.log(error);
    document.body.innerHTML = 'Error has occur, Please try again'
}


//Axios request and event listener
button.addEventListener('click', function(){
    axios.request({
        method: 'GET',
        url: 'https://api.openbrewerydb.org/breweries/random',
    }).then(sunccessFuntion).catch(failureFunction)
})






//select the element from the Dom

let buttonOne = document.getElementById('btnTwo');


//success function

function success(response){
    console.log(response)

    let container = document.getElementById('container');

    let datas = response.data;
    for(let i = 0; i < datas.length; i++){
        let data = datas[i];
        console.log(data);
        console.log(`symbol: ${data.symbol}`);
        console.log(`lastPrice: ${data.lastPrice}`);

        container.insertAdjacentHTML('afterend', `<div>
            
            <h5>Symbol: ${data.symbol}</h5>
            <p>lastPrice: ${data.lastPrice}</p>
            </div>`)

    }

}



function failure(error){
    console.log(error)

    document.body.innerHTML = 'Error has occur, Please try again'
}



buttonOne.addEventListener('click', function(){
    axios.request({
        method: 'GET',
        url: 'https://api2.binance.com/api/v3/ticker/24hr',
    }).then(success).catch(failure)
})

