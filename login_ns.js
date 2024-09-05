// Unique key for this specific page
const pageKey = 'authenticated-page1';

// Define users and passwords for this specific page
const users = {
  '000': '000',
  '111': '111'
};

// Function to handle login
function login() {
  const username = prompt('Enter your username:');
  const password = prompt('Enter your password:');

  // Check if the username exists and the password matches
  if (users[username] && users[username] === password) {
    alert('Acesso permitido!');
    // If login is successful, store the authentication status with the unique key
    localStorage.setItem(pageKey, 'true');
    showContent();
  } else {
    alert('Acesso negado!');
    document.body.innerHTML = 'O acesso foi negado. Aparte F5 e tente novamente, se o problema persistir, entre em contato a Sec. Mun. de Educação de Tabocas.';
  }
}

// Show the protected content
function showContent() {
  document.getElementById('protected-content').style.display = 'block';
  document.getElementById('logout-btn').style.display = 'block';
}

// Check if the user is already authenticated when the page loads
window.onload = function() {
  if (localStorage.getItem(pageKey) === 'true') {
    showContent();
  } else {
    login();
  }
}

// Function to handle logout
function logout() {
  // Clear the authentication status for this page
  localStorage.removeItem(pageKey);
  // Reload the page to prompt for login again
  location.reload();
}
