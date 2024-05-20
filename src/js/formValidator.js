$(document).ready(function() {

    $("p[name='usernameCheck']").hide();
    $("p[name='emailCheck']").hide();
    $("p[name='passwordCheck']").hide();
    $("p[name='genderCheck']").hide();
    $("p[name='dobCheck']").hide();
    $("p[name='termsCheck']").hide();

    let usernameError = true;
    let emailError = true;
    let passwordError = true;
    let genderError = true;
    let dobError = true;
    let termsError = true;

    function checkUsername() {
        let usernameVal = $('#username').val();
        if (usernameVal.length == "") {
            $("p[name='usernameCheck']").show();
            $("p[name='usernameCheck']").text("** Username filed not to be empty.")
            usernameError = false;
            return false;
        }
        else if (usernameVal.length < 6 || usernameVal.length > 20){
            $("p[name='usernameCheck']").show();
            $("p[name='usernameCheck']").text("** Username length must be between 6 and 20")
            usernameError = false;
            return false;
        }
        else {
            $("p[name='usernameCheck']").hide();
        }
    }
    function checkEmail() {
        let regex =  
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
        let emailVal = $('#email').val();
        if(emailVal.length == "") {
            $("p[name='emailCheck']").show();
            $("p[name='emailCheck']").text("** Email filed not to be empty.")
            emailError = false;
        }
        else if (!regex.test(emailVal)){
            $("p[name='emailCheck']").show();
            $("p[name='emailCheck']").text("** Email is invalid")
            emailError = false;
        }
        else {
            $("p[name='emailCheck']").hide();
        }
    }
    function checkPassword() {
        let passwordVal = $('#password').val();
        let confirmPasswordVal = $('#confirmPassword').val();
        if(passwordVal.length == "" || confirmPasswordVal.length == "") {
            $("p[name='passwordCheck']").show();
            $("p[name='passwordCheck']").text("** Password filed not to be empty");
            passwordError = false;
        }
        else if (passwordVal.length < 8 || passwordVal.length > 20) {
            $("p[name='passwordCheck']").show();
            $("p[name='passwordCheck']").text("** Password field must between 8 and 20");
            passwordError = false;
        }
        else if (confirmPasswordVal.length < 8 || confirmPasswordVal.length > 20) {
            $("p[name='passwordCheck']").show();
            $("p[name='passwordCheck']").text("** Confirm Password field must between 8 and 20");
            passwordError = false;   
        }
        else if (passwordVal != confirmPasswordVal) {
            $("p[name='passwordCheck']").show();
            $("p[name='passwordCheck']").text("** Password and Confirm Password must be same");
            passwordError = false;   
        }
        else {
            $("p[name='passwordCheck']").hide();
            passwordError = true;   
        }
    }
    function checkDOB() {
        let dobVal = $('#dob').val();

        const todayDate = new Date();
        let dobDate = new Date(dobVal)
        if (dobDate >= todayDate ) {
            $("p[name='dobCheck']").show();
            $("p[name='dobCheck']").text('** Date is not valid');
            dobError = false;
        } else {
            $("p[name='dobCheck']").hide();
            dobError = true;
        }
    }
    function checkTermsConds() {
        let terms = $('#termsConds');
        if(!(terms.is(':checked'))) {
            $("p[name='termsCheck']").show();
            $("p[name='termsCheck']").text('** Must agree with terms and conditions');
            termsError = false;
            return false;
        }
        else {
            $("p[name='termsCheck']").hide();
            termsError = true;
        }
    }

    $("form[name='register'] input[name='username']").on("change", function() {
        checkUsername();
    })

    $("form[name='register'] input[name='email']").on("change", function() {
        checkEmail();
    })
    $("form[name='register'] input[name='password']").on("change", function() {
        checkPassword();
    })
    $("form[name='register'] input[name='confirmPassword']").on("change", function() {
        checkPassword();
    })
    $("form[name='register'] input[name='dob']").on("change", function() {
        checkDOB();
    })
    $("form[name='register'] input[name='termsConds']").on("change", function() {
        checkTermsConds();
    })

    $('.register-form').on('submit', function(e) {
        e.preventDefault();
        checkUsername();
        checkEmail();
        checkPassword();
        checkPassword();
        checkDOB();
        checkTermsConds();
        if (
            usernameError == true &&
            emailError == true &&
            passwordError == true && 
            dobError == true && 
            termsError == true 
        ) {
            console.log("Register Form Valid");
            return true;
        }
        else {
            console.log("Register Form invalid");
            return false;
        }
    })

})