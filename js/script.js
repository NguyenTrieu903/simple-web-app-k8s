document.addEventListener('DOMContentLoaded', function() {
    // API endpoint - adjust based on your Kubernetes service
    const API_URL = '/api';
    
    // Check if we're on the first page (form page)
    const userForm = document.getElementById('userForm');
    if (userForm) {
        userForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Save the data in localStorage for page 2
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            // Save the data to PostgreSQL database
            fetch(`${API_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Store the user ID if needed
                if (data.userId) {
                    localStorage.setItem('userId', data.userId);
                }
                // Redirect to the second page
                window.location.href = 'page2.html';
            })
            .catch((error) => {
                console.error('Error:', error);
                // Continue to page 2 even if DB save fails
                window.location.href = 'page2.html';
            });
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