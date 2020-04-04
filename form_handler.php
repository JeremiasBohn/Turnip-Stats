<?php
		/*
		>----------------------------------------------<
		SET DATABASE CREDENTIALS HERE
		>----------------------------------------------<
		*/

		$servername = "localhost";
		$username = "user";
		$pw = "password";
		$dbname = "db";
		
		
		/*
		>----------------------------------------------<
		SET PATH TO KNIT.SH HERE
		>----------------------------------------------<
		*/		
		
		$pathtosh="/full/path/to/knit.sh";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $user = strip_tags(trim($_POST["user"]));
		$user = str_replace(array("\r","\n"),array(" "," "),$user);
        $password = trim($_POST["password"]);
        $price = trim($_POST["price"]);
		$date = $_POST["date"];
		if(isset($_POST['time'])){
			if($_POST['time']=="PM") {
			$time = 1;
			} else {
				$time=0;
			}
		}
		else{
			$time=0;
		}
        if ( empty($user) OR empty($password) OR empty($price) OR empty($date)) {
            http_response_code(400);
            echo "Missing Data. Please fill out the form again.";
            exit;
        }
		if (
		/*
		>----------------------------------------------<
		SET USER CREDENTIALS HERE
		>----------------------------------------------<
		*/
		
		!($user=="User 1" AND $password=="pw 1") AND 
		!($user=="User 2" AND $password=="pw 2") 
		) {
			http_response_code(400);
			echo "Wrong credentials!";
			exit;
		}
		$conn = new mysqli($servername, $username, $pw, $dbname);
		if ($conn->connect_error) {
			http_response_code(400);
			echo "Connection failed: " . $conn->connect_error;		
		}
		$sql = "INSERT INTO TurnipStats (User, Price, Date, Time)
		VALUES ('" . $user . "', '" . $price . "', '" . $date . "' , '" . $time . "')";
		
		if ($conn->query($sql) === TRUE) {
			exec("sudo ". $pathtosh);
			http_response_code(200);
			echo "Data stored successfully";
			} else {
				http_response_code(400);
			echo "Error: " . $sql . "<br>" . $conn->error;
			}
		$conn->close();

    } else {
        http_response_code(403);
        echo "There was a problem with your request. Please inform the administrator.";
    }
?>








