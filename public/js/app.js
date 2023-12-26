class User {
    constructor(name,email,age,password,){
        this.name = name
        this.email = email
        this.age = age
        this.password = password
    }
}
let Users = [];//*where will i save users data
let ask = prompt("Hello there!!,Do you want to Log in or Sign up or changing the password ?")//*asking the user for his desire
//&Signing Up
//? Name
if (ask == "sign up") {
    let nom = prompt("Your Full Name")
let nomPattern = /[^A-Za-z ]/g;
while (nom.match(nomPattern) || nom.length <= 5) {
    nom = prompt("Your Full Name should not include special characters and it has to be more than 5 char");
    nom = nom.trim();
}
    let nameWords = nom.split(" ");//*string to array with split
    for (let i = 0; i < nameWords.length; i++) {
    nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].substr(1);
    }
    console.log(nameWords.join(" "));
}
    // nom = nom.replace(/[^a-zA-Z ]/g, '');//*deleting special char


