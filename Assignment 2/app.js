var base, height, result, username;

username = prompt("Enter your name:", "");

alert('Welcome, ' + username + '! \nThis is the 2nd JS Assignment');

base = prompt('Enter the length of the base of the triangle', "");
height = prompt('Enter the height of the triangle', "");

base = Number(base);
height = Number(height);

result = (base * height) / 2;

console.log('Area of the triangle: ' + result);
