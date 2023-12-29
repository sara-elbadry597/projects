let email= document.querySelector("#email");
let password= document.querySelector('#password');
let userName =document.querySelector('#name');
let loginLink =document.querySelector('.sign-in');
let warning =document.querySelector(".warning");
let signupBtn= document.querySelector(".signupBtn");
let valid=document.querySelector(".valid");
let invalid=document.querySelector(".invalid");
let existed=document.querySelector(".existed");
let users=[];
let arrayOfUsers;
// login process
loginLink.addEventListener("click", function(e) {
    e.preventDefault(); 
    window.location.href = "file:///C:/Users/CARNIVAL/Desktop/assignments/js%20assignments/assignment4/login/index.html";
});

if(localStorage.getItem("users")==null){
    users=[];
} else {
    users = JSON.parse(localStorage.getItem("users"));
}
// create account for user
function addUser(){
    var user={
        name:userName.value,
        mail:email.value,
        pass:password.value
    }
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    clear();
}
function clear() {
    email.value="";
    password.value="";
    userName.value="";
}
// validate the input data
let regexName=/^[a-zA-Z][a-zA-Z0-9_-]{3,}/;
let regexmail=/^[a-zA-Z0-9._%+-]+(@gmail|@yahoo)\.com$/;
// let regexpass=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z@$!%*?&]{8,}$/;
function validateData(){
    if (regexName.test(userName.value)&&regexmail.test(email.value)) {
        return true;
    } else {
        return false;
    }
}
signupBtn.addEventListener("click", function (e) {
    // Reset all messages
    warning.classList.add("d-none");
    existed.classList.add("d-none");
    valid.classList.add("d-none");
    invalid.classList.add("d-none");

    // Check for empty fields
    if (email.value.length === 0 || password.value.length === 0 || userName.value.length === 0) {
        warning.classList.remove("d-none");
        clear();
    } else {
        if (validateData()) {
            // Check if the email already exists
        if (users.some(user => user.mail === email.value)) {
            existed.classList.remove("d-none");
            valid.classList.add("d-none");
            invalid.classList.add("d-none");
        } else {
            // Add the user if the email doesn't exist
            addUser();
            clear();
            valid.classList.remove("d-none");
        }
        } else {
            invalid.classList.remove("d-none");
        }
        
    }
});
