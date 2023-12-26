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
if (ask == "sign up") {
    let nom = prompt("Your Full Name")
    
//*
// let nomPattern =/[^A-Za-z0-9]/g //!39AL 3LA HADI
// console.log(nom.includes(nomPattern));
// while (nom.includes(nomPattern)) {
//     nom = prompt("Your Full Name should not include SC")

// }

//*
nom = nom.trim()
    // nom = nom.replace(/[^a-zA-Z ]/g, '');//*deleting special char
    let nameWords = nom.split(" ");//*string to array with split
    for (let i = 0; i < nameWords.length; i++) {
    nameWords[i] = nameWords[i][0].toUpperCase() + nameWords[i].substr(1);
    }
    console.log(nameWords.join(" "));
}

