# first_project_js_Zakaria_Dahar
### First Project JavaScript:

## 1 - Instructions:
- Create a folder named: first_project_js_firstName_lastName
- Create a repository with the same name as the folder
- Adhere to the folder structure
- Individual work
- Minimum of 10 commits
- Deadline: One day
- Use of object classes, arrays, functions, prompts, etc.

## 2 - Project Objective:
- Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

## 3 - Instructions:
- Account Creation and Management:
    + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
    <!--*prompt for the user to choose between login and signing up and password -->
    + If the user only writes "exit," they exit the current process, and the choice question is asked again.
        * If the user chooses to sign up, here are the details they must enter:
            # Name (Full):
            - Check for leading or trailing spaces.
            <!-- *delete spaces -->
            - The first letter should be capitalized.
            <!--* Uperrcace -->
            - After each space, the first letter should remain capitalized.
            - Check that all other characters are in lowercase.
            - Do not save the Name if it has less than 5 characters (excluding spaces).
            <!--* it has to be more than 5 char -->
            - Do not save the Name if it contains numbers, "@", or similar special characters.
            <!--* Accept just string -->

            # Email:
            - Check for leading or trailing spaces.
            <!-- *delete spaces -->
            - Convert all letters to lowercase.
            <!--*Lowercacse -->
            - Do not save the Email if it has spaces in the middle.
            <!--*Refuse if there is spaces -->
            - Do not save the Email if it has fewer than 10 characters (excluding spaces).
            <!--* it has to be more 10 char -->
            - Do not save the Email if it does not contain exactly one "@" symbol.
            <!--*@ is mandatory -->
            - Ensure the email is unique.
            <!--*special email -->

            # Age:
            - Check for leading, trailing, or middle spaces.
            <!-- *delete spaces -->
            - Verify that only digits are entered.
            <!--*just Numbers -->
            - Do not save the Age if it has 0 characters, or if it has 3 characters or more.
            <!--*enter your right age -->
            # Password:
            - Check for leading or trailing spaces.
            <!-- *delete spaces -->
            - Do not save the Password if it has spaces in the middle.
            <!--*refuse if it has space in the midlle -->
            - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
            - Require at least 7 characters to confirm the password.
            <!--* more than 7 -->

            # Password_confirmed:
            - The user must re-enter their exact password; otherwise, they are blocked.
            <!--* if the user forget the password he have start from the begining  -->
            <!--!function -->
        * If the user chooses to log in, here are the details they must enter:
            # Email:
            - Check if the email exists in our Database.
            <!--*check if the email already exist  -->
            
            # Password:
            - Check if the entered password is associated with the previously entered email.
            <!-- -->
        * If the user chooses to change the password:
            - They must enter their existing Email in the Database.

        * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
            # Logout:
            - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            <!--*ila l user diconecta ki3awd yban lih kolchi mn lwel  --> 
            <!-- !function -->
            # Withdraw Money:
            - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            <!--*the user take -->
            # Deposit Money:
            - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            <!--*the user give -->
            # Take a Loan:
            - If the user chooses this option, they can take a loan up to 20% of what they already have.
            - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
            # Invest:
            - If the user chooses this option, they can invest any amount in the bank.
            - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
            # History:
            - Ability to view the entire transaction history.
