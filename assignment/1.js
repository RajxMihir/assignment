let password = prompt("Enter your password\n");
document.write(password);

let confirmPassword = prompt("Confirm your password\n");
document.write(confirmPassword);

if (password === confirmPassword) 
{
    console.log("Password matched.Password validation sussesfull");
}

else
{
    console.log("Password didn't match. Password validation unsuccessful");
}


