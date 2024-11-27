
//Functions that takes arrays of numbers and look for the even numbers in the array

function arrayNumbers(numbs){
    let totalSum = 0;
    for(let i = 0; i < numbs.length; i++){ 
        console.log(numbs[i])

        //Check if the index is even

        if( i % 2 === 0){

            totalSum += numbs[i];

        }
    }

    return totalSum;
}

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arrayNumbers(numbers));



//Function that takes arrays of strings and look for the longest string in the array

function arrayStrings(strings){

    let longest = strings[0]; // Assume the first string is the longest i

    for(let i = 0; i < strings.length; i++){
        console.log(strings[i]);

        if(strings[i].length > longest.length);

        longest = strings[i];

        
    }

    return longest;
}


let strgs = ['Body', 'Maureen', 'Good', 'Everything'];

console.log(arrayStrings(strgs));




//function that take argument as an object


function arrayObject(object){

        if(object.is_subscribed === true && object.age >= 18){
           return true;
        }
      
        return false;
}




 let user1 =   {  name: 'Bright', age: 56,   is_subscribed: true}

console.log(arrayObject(user1));





let  users = [

    {
        name: 'Briget',
        age: 15,
        is_subscribed: false
    },
    {
        name: 'Maureen',
        age: 35,
        is_subscribed: true
    },
    {
        name: 'Elvis',
        age: 46,
        is_subscribed: true
    },
    {
        name: 'Junior',
        age: 17,
        is_subscribed: false
    },
    {
        name: 'Nunti',
        age: 25,
        is_subscribed: true
    }
]


function arrayfunction(users){

    let nonSubscribers  = []; // array to collect the non_subcribers
    
    for(let i = 0; i < users.length; i++){
        if(users[i].is_subscribed === false){
            nonSubscribers.push(users[i]) // Add user to the result
        }

    }
     

    return nonSubscribers;  // return the array of non_subscribers   
    

}


console.log(arrayfunction(users));




//function for the numbers of subscribed and the percentage of subscribers

function numbScribers(users){


    let numberSubscribed = 0; // array to collect the subscribed
    let countSubscribed = 0;


    for(let i = 0; i < users.length; i++){

           //count the number of subscribed users
   
           if(users[i].is_subscribed){
               numberSubscribed++
           }
 
     }


     //calculate if subscribed users are at least 50%. Percentage of subscribers

         
     let percentageSubscribed =  countSubscribed / users.length;

     if(percentageSubscribed >= 0.5){

        console.log("At least 50% is subscribed");

       }else{
           console.log('less than 50% is subscribed');
       }
      
 
     return  numberSubscribed;  // return the array of non_subscribers  
     

    }
    
 console.log("Number of subscribers:", numbScribers(users));