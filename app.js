//^^Name
// // !one world with capitaliezed first letter
// const publication = "freeCodeCamp";
// console.log(publication[0].toUpperCase() + publication.substring(1));//*Uppercase first letter

// //!each word with first letter capitalized 
// const mySentence = "freeCodeCamp is an awesome resource";
// const words = mySentence.split(" ");//*string to array with split

// for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);
// }
// console.log(words.join(" "));
//!Accept just string
// const str = 'hello 123 !@#$%^WORLD?.';
// const noSpecialCharacters = str.replace(/[^a-zA-Z ]/g, '');
// console.log(noSpecialCharacters); 
//^^Email
//!email tolowercase
// let text = "Hello WORLD!";
// let result = text.toLowerCase();
// console.log(result);
//!ensuring that email contain "@"
// let email = prompt("insert")
// const emailPattern = /@/;
// if (emailPattern.test(email)) {
//     alert("good")
// } else {
//     alert("Invalid email address")
// }
//
//^^age && email && password : not including spaces
// let email = prompt("insert")
// const emailPattern = / /;
// if (emailPattern.test(email)) {
//     alert("Invalid email address")
// } else {
//     alert("good")
// }
// 
//^^PASSWORD
//! at least one special char
// let email = prompt("insert")
// const emailPattern =/["@", "#", "-", "+", "*", "/"]/
// if (emailPattern.test(email)) {
//     alert("good")
// } else {
//     alert("Invalid email address")
// }
//&LOGIN
//^^email
//!Check if the email exists in our Database
// const nums = [ 1, 3, 5, 7];
// console.log(nums.includes(3));//*true
//!