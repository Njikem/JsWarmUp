let student_name = 'Maureen';
let student_gpa = 3.5;
let honor_role = false;

//conditional statement
if(honor_role === true){
    console.log('You made on honor_role')
}else{ 
    console.log('You did well.')
}

//conditional statement. Comparing two things

if(student_gpa >= 0 && student_gpa <= 1.9){
    console.log('Work Hard Next Time')
}else if(student_gpa >= 2  && student_gpa <= 2.4){
    console.log('Work Harder')
}else if(student_gpa >= 2.5 && student_gpa <= 2.9){
    console.log('Keep Pushing')
}else if(student_gpa >= 3 && student_gpa <= 3.4){
    console.log("You did Well. Keep it up")
}else if(student_gpa >= 3.5 && student_gpa <=4){
    console.log('Congratulations, You made it on the honor_role')
}else{
    console.log('Next time you will try')
}


//Arrays of values

let student_names = ['Bright', 'Elvis', 'Alex'];
let student_gpas = [3.5, 2.9, 3];
let honor_roles = [true, false, false];
let last_student = '';
let last_student_gpa = '';
let last_student_honor = '';

//push function
student_names.push('Anasta');
console.log(student_names)

student_gpas.push('3.9');
console.log(student_gpas)

honor_roles.push('true');
console.log(honor_roles)


//Looping 
for(let i = 0; i < honor_roles.length; i++){
    console.log(honor_roles[i])

    if(honor_roles === true){
        console.log('Fantastic')
    }else if(honor_roles === 2/3){
        console.log('You guys did great')
    }else{
        console.log('Please try next time')
    }
}


//push function
student_names.push('Jaja');
console.log(student_names)

student_gpas.push('3.7');
console.log(student_gpas)

honor_roles.push('true');
console.log(honor_roles)

//Assign a student name to last_student using pop function


last_student = student_names.pop();
console.log(`last_student: ${last_student}`)


last_student_gpa = student_gpas.pop();
console.log(`last_student_gpa: ${last_student_gpa}`)

last_student_honor = honor_roles.pop();
console.log(`last_student_honor: ${last_student_honor}`)


for(let i = 0; i < student_gpas.length; i++){
    if(last_student_gpa > student_gpas[i]){
        console.log('last student, best student')
    }else{
        console.log('Not at all')
    }
}
