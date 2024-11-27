//String as an argument
function warmUp(name){
  console.log(name)
}


warmUp('Maureen');


//Boolean as an argument
function booLean(ishappy){
 
    if(ishappy){
        console.log('happy');
    }else{
        console.log('sad')
    }
}

booLean(true);


//Number as an argument

function number(numbOne, numbTwo){

    if(numbOne > numbTwo){
        console.log(numbOne)
    }else if(numbTwo > numbOne){
        console.log(numbTwo)
    }else{
        console.log('NAN')
    }
}

number(10200, 10000);
number(2500, 4500);




//Array of numbers. Largest number of an array

let largeNumber = [0];
function arrayNumber(numbers){

    console.log(numbers);

    for(let i = 1; i < numbers.length; i++){
         if(numbers[i] > largeNumber){
            largeNumber = numbers[i];
         }
    }
    
    return largeNumber;


}

let numbs = [50, 36, 60, 25, 45];
console.log(arrayNumber(numbs))

//Use this method as well to look for the largest number

function largestNumb(arr){
  return Math.max(...arr);
}

let numbers = [20, 55, 36, 23]
console.log(largestNumb(numbers));



//Function that will pop element out of the array


let arrayStrings = [];
function popString(strings){

    console.log(strings)

    for(let i = 0; i < strings.length; i++){
        arrayStrings = strings[i];

        if(arrayStrings.toLowerCase().includes('happy')){
          
            return arrayStrings;
        }
    }

 return arrayStrings

}

let array = ['Sad', 'Good', 'Happy', 'Bad'];

console.log(popString(array))