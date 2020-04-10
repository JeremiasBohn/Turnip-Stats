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
		$type = $_POST["type"];
		
		$date_converted = strtotime($date);
		
		if($type=="sale") {
			if(isset($_POST['time'])){
				if($_POST['time']=="PM") {
					$time = 1;
				} 
				else {
					$time=0;
				}
			}
			else {
				http_response_code(400);
				echo "Missing Data. Please fill out the form again.";
				exit;
			}
			
			if (date("w", $date_converted)==0) {
				http_response_code(400);
				echo "There is no sale price for Sundays. Use the purchase price form instead.";
				exit;
			}
		}
		else if ($type=="purchase") {
			if (date("w", $date_converted)!=0) {
				http_response_code(400);
				echo "There are only purchase prices for Sundays. Use the sale price form instead.";
				exit;
			}
		}
		else {
			http_response_code(400);
			echo "Some unintended error occured! Inform the administator!";
			exit;
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
			exit;			
		}
		if($type=="sale") {
			$sql = "INSERT INTO SaleStats (User, Price, Date, Time) VALUES ('" . $user . "', '" . $price . "', '" . $date . "' , '" . $time . "')";
		}
		else if ($type=="purchase") {
			$sql = "INSERT INTO PurchaseStats (User, Price, Week) VALUES ('" . $user . "', '" . $price . "', '" . date("W", $date_converted) . "')";
		}
		else {
			http_response_code(400);
			echo "Some unintended error occured! Inform the administator!";
			exit;
		}
		
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








