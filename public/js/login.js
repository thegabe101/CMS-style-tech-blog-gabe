// //going to try to handle signup and login in one form and one handlebars. probably not the best practice but the methods here will be super similar so I want to try and see if it works. 
// // console.log("is this working");
// // async function signupForm(e) {
// //     e.preventDefault();

// //     const signUpUserName = document.querySelector('#username-signup').value.trim();
// //     const signUpEmail = document.querySelector('#email-signup').value.trim();
// //     const signUpPassword = document.querySelector('#password-signup').value.trim();

// //     if (!signUpUserName || !signUpEmail || !signUpPassword) {
// //         alert("You must enter a username, email, and password in order to sign up. Please try again.")
// //     }

// //     //this block will wrap the lower if responding to a valid response to take them to the homepage so something will awways happen. 
// //     else if (username && email && password) {
// //         const response = await fetch('/api/users', {
// //             method: 'POST',
// //             body: JSON.stringify({
// //                 username,
// //                 email,
// //                 password
// //             }),
// //             headers: { 'Content-Type': 'application/json' }
// //         });
// //         if (response.ok) {
// //             console.log('New user created successfully.');
// //             document.location.replace('../home');
// //         } else {
// //             alert(response.statusText);
// //         }
// //     }
// // }

// // document.querySelector('#login-form').addEventListener('submit', loginForm);

// //ending up moving signup to its own script 

// async function loginForm(e) {
//     e.preventDefault();

//     //grabs the elements within login.handlebars by id and trims any white spice that is entered when the user tries to login with their password/username
//     // const username = document.querySelector('#username-login').value.trim();
//     // const password = document.querySelector('#password-login').value.trim();

//     const userObj = {
//         username: document.querySelector("#username-login").value,
//         password: document.querySelector("#password-login").value,
//     }

//     // if (!username || !password) {
//     //     alert("Either your username, password, or both are invalid. Please try again.")
//     // }

//     fetch("/api/users/login", {
//         method: "POST",
//         body: JSON.stringify(userObj),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }).then(res => {
//         if (res.ok) {
//             //GMS redirect to home once we are logged in, or ding an alert that something didnt check out
//             console.log("clicked");
//             location.href = "/home"
//         } else {
//             alert("You have entered an invalid email or password.")
//         }
//     })
// }

// //     else if (username && password) {
// //         const response = await fetch('/api/users/login', {
// //             method: 'POST',
// //             body: JSON.stringify(userObj),
// //             headers: { 'Content-Type': 'application/json' }
// //         });

// //         if (response.ok) {
// //             document.location.replace('../home');
// //         } else {
// //             alert(response.statusText);
// //         }
// //     }
// // }

// document.querySelector('#login-form').addEventListener('submit', loginForm);


// login form query selector

//GMS grab our login page form, add an event listener for its submit, and prevent default
document.querySelector("#login-form").addEventListener("submit", e => {
    e.preventDefault();
    // click check
    console.log("i haveth beeneth clickethed");
    // our userObj contains two values: the username and the password entered on the login page. grabs by id then checks value of field
    const userObj = {
        username: document.querySelector("#username-login").value,
        password: document.querySelector("#password-login").value,
    }
    //GMS may need to add users to route
    //GMS takes body object and stringifies it to post it as backend checks if its a successful login 
    fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => {
        if (res.ok) {
            //GMS redirect to home once we are logged in, or ding an alert that something didnt check out
            console.log("clicked");
            location.href = "/home"
        } else {
            alert("You have entered an invalid email or password.")
        }
    })
});


//GMS this is just a simple function that connects to our login handlebars. connects to the checkbox i added- when checked will change the field grabbed by id to password(hidden) or text(shown) value.
function showPw() {
    var x = document.getElementById("password-login");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

