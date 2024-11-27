

let tickets_sold = 1500;
let performer = 'Elvis';
let venue_capacity = 2000;
is_sold_out = false;
let is_repeat_show = true


if(is_sold_out === true){
    console.log('All Sold Out');
}else{
    console.log('Tickets still available');
}


if(tickets_sold/venue_capacity >= 0.9){
    console.log('Almost Sold Out');
}else if(tickets_sold/venue_capacity >= 0.5){
    console.log('Tickets Selling Fast');
}else{
    console.log('Tickets On Sale Now')
}


if(tickets_sold > venue_capacity){
    console.log('System Error');
}else if(tickets_sold ===venue_capacity && is_sold_out === false){
    console.log('System Error')
}else if(performer ==='Alex' && is_sold_out ===false){
    console.logP('System Error')
}else{
    console.log('All Good')
}


if(tickets_sold ===0.9 || venue_capacity >= 6000 && tickets_sold ===0.7 || venue_capacity >=9000){
    console.log('Special Case');
}else if(is_sold_out === true && is_repeat_show ===true){
    console.log('Special Case');
}else{
    console.log('Normal Case')
}


let special_performer_1 = 'Alex';
let special_performer_2 = 'Shrek';
let special_performer_3= 'Dolphins';
let special_performer_4= 'Judy';
let special_performer_5 = 'Anumi';

if(special_performer_1 === 'Alex'){
    console.log('Lucky You');
}else if(special_performer_2 === 'Shrek'){
    console.log('Lucky You')
}else if(special_performer_3 ==='Miami Dolphins'){
    console.log('Lucky You')
}else if(special_performer_4 === 'Amin'){
    console.log('Lucky You')
}else if(special_performer_5 === 'Amasta'){
    console.log('Lucky You')
}else{
    console.log('Found None')
}