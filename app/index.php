<?php

header('Access-Control-Allow-Origin: http://localhost:3000'); // Adjust if needed

if (isset($_POST['submit'])) {
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : "";  // Sanitize
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : ""; // Validate email
    $subject = isset($_POST['subject']) ? $_POST['subject'] : ""; // Empty string
    $message = isset($_POST['message']) ? $_POST['message'] : ""; // Empty string

    // Additional input validation as needed

    try {
        $mailheader = "From:" .$name. "<" .$email. ">\r\n";
        $recipient = "kcqkoo@gmail.com";

        if (mail($recipient, $subject, $message, $mailheader)) {
            echo "Form Submitted Successfully!";
        } else {
            throw new Exception("Email could not be sent.");
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}


  
  
