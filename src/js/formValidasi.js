let registerForm = document.getElementById('registerForm');

const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector("#confirmPassword");
const genderMaleInput = document.querySelector('#male');
const genderFemaleInput = document.querySelector('#female');
const dobInput = document.querySelector('#dob');
const termsCondsInput = document.querySelector('#termsConds');

let usernameCheck = document.querySelector("p[name='usernameCheck']");
let emailCheck = document.querySelector("p[name='emailCheck']");
let passwordCheck = document.querySelector("p[name='passwordCheck']");
let genderCheck = document.querySelector("p[name='genderCheck']");
let dobCheck = document.querySelector("p[name='dobCheck']");
let termsCheck = document.querySelector("p[name='termsCheck']");

let usernameError = true;
let emailError = true;
let passwordError = true;
let genderError = true;
let dobError = true;
let termsError = true;

// usernameCheck.style.display = 'none';
// usernameCheck.className += ' show'

function Message(comp) {
    let compClassName = comp.className;

    this.show = function(message = "", nameClass = 'show'){
        // this.addClass();
        comp.className = comp.className.split(' ').filter((name) => nameClass !== name).concat(nameClass).join(' ');
        comp.textContent = message;
    }
    this.hide = function(message = "", nameClass = 'show'){
        comp.className = comp.className.split(' ').filter((name) => nameClass !== name).join(' ');
        comp.textContent = message;
    }
}

let usernameMessage = new Message(usernameCheck);
let emailMessage = new Message(emailCheck);
let passwordMessage = new Message(passwordCheck);
let genderMessage = new Message(genderCheck);
let dobMessage = new Message(dobCheck);
let termsMessage = new Message(termsCheck);

function checkUsername() {
    let usernameVal = usernameInput.value;
    if(usernameVal.length == "") {
        usernameMessage.show("** Username field not to be empty!");
        usernameError = false;
        return false;
    }
    else if (usernameVal.length < 8 || usernameVal.length > 20) {
        usernameMessage.show("** Username length must between 8 and 20");
        usernameError = false;
        return false;
    }
    else {
        usernameMessage.hide();
        return true;
    }
}
function checkEmail() {
    let regex =  
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
    let emailVal = emailInput.value;
    if(emailVal.length == "") {
        emailMessage.show("** Email field not to be empty!");
        emailError = false;
        return false;
    }
    else if(!regex.test(emailVal)) {
        emailMessage.show("** Email is invalid!")
        emailError = false;
        return false;
    }
    else {
        emailMessage.hide();
        return true;
    }
}
function checkPassword() {
    let passwordVal = passwordInput.value;
    let confirmPasswordVal = confirmPasswordInput.value;
    if (passwordVal.length == ""){
        passwordMessage.show("** Password Field not to be empty!");
        passwordError = false;
        return false;
    } 
    else if (confirmPasswordVal.length == "") {
        passwordMessage.show("** Confirm Password Field not to be empty!");
        passwordError = false;
        return false;
    }
    else if (passwordVal.length < 8 || passwordVal.length > 20) { 
        passwordMessage.show("** Password must between 8 and 20");
        passwordError = false;
        return false;
    }
    else if (confirmPasswordVal.length < 8 || confirmPasswordVal.length > 20) {
        passwordMessage.show("** Confirm Password must between 8 and 20");
        passwordError = false;
        return false;
    }
    else if (passwordVal != confirmPasswordVal) {
        passwordMessage.show("** Password and Confirm password must be same");
        passwordError = false;
        return false;
    }
    else {
        passwordMessage.hide();
        return true;
    }
}
function checkDOB() {
    let dobVal = dobInput.value;
    if (dobVal.length == "") {
        dobMessage.show("** DOB Must Filled!")
        return false;
    }
    const todayDate = new Date();
    let dobDate = new Date(dobVal);
    if (dobDate >= todayDate) {
        dobMessage.show("** Date is not valid!");
        dobError = false;
        return false;
    }
    else {
        dobMessage.hide();
        return true;
    }
}
function checkTermsConds() {
    let terms = termsCondsInput;
    if(!terms.checked){
        termsMessage.show("** Must agree with terms and conditions!")
        termsError = false;
        return false;
    }
    else {
        termsMessage.hide();
        return true;
    }
}

// username.addEventListener('change', function() {
//     checkUsername()
// })

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // checkTermsConds()
    try {
        checkUsername()
        checkEmail()
        checkPassword()
        checkDOB()
        checkTermsConds()
        console.log("form valid")
    } catch(exception) {
        console.log("Form not valid")
        console.log(exception);
    }
    // if(
    //     checkUsername() &&
    //     checkEmail() &&
    //     checkPassword() &&
    //     checkDOB() &&
    //     checkTermsConds()
    // ) {
    //     console.log("form is valid!")
    // } else {
    //     console.log("form is not valid!")
    // }
})