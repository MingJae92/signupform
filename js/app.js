const signup = document.getElementById("signup");
const cancel = document.getElementById("cancel");
const email = document.getElementById("email");
const accountname = document.getElementById("accountname");
const password = document.getElementById("password");
const repeatpassword = document.getElementById("repeatpassword");
const inputs = document.querySelectorAll("input");

signup.addEventListener('submit', e =>{
    e.preventDefault();
    checkInputs();
   
});

function checkInputs(){
    const accountnameValue = accountname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const repeatpasswordValue = repeatpassword.value.trim();

    if(accountnameValue ===""){
        setErrorFor(accountname, "Account name cannot be blank!")
    }else{
        setSuccessFor(accountname);
    }

    if(emailValue ===""){
        setErrorFor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Not valid email");
    }else{
        setSuccessFor(email);
    }

    if(passwordValue ===""){
        setErrorFor(password, "Password cannot be blank");
    }else{
        setSuccessFor(password);
    }

    if(repeatpasswordValue ===""){
        setErrorFor(repeatpassword,"Repeated password cannot be blank!");
    }else if(passwordValue !== repeatpasswordValue){
        setErrorFor(repeatpassword, "Repeated password does not match!");
    }else{
        setSuccessFor(repeatpassword);
        setTimeout(function(){
            window.location = "./submission.html";
        }, 1000);
        alert("Thank you for signing up!");
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "box error";
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "box success";
    
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

cancel.addEventListener("click",()=>{
    inputs.forEach(input=> input.value="")
});











