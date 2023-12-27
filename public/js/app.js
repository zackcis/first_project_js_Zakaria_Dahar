class User {
    constructor(name,email,age,password,history){
        this.name = name
        this.email = email
        this.age = age
        this.password = password
        this.balance = 1000;
        this.history = history
    }
}
let Users = [];//*where will i save users data
let zack = new User ("zack","zakaria.eldahar@gmail.com",23,"zakaria123@")
Users.push(zack)
function emailExist(email) {
    return Users.find(user => user.email === email);
}
//&singUp function start
function signUp(user) {
    let warning = alert("mr user please be smart ra lcode dyali 3la 9ad l7al")
//&Signing Up
//? Name
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
    // console.log(nameWords.join(" "));
// nom = nom.replace(/[^a-zA-Z ]/g, '');//*deleting special char
// ?EMAIL
let askEmail = prompt("Enter your email please!")
askEmail = askEmail.trim()
askEmail = askEmail.toLocaleLowerCase()
//(email.indexOf(' ') !== -1)

if (askEmail.includes(' ') || askEmail.length < 10 || askEmail.includes('@') == false ) {
    while (askEmail.includes(' ')) {
        askEmail = prompt("Please enter an email without spaces.");
    }
    while (askEmail.length < 10) {
        askEmail = prompt("Please enter an email with at least 10 characters.");
    }
    while (askEmail.includes('@') == false) {
        askEmail = prompt("Please enter an email with an '@' ");
    }
    // let isthemailexist = Users.filter(element => element.email == askEmail)
    // console.log(isthemailexist);
    // if (isthemailexist[0]== askEmail) {
    //     askEmail = prompt("Email already exists. Please enter a different email.");
    // }
    while (emailExist(askEmail)=== true) {
        askEmail = prompt("Email already exists. Please enter a different email.");
    }        
    //*Ensure the email is unique.
}
//! matgadatch lya checking cuz knt dayr function bla param
// ?AGE
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
// ?PASSWORD
let askPassword = prompt("Enter your password please")
askPassword = askPassword.trim()
if (askPassword.includes(' ') || askPassword.includes('"@", "#", "-", "+", "*", "/"') == false || askPassword.length < 7 ) {
    while (askPassword.includes(' ')) {
        askPassword = prompt("Enter a password without spaces in the middle")
    }
    while (askPassword.includes("@" || "#"|| "-"|| "+" ||"*" ||"/") == false) {
        askPassword = prompt("Eter a password that includes at least one special char")
    }
    while (askPassword.length < 7) {
        askPassword = prompt("Enter a password that includes at least 7 chars")
    }
}
let askPasswordConfirmation = prompt("confirm your password")
if (askPasswordConfirmation != askPassword) {
    while (askPasswordConfirmation != askPassword) {
        prompt("it's not the same password")
        signUp()
    }
}
let user = new User(nameWords.join(" "),askEmail,age,askPassword,[]);
Users.history = [`${user.name} signed up`]
Users.push(user)
console.log(Users);
}
//&singUp function end
//?Login function start
function Login(user) {
    let loginEmail = prompt("Enter your email ");
    let loginPassword = prompt("Enter your password ");
    let user = Users.find(user => user.email === loginEmail && user.password === loginPassword);
    console.log(user);
    if (user) {
        alert(`welcome ${user.name} your balance is ${user.balance}`)
        offerServices(user)
    } else {
        console.log("false email or password please try again");
    }
    Users.history.push(`${user.name} is conected`)
    while (user.history.includes(`${user.name} took a loan`)) {
        user.balance -= user.balance * 0.1
        //^^credit shoul be declared before this
        if (user.balance == credit) {
            break
        }
    }
if (user.history.includes(`${user.name} took a loan`)) {
    user.balance -= user.balance * 0.1
}
}
//?Login function end
//^changin password start
function changePassword(user) {
    
        let changePasswordEmail = prompt("Enter your email to change the password:");
        
        let user = Users.find(user => user.email === changePasswordEmail);
    
        if (user) {
            let newPassword = prompt("Enter your new password:");
            user.password = newPassword;
            console.log("daba bdlnah lik mara khra mat3awdhach");
        } else {
            console.log("Email doesn't exist allo lboliss");
        }
    user.history.push(`${user.name} changed his password`)
} 
//^changin password ending
//*withdraw function start
function withdrawMoney(user) {
    let amountToWithdraw = prompt("insert the amountToWithdraw:");
    amountToWithdraw = parseInt(amountToWithdraw);

    if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
        alert("olahta bzez bach wssalt hna be smart ra dakchi li dakhalti ghalat")
        while (isNaN(amountToWithdraw)) {
            amountToWithdraw = prompt("insert a NUMBER of the amountToWithdraw:")
        }
        while (amountToWithdraw <= 0) {
            alert("khouya wach katfla ya khrej lflouss ya ser f7alk")
            amountToWithdraw = prompt("insert a NUMBER greater than 0 of the amountToWithdraw:")
        }
    }

    if (amountToWithdraw > user.balance) {
        alert("chno ze3ma dik 2dh li 3andek ghatwld lik?")
        while (amountToWithdraw > user.balance) {
            amountToWithdraw = prompt("dakhal chi ra9m wa9i3i alfa9ir")
        }
    } else {
        user.balance -= amountToWithdraw;
        console.log(`rass l3am hada chri lsa7btk cadeau, b9at lik: ${user.balance} al3niba`);
    }
    user.history.push(`${user.name} did a withdraw`)

}
//*withdraw function end
//!desposit money function start
function despositMoney(user) {
    let askDesposit = parseInt(prompt("enter the amount that you wanna desposit :"))
    if (askDesposit > 1000 || askDesposit == 0 || isNaN(askDesposit) ) {
        while (askDesposit > 1000) {
            alert("3andek bzaf dlflouss dakhal gha 1000 o 3ti dakchi li b9a l achraf")
            askDesposit = parseInt(prompt("enter an amount that less than 1000 mad :"))
        }
        while (askDesposit == 0) {
            askDesposit = parseInt(prompt("enter an amount greater than 0 mad :"))
        }
        while (isNaN(askDesposit)) {
            askDesposit = parseInt(prompt("enter an amount a real NUMBER please:"))
        }
    }else{
        user.balance += askDesposit
        alert("Galo nass zman khzen tl9a bach tfra7 mni t7zen (gha fya n3ass)")
    }
    user.history.push(`${user.name} saved his money`)

}
//!desposit money function end
let ask = prompt("Hello there!!,Do you want to Log in or Sign up or changing the password ?")//*asking the user for his desire
ask = ask.toLocaleLowerCase().trim()
function firstCondition(){
    // if (ask === "sign up") {
    //     signUp()
    // }else if (ask === "log in") {
    //     Login()
    //     //!careful this is the end of the second condition
    // }else if (ask == "change password") {
    //     changePassword()
    // }else {
    //     ask = prompt("Hello there!!,Do you want to Log in or Sign up or changing the password ?")
    
    // }
}
//^first condition start
if (ask === "sign up") {
    signUp()
}else if (ask === "log in") {
    Login()
    //!careful this is the end of the second condition
}else if (ask == "change password") {
    changePassword()
}else {
    ask = prompt("Hello there!!,Do you want to Log in or Sign up or changing the password ?")
}
//^first condition end
//&Take a loan start
function Loan(user) {
    //* If the user chooses this option, they can take a loan up to 20% of what they already have
    user.balance += user.balance * 0.2
    user.history.push(`${user.name} took a loan`)
    var credit = user.balance += user.balance * 0.2
}
//&Take a loan end
//*offering services start 
function offerServices(User) {
    let userChoice = prompt("Choose option between: 'logout', 'withdraw', 'deposit', 'loan', 'invest', 'history'");

        switch (userChoice) {
            case "logout":
                ask = prompt("Hello there!!,Do you want to Log in or Sign up or changing the password ?") ;
                if (ask === "sign up") {
                    signUp()
                }else if (ask === "log in") {
                    Login()
                    //!careful this is the end of the second condition
                }else if (ask == "change password") {
                    changePassword()
                }else {
                
                }
                break;
            case "Withdraw Money":
                withdrawMoney(user)
            break;
            case "Deposit Money":
                despositMoney(user)
            break;
            case "Take a Loan":

            break;
            case "invest":

            break;
            case "history":
                console.log(User.history);
            break;
            default:
                console.log("wa ta khtar chi 7aja mgada");
        }
}
//*offering services end 




