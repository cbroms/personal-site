<!--
  ___ ____
 / __|    |
/ /  |___ /
\ \__|    \
 \___|____|

code by CB -> www.christianbroms.com

File: save.php
Desc: adds preloader times to json file
Created on: 08/08/17
Requires: None
Dependants: index.html
CDN: jquery.min.js
Links to: None 
-->

<?php

date_default_timezone_set('America/Los_Angeles');

$file = "js/preloadTimes.json";

$user = uniqid(); // assign a unique id for each user
$currtime = date('h:i:s a l F jS Y T');
$pageload = $_POST['pageLoadDuration'];
$download = $_POST['userDownloadMBps'];

$json = json_decode(file_get_contents($file), true); // get the json file

$json[$user] = array("time" => $currtime,
                     "pageLoadDuration" => $pageload,
                     "userDownloadMBps" => $download); // add new information

file_put_contents($file, json_encode($json, JSON_PRETTY_PRINT)); // add to json

?>
