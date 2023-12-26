// class User {
//     constructor(name,email,age,password,){
//         this.name = name
//         this.email = email
//         this.age = age
//         this.password = password
//     }
// }
// let Users = [];//*where will i save users data
let warning = alert("mr user please be smart ra lcode dyali 3la 9ad l7al")
// let ask = prompt("Hello there!!,Do you want to Log in or Sign up or changing the password ?")//*asking the user for his desire
// //&Signing Up
// //? Name
// if (ask == "sign up") {
//     let nom = prompt("Your Full Name")
// let nomPattern = /[^A-Za-z ]/g;
// while (nom.match(nomPattern) || nom.length <= 5) {
//     nom = prompt("Your Full Name should not include special characters and it has to be more than 5 char");
//     nom = nom.trim();
// }
//     let nameWords = nom.split(" ");//*string to array with split
//     for (let i = 0; i < nameWords.length; i++) {
//     nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].substr(1);
//     }
//     console.log(nameWords.join(" "));
// }
// nom = nom.replace(/[^a-zA-Z ]/g, '');//*deleting special char
//?EMAIL
// let askEmail = prompt("Enter your email please!")
// askEmail = askEmail.toLocaleLowerCase()
// //(email.indexOf(' ') !== -1)

// if (askEmail.includes(' ') || askEmail.length < 10 || askEmail.includes('@') == false ) {
//     while (askEmail.includes(' ')) {
//         askEmail = prompt("Please enter an email without spaces.");
//     }
//     while (askEmail.length < 10) {
//         askEmail = prompt("Please enter an email with at least 10 characters.");
//     }
//     while (askEmail.includes('@') == false) {
//         askEmail = prompt("Please enter an email with an '@' ");
//     }
//     //*Ensure the email is unique.
// }
//?AGE

let age = parseInt(prompt("Enter your age with numbers"));
// age = age.trim();
if (age >= 100 || age == 0 || isNaN(age)) {
    // while (age.includes(' ')) {
    //     age = parseInt(prompt("Please enter an age without spaces"));
    // }
    while (age >= 100) {
        age = parseInt(prompt("Please enter an age that include ONLY two numbers"));
    }
    while (age == 0) {
        age = parseInt(prompt("Please entere a valid age wa please"))
    }
    while (isNaN(age)) {
        age = parseInt(prompt("khouya kteb ra9m lahfdek"))
    }
}
console.log(age);

