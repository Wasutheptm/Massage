<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Validate and sanitize input (you should use more robust validation and sanitization methods)
    $username = htmlspecialchars(strip_tags($username));
    $password = htmlspecialchars(strip_tags($password));

    // Replace this with your actual authentication logic
    if ($username === 'example' && $password === 'example') {
        // Authentication successful
        echo "Login successful!";
        // Redirect or perform further actions as needed
    } else {
        // Authentication failed
        echo "Invalid username or password";
        // Handle failed login (e.g., redirect back to login page with an error message)
    }
} else {
    // Handle unauthorized access
    echo "Unauthorized access";
}
?>
