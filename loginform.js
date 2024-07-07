var form = document.getElementById("forms");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var password2 = document.getElementById("confirmpassword");

//fuction to make the eye icon visible and not visible in the password button
var is_visible = false;
function see() {
    var input = document.getElementById("password");
    var see = document.getElementById("see");

    if (is_visible) {
        input.type = 'password';
        is_visible = false;
        see.classList.toggle('fa-eye');
        see.classList.toggle('fa-eye-slash');
        // see = '<i class="fa-solid fa-eye-slash"></i>'
        // see.style.color='gray';
    }
    else {
        input.type = 'text';
        is_visible = true;
        see.classList.toggle('fa-eye-slash');
        see.classList.toggle('fa-eye');
        // see = '<i class="fa-solid fa-eye-slash"></i>'
        // see.style.color='#262626';
    }

}
//fuction to make the eye icon visible and not visible in the confirmpassword button 
var is_visible= false;

function see2() {
    var input = document.getElementById("confirmpassword");
    var see2 = document.getElementById("see2");

    if (is_visible) {
        input.type = 'password'; // Use 'password' to hide the password
        is_visible = false;
        see2.classList.toggle('fa-eye');
        see2.classList.toggle('fa-eye-slash');
    } else {
        input.type = 'text'; // Use 'text' to reveal the password
        is_visible = true;
        see2.classList.toggle('fa-eye-slash');
        see2.classList.toggle('fa-eye');
    }
}


//function to validate then  submit button
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

//Function to go to a new page if all the conditions in the fucton validateInputs() are meet 
form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateInputs(); 
    redirectToNextPage(); 
});


//if the inputs are incorrect this fuction adds d red border
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}
//if the inputs are correct this fuction adds d green border
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
//to validate the email 
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateInputs() {
    //to save the inputs in a variable
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    var input = document.getElementById("password").value;
    input = input.trim();
    var a = 0;
    var passwordChecklist = document.getElementById("show_hide"); // Get the checklist element


    //condition to check if the username is correct
    if (usernameValue === '') {
        setError(username, 'Username is required');
    }
    else if (!usernameValue.match(/^[a-zA-Z0-9]*$/)) {
        setError(username, 'Username has to contain an alphabet and a digit.');

    }
    else {
        setSuccess(username);
    }

    //condition to check if the email is correct
    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    //to show and hide the password element

    if (a === 0) {
        document.getElementById('show_hide').style.display = 'inline';
        a = 1; // Set a to 1 to indicate that the element is now visible
    } else {
        document.getElementById('show_hide').style.display = 'none';
        a = 0; // Set a back to 0 to indicate that the element is hidden
    }

    //condition to check if the password is correct not complete (remaining a statement if everything is true dn it should change to success)
    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else {
        setSuccess(password);
    }
    if (input.length >= 8) {
        document.getElementById("check0").style.color = "green";
    }
    else {
        document.getElementById("check0").style.color = "red";
    }
    if (input.match(/[A-Za-z]/i)) {
        document.getElementById("check1").style.color = "green";
    }
    else {
        document.getElementById("check1").style.color = "red";
    }
    if (input.match(/[0-9]/i)) {
        document.getElementById("check2").style.color = "green";
    }
    else {
        document.getElementById("check2").style.color = "red";
    }
    if (input.match(/[^A-Za-z0-9-' ']/i)) {
        document.getElementById("check3").style.color = "green";
    }
    else {
        document.getElementById("check3").style.color = "red";
    }
    if (input.match('^[^\s]+$')) {
        document.getElementById("check4").style.color = "green";
    }
    else {
        document.getElementById("check4").style.color = "red";
    }

    // condition to hide all the check list element if the above is true and if it is false it would still be displayed
    if (passwordValue !== '' && input.length >= 8 && input.match(/[A-Za-z]/i) &&
        input.match(/[0-9]/i) && input.match(/[^A-Za-z0-9-' ']/i) && input.match('^[^\s]+$')) {
        // If all conditions are met, hide the checklist element
        passwordChecklist.style.display = 'none';
        // Additionally, you can set the "setSuccess" for the password field here
        setSuccess(password);
    } else {
        // If any condition fails, show the checklist element
        passwordChecklist.style.display = 'inline';
        // Additionally, you can set the "setError" for the password field here
        setError(password, 'Password does not meet all the requirements');
    }

    //condition to check if the confirm password is same as password 
    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

}
     // Check if all conditions are met go to a new page
     function redirectToNextPage() {
        
        usernameValue = username.value.trim();
        emailValue = email.value.trim();
        passwordValue = password.value.trim();
        password2Value = password2.value.trim();
        input = document.getElementById("password").value.trim();
    
        if (
            usernameValue !== '' && isValidEmail(emailValue) &&
            passwordValue !== '' && input.length >= 8 && input.match(/[A-Za-z]/i) &&
            input.match(/[0-9]/i) && input.match(/[^A-Za-z0-9-' ']/i) && input.match('^[^\s]+$') &&
            password2Value !== '' && password2Value === passwordValue
        ) {
            // If all conditions are met, redirect to another page
            window.location.href = "./Vowelcounter.html";
        } else {
            // If conditions are not met, you can show an error message or take other actions
            alert("Please fill in the form")
        }
    }
