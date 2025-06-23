document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the first page (form page)
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Save the data in localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            // Redirect to the second page
            window.location.href = 'page2.html';
        });
    }
    
    // Check if we're on the second page (display page)
    const displayUsername = document.getElementById('display-username');
    const displaypassword = document.getElementById('display-password');
    
    if (displayUsername && displaypassword) {
        // Retrieve the data from localStorage
        const username = localStorage.getItem('username');
        const password = localStorage.getItem('password');
        
        // Display the data
        if (username) {
            displayUsername.textContent = username;
        }
        
        if (password) {
            displaypassword.textContent = password;
        }
    }
});
