let yourname;
let age;
let isStudent;

alert('Welcome!\nThis is the 1st JS Assignment')

yourname = prompt("Enter Name");
age = prompt("Enter Age");

age = Number(age);

if (age>=5 && age <= 24) {
    isStudent = true;
} else {
    isStudent = false;
}
console.log(yourname);
console.log(age);
console.log(isStudent);
