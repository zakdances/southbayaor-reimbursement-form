<?php
// Check if form is submitted using POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Iterate through each key-value pair in the $_POST array
    foreach ($_POST as $key => $value) {
        // Sanitize the value to prevent XSS attacks
        $sanitized_value = htmlspecialchars($value);
        // Print the key-value pair
        echo "$key: $sanitized_value<br>";
    }
} else {
    // If the request method is not POST, return an error message
    echo "Error: Method not allowed.";
}
?>