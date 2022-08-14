//placeholder
//TODO: Determine id queries for buttons 

async function logout() {
  const response = await fetch('/api/users/logout', {
    //not much practice with logouts but I believe it should be a post. 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    //redirect to home after logout
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
}

//grabs by button id logout
document.querySelector('#logout').addEventListener('click', logout);