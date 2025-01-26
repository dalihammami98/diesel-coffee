<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "coffee";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("La connexion a échoué : " . $conn->connect_error);
}
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$insertQuery = "INSERT INTO user VALUES ('$name', '$email', '$message')";
    if ($conn->query($insertQuery) === TRUE) {
        header("Location: user.html");
        exit;
    }
$conn->close();
?>
