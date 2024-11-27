
//Array of Object

let my_city = [

    {
        name : 'Edmonton',
        population: 120000,
        is_capital: true,
        communities: [ {name: 'woodheaven',population: 2000}, {name: 'Enright Way', population: 600}, {name: 'Spruce Grove', population: 1800}
        ]
    },
    {
        name : 'Calgary',
        population: 100000,
        is_capital: false,
        communities: [{ name: 'links', population: 1600}, {name: 'heaven', population: 2000}, {name: 'edson', population: 1400 }]
    },
    {
        name : 'Toronto',
        population: 300000,
        is_capital: true,
        communities : [  { name: 'Kitchener',population: 1200},  {name: 'torocity', population: 3000}, {name: 'vegral fall',   population: 1200}]             
        
    },


  
]

//for loop
for(let i = 0; i < my_city.length; i++){
     let city = my_city[i];
    if(city.is_capital === true){
        console.log(`Name: ${city.name}, population: ${city.population}`);
    }else{
        console.log('Not important enough');
    }

}



//while Loop if the population is at least 100
i = 0;
while(i < my_city.length){
    j = 0;
    while(j <my_city[i].communities.length){

        let community = my_city[i].communities[j].name;

        if( my_city[i].communities[j].population >= 100){
            console.log(`community: ${community}`)
        }
        
        j++
    }
      
    
    
    i++
}


//calculate the total population for the communities

let totalPopulation = 0;

for(let i =0; i < my_city.length; i++){
    for(let j = 0; j < my_city[i].communities.length; j++){

        let community = my_city[i].communities[j].population;
       totalPopulation +=community;
       console.log(`totalPopulation: ${ totalPopulation}`)

    }
    
}


//Conditional statement if my_city population is equal to communities population
let communitiesTotaPopulation = 0;
let my_cityTotalPopulation = 0;
for(let i = 0; i < my_city.length; i++){

    my_cityTotalPopulation += my_city[i].population;
     console.log(`cityTotalPopulation: ${my_cityTotalPopulation}`);

     for(let j = 0; j < my_city[i].communities.length; j++){

       communitiesTotaPopulation = my_city[i].communities[j].population;

       console.log(`communitiesTotaPopulation: ${communitiesTotaPopulation}`);


       if( communitiesTotaPopulation === my_cityTotalPopulation){
        console.log('The Math check out')
       }else{
        console.log('We must be missing some people')
       }

     }
}







