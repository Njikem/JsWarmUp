
//variables
let customer_name = 'Maureen';
let account_balance = 15000;
let is_active = true;


//conditional statements
if(account_balance >= 1000){
    console.log(account_balance);
}


if(account_balance >=5000){
    console.log('Your account is more than the range')

}else{
    console.log('You account balance is below range')
}

if(account_balance >= 10000){
    console.log('congratulations, Your account balance is more than 10000')
}


if(is_active === false && account_balance >= 1){
    console.log('System Error')
}

if(customer_name === 'Robbert Guy' && account_balance >= 0 && is_active === true){
    console.log('Robert Alert')
}else{
    console.log('All wrong')
}


//Key value pairs

let customer_object = [
    {
        name : 'Bright',
        total_balance: 13000,
        is_active: true
    }
]

console.log(customer_object)

for(let i = 0; i < customer_object.length; i++){
    console.log(customer_object[i])
    if(customer_object.total_balance < 0){

        console.log('Error')
    
    }else{
        console.log(customer_object[i].total_balance)
    }
}


//Arrays of an object
let customers = [
    {
        name : 'Maureen',
        total_balance: 13000,
        is_active: true
    },
    {
        name : 'Joan',
        total_balance: 15000,
        is_active: false
    },
    {
        name : 'Nancy',
        total_balance: 18000,
        is_active: true
    }
]



//While loop
counter = 0;

while(counter < customers.length){

    let customer = customers[counter];
    console.log(customer)
    console.log(`Name: ${customer.name}`)
    console.log(`Active: ${customer.is_active}`)

    if(is_active === true){
        console.log(`Name: ${customer.name}, Active: ${customer.is_active}`)
    }

    counter = counter + 1;
}



//for loop
for(let i = 0; i < customers.length; i++){
    let customer = customers[i];
    console.log(customer)

    if(customer.is_active ===false){
        console.log(`Name: ${customer.name}`)
    }
}


//Arrays of an object

let companies = [
    {
        name: 'BigMac',
        stock_symbol: 'Big',
        sector: 'consumer',
        industry: 'personal product',
        founded: 1945,
        Headquarter: 'New York',
        yearly_revenue: 120000,
        yearly_profit: 100000,
        number_of_employees: 120

    },
    {
        name: 'Pizza73',
        stock_symbol: '73',
        sector: 'consumer',
        industry: 'personal product',
        founded: 2002,
        Headquarter: 'Toronto',
        yearly_revenue: 150000,
        yearly_profit: 90000,
        number_of_employees: 90

    },
    {
        name: 'TecMove',
        stock_symbol: 'Move',
        sector: 'Technology',
        industry: 'Technology',
        founded: 2012,
        Headquarter: 'Edmonton',
        yearly_revenue: 600000,
        yearly_profit: 200000,
        number_of_employees: 100

    },
    {
        name: 'Amazon',
        stock_symbol: 'Ama',
        sector: 'Retail',
        industry: 'E-commerce',
        founded: 1940,
        Headquarter: 'MaryLand',
        yearly_revenue: 900000,
        yearly_profit: 400000,
        number_of_employees: 300

    },
    {
        name: 'Shoppers',
        stock_symbol: 'ppers',
        sector: 'Healthcare',
        industry: 'Pharmaceutical',
        founded: 1960,
        Headquarter: 'Calgary',
        yearly_revenue: 180000,
        yearly_profit: 80000,
        number_of_employees: 50

    }
]


//While Loop

i = 0;
while(i < companies.length){

    let company = companies[i];
    console.log(company)
    console.log(`Name: ${company.name}, Revenue: ${company.yearly_revenue}`)
    i++
}


//For Loop

for(let i = 0; i < companies.length; i++){
    let company = companies[i];
    console.log(`Name: ${company.sector}`);

    if(company.sector === 'Technology'){
        console.log(`Sector: ${company.sector}`)
    }
}


for(let i = 0; i < companies.length; i++){
    let company = companies[i];
    if(company.founded <= 1950){
        console.log(`Name: ${company.name}, Founded: ${company.founded}`)
    }

}



for(let i = 0; i < companies.length; i++){
    let company = companies[i];
   if(company.sector !== 'Technology'){
        console.log(`Name: ${company.name}, Sector: ${company.sector}`)
    }
}


for(let i = 0; i < companies.length; i++){
    let company = companies[i];

    if(company.yearly_revenue >= 50000 && company.yearly_revenue <= 1000000 ){
        console.log(`Name: ${company.name}, Revenue: ${company.yearly_revenue}`)
    }

}

// Calculating companies average revenue
let totalRevenue = 0;

for(let i = 0; i < companies.length; i++){
  
    totalRevenue += companies[i].yearly_revenue;

    let average_revenue = totalRevenue/companies.length
    console.log(`Average_revenue: ${average_revenue}`)


}

//Calculating company highest profit

let highestProfit = companies[0].yearly_profit;
let topCompany = companies[0].name;

//For Loop

for(let i = 0; i < companies.length; i++){

   if(companies[i].yearly_profit > highestProfit){
    highestProfit = companies[i].yearly_profit;
    topCompany = companies[i].name
   }

   console.log(`The company with the highest yearly profit is ${topCompany} with a profit of $${highestProfit}.`);

}


//Calculating the company with the highest revenue per employee


let highestRevenuePerEmployee = companies[0].yearly_revenue/companies[0].number_of_employees;
let topCompany1 = companies[0].name;

//For Loop
for(let i = 0; i < companies.length; i++){

    let revenuePerEmployee = companies[i].yearly_revenue / companies[i].number_of_employees;

    if (revenuePerEmployee > highestRevenuePerEmployee) {
        highestRevenuePerEmployee = revenuePerEmployee;
        topCompany = companies[i].name;
      }
    
    
    console.log(`The company with the highest revenue per employee is ${topCompany} with $${highestRevenuePerEmployee.toFixed(2)} per employee.`);

}



