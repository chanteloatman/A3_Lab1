<?php
// these are variables, just like JS variables
$user = "root"; //user name
$pass = "root"; //user password
$host = "localhost"; //host we're using (apche inside of MAMP)
$db = "a3_cooperinfo"; //database we're connecting to

//1. create a connection to the database
$conn = mysqli_connect($host, $user, $pass, $db);
mysqli_set_charset($conn, 'uft-8');

//2. test the connection
if (!$conn){
  echo 'something broke, your connection will not work';
  exit;
}

// if anything worked, we'll see this (comment this out when everything is working)
//echo 'connect, yo!';

//$myQuery = "SELECT * FROM mainmodel"; //this is a simple SQL query
//$result = mysqli_query($conn, $myQuery); //result holds the result set
//$rows = array(); //we'll push each row into an array

//while ($row = mysqli_fetch_assoc($result)){
//  $rows[] = $row; //push each row from the result (the DB rows) into this array
//  }

//let's see what we get! The var dump shows your php
//var_dump($rows);
//
if (isset($_GET['carModel'])){
  $car = $_GET['carModel'];

  $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'"; //this is simple
  $result = mysqli_query($conn, $myQuery); //result holds the set

  $row = mysqli_fetch_assoc($result);

  //var_dump($row);
  echo json_encode($row);
}

?>
