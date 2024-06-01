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
        comp.innerHTML = (message !== '') ? message : comp.innerHTML;
    }
    this.hide = function(message = "", nameClass = 'show'){
        comp.className = comp.className.split(' ').filter((name) => nameClass !== name).join(' ');
        comp.innerHTML = (message !== '') ? message : comp.innerHTML;
    }
}

let usernameMessage = new Message(usernameCheck);
let emailMessage = new Message(emailCheck);
let passwordMessage = new Message(passwordCheck);
let genderMessage = new Message(genderCheck);
let dobMessage = new Message(dobCheck);
let termsMessage = new Message(termsCheck);

function checkUsername() {
    try {
        let usernameVal = usernameInput.value;
        if(usernameVal.length == "") {
            throw new TypeError("** Username field not to be empty!");
        }
        else if (usernameVal.length < 8 || usernameVal.length > 20) {
            throw new TypeError("** Username length must between 8 and 20");
        }
        usernameMessage.hide();
        return true;
    } catch (err) {
        usernameMessage.show(err.message);
        return false;
    }
}
function checkEmail() {
    try {
        let regex =  
            /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
        let emailVal = emailInput.value;
        if(emailVal.length == "") {
            throw new TypeError("**  Email field not to be empty!")
        }
        else if(!regex.test(emailVal)) {
            throw new TypeError("** Email is invalid!");
        }
        emailMessage.hide();
        return true;
    } catch(err) {
        emailMessage.show(err.message);
        return false;
    }
}
function checkPassword() {
    try {
        let passwordVal = passwordInput.value;
        let confirmPasswordVal = confirmPasswordInput.value;
        if (passwordVal.length == ""){
            throw new TypeError("** Password Field not to be empty!");
        } 
        else if (confirmPasswordVal.length == "") {
            throw new TypeError("** Confirm Password Field not to be empty!");
        }
        else if (passwordVal.length < 8 || passwordVal.length > 20) { 
            throw new TypeError("** Password must between 8 and 20");
        }
        else if (confirmPasswordVal.length < 8 || confirmPasswordVal.length > 20) {
            throw new TypeError("** Confirm Password must between 8 and 20");
        }
        else if (passwordVal != confirmPasswordVal) {
            throw new TypeError("** Password and Confirm password must be same");
        }
        passwordMessage.hide();
        return true;
    } catch(err) {
        passwordMessage.show(err.message);
        return false;
    }
}
function checkGender() {
    try {
        let genderMaleVal = genderMaleInput;
        let genderFemaleVal = genderFemaleInput;
        if (!(genderMaleVal.checked || genderFemaleVal.checked)) {
            throw new TypeError("** must choose gender!")
        }
        genderMessage.hide();
        return true;
    } catch(err) {
        genderMessage.show(err.message);
        return false;
    }
}
function checkDOB() {
    try {
        let dobVal = dobInput.value;
        if (dobVal.length == "") {
            throw new TypeError("** DOB Must Filled!")
        }
        const todayDate = new Date();
        let dobDate = new Date(dobVal);
        if (dobDate >= todayDate) {
            throw new TypeError("** Date is not valid!");
        }
        dobMessage.hide();
        return true;
    } catch (err) {
        dobMessage.show(err.message);
        return false;
    }
}
function checkTermsConds() {
    try {
        let terms = termsCondsInput;
        if(!terms.checked){
            throw new TypeError("** Must agree with terms and conditions!");
        }
        termsMessage.hide();
        return true;
    } catch (err) {
        termsMessage.show(err.message);
        return false;
    }
}

// username.addEventListener('change', function() {
//     checkUsername()
// })

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if(
        checkUsername() &&
        checkEmail() &&
        checkPassword() &&
        checkGender() &&
        checkDOB() &&
        checkTermsConds()
    ) {
        let data = new FormData(this) ;
        // for(let [key, value] of data) {
        //     console.log(key, value);
        // }
        const sectionPopup = document.querySelector('#section-popup');
        const popup = new Message(sectionPopup);
        popup.show('', 'show-popup');
        document.querySelector('body').style.overflow = 'hidden';
        window.scrollTo(0, 0);
        
    } else {
        console.log("form is not valid!")
    }
})