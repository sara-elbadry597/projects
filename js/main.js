let email= document.querySelector("#email");
let password= document.querySelector('#password');
let registerLink =document.querySelector('.register');
let warning =document.querySelector(".warning");
let loginBtn = document.querySelector(".login-btn");
let invalid=document.querySelector(".invalid");
let arrayOfUsers=[];


if(localStorage.getItem("users")==null){
arrayOfUsers=[]
}else{
    arrayOfUsers = JSON.parse(localStorage.getItem("users"));
}
// log in process
loginBtn.addEventListener("click",function(e){
    // Reset all messages
    warning.classList.add("d-none");
    invalid.classList.add("d-none");
    // Check for empty fields
    if(email.value.length==0||password.value.length==0){
        warning.classList.remove("d-none");
       }
        if (arrayOfUsers.some(user => user.mail === email.value)&&arrayOfUsers.some(user => user.pass === password.value)) {
            window.location.href="file:///C:/Users/CARNIVAL/Desktop/assignments/js assignments/assignment4/login/welcome.html"
        } else {
            invalid.classList.remove("d-none");
        }
    }
)


registerLink.addEventListener("click",function(e){
    e.preventDefault();
    window.location.href='file:///C:/Users/CARNIVAL/Desktop/assignments/js%20assignments/assignment4/login/sign-up.html'
})

