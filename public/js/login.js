//going to try to handle signup and login in one form and one handlebars. probably not the best practice but the methods here will be super similar so I want to try and see if it works. 
console.log("is this working");
async function signupForm(e) {
    e.preventDefault();

    const signUpUserName = document.querySelector('#username-signup').value.trim();
    const signUpEmail = document.querySelector('#email-signup').value.trim();
    const signUpPassword = document.querySelector('#password-signup').value.trim();

    if (!signUpUserName || !signUpEmail || !signUpPassword) {
        alert("You must enter a username, email, and password in order to sign up. Please try again.")
    }

    //this block will wrap the lower if responding to a valid response to take them to the homepage so something will awways happen. 
    else if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            console.log('New user created successfully.');
            document.location.replace('../home');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#login-form').addEventListener('submit', loginForm);

async function loginForm(e) {
    e.preventDefault();


    //grabs the elements within login.handlebars by id and trims any white spice that is entered when the user tries to login with their password/username
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (!username || !password) {
        alert("Either your username, password, or both are invalid. Please try again.")
    }

    else if (username && password) {
    const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
        username,
        password
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('../home');
    } else {
        alert(response.statusText);
    }
    }
}

document.querySelector('#login-form').addEventListener('submit', loginForm);