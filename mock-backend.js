// Function to fetch greeting from the backend
function getGreeting() {
    // Send a GET request to the mock backend API (running on localhost:8080)
    fetch('http://localhost:8080/api/greet?name=John')
        .then(response => {
            // Check if the response is okay (status 200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Parse the response as text
        })
        .then(data => {
            // Update the message on the web page with the response from the backend
            document.getElementById('message').textContent = data;
        })
        .catch(error => {
            // Handle any errors during the fetch process
            console.error('Error fetching greeting:', error);
            document.getElementById('message').textContent = 'Error fetching greeting from backend';
        });
}

// Wait until the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Attach event listener to the button to call the getGreeting function on click
    document.getElementById('greetButton').addEventListener('click', getGreeting);
});
