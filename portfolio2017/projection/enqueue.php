<?php 
    
    //upon submission of form
    if (isset($_POST['word-entry'])) {

        //get the id of the page
        $id = $_POST['id'];
        //get the input data
        $data = $_POST['word-entry'];
        //parse and clean the data of trailing whitespace
        $cleanData = trim($data, "\t\n\r\0\x0B");
        //post the data to the queue with newline
        if ($cleanData != ""){
            $ret = file_put_contents('queue.txt', strtoupper($cleanData . "\n"), FILE_APPEND);
        }
    }
    //redirect to next page based off page id 
    if ($id == 1) {
        header("Location: http://www.christianbroms.com/projection/participate2.html");
    } else if ($id == 2) {
        header("Location: http://www.christianbroms.com/projection/participate3.html");
    } else if ($id == 3) {
        header("Location: http://www.christianbroms.com/projection/participate4.html");
    } else {
        header("Location: http://www.christianbroms.com/projection/participate-done.html");
    }
    exit();

 ?>