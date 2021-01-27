<?php
//variables taken from login form to be passed to database
$password = $_POST['password'];
$email = $_POST['email'];

//connecting to database
$conn = new mysqli_connect('localhost', 'root', 'DaHyunIs2Q!', 'recipe');

//check connection
if($conn->connect_error){
    die('Connection Failed  : ' . $conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(password, email) values(?,?)");
    $stmt->bind_param("ss", $password, $email)
    $stmt->execute();
    echo "User registered!";
    $stmt->close();
    $conn->close();



}

?>