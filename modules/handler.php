<?php

$name = isset($_POST['name']) ? trim(strip_tags($_POST['name']))  : null;
$phone = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : null;
$message = isset($_POST['message']) ? trim(strip_tags($_POST['message'])) : null;

if (empty($name) || empty($phone)) {
    exit;
}



$bd = new mysqli("localhost", "root", "root", "formtest");

$name = $bd->real_escape_string($name);
$phone = $bd->real_escape_string($phone);
$message = $bd->real_escape_string($message);


$query = "INSERT INTO messages VALUES(NULL, '$name', '$phone', '$message')";

if($bd->query($query)) {
    $result = array(
        'name' => $name,
        'phone' => $phone,
        'message' => $message
    );
    echo json_encode($result);
}