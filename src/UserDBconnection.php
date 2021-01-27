<?php

//connecting to database
$conn = mysqli_connect('localhost', 'root', 'DaHyunIs2Q!', 'recipe');

//check if connection works
if(!$conn) { echo 'Connection error' . mysqli_connect_error() }
else{
    echo 'connection successful'
}

?>