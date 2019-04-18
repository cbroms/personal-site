<?php 
    
    // if the queue is populated with some data
    if (filesize("queue.txt") != 0) {

        // get the requested line number
        $lineNumber = $_POST['data'];
        // get all the data in the file into an array
        $lines = file("queue.txt", FILE_IGNORE_NEW_LINES);
        // read the data at the requested line number
        $data = $lines[$lineNumber];
        // remove trailing newline from the data
        $cleanData = trim($data, "\t\n\r\0\x0B");
        // deliver the clean data
        echo $cleanData;
        exit();

    } else {
        // if the file is empty, return null
        echo null;
        exit();
    }

 ?>