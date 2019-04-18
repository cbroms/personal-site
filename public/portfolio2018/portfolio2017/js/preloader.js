/*
  ___ ____
 / __|    |
/ /  |___ /
\ \__|    \
 \___|____|

code by CB -> www.christianbroms.com

File: preloader.js
Desc: loads all images to the cache
Created on: 07/02/17
Requires: index.html (for CDNs)
Dependants: index.html
CDN: jquery.min.js
Links to: None

*/

// TODO: search through the html page and pull all of the image SRCs. Parse the beggining of the string with the web address
// TODO: compile the image SRCs into four or five arrays, each varying in size by the images' sizes
// TODO: complete speed test loading process
// TODO: based off of the results, determine which array of images, if any, to preload

$(document).ready(function() {

  var images = new Array();
  var run = false;

  // as long as there's no # in the url, start the preloading
  if(!window.location.hash) {
    InitiateSpeedDetection();
  }

  function InitiateSpeedDetection() {
    window.setTimeout(MeasureConnectionSpeed, 1);
  };

  function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
      // simply loading images into an array
      var run = true;
      images[i] = new Image();
      images[i].src = preload.arguments[i];
    }
  }

  if (run == true){
    // if the connection test is going to run, hide body and pause css animations
    $("#wrapper").css("visibility", "hidden" );
    $("body").css("overflow", "hidden");
    $("#fadingText").css("animation", "paused");
  }

  var imageAddr = "http://christianbroms.com/images/personal_landscapeBANNER.jpg";
  var downloadSize = 3037000; // amount to download in bytes

  function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
      endTime = (new Date()).getTime();
      var res = showResults();

      // 84.4 Mbs of data to download, we want it to take < 6s
      if ((84.4 / res) > 6) {

        if((84.4 / res) > 16) {
          // poor connection, load fewer images to start
          console.log("slow, loading small");
          preload(
            "http://christianbroms.com/images/commercial_architectureBANNER.jpg",
            "http://christianbroms.com/images/commercial_renderingBANNER.jpg",
            "http://christianbroms.com/images/personal_architectureBANNER.jpg",
          //  "http://christianbroms.com/images/personal_landscapeBANNER.jpg",
            "http://christianbroms.com/images/personal_nightBANNER.jpg",
            "http://christianbroms.com/images/personal_pinholeBANNER.jpg",
            "http://christianbroms.com/images/personal_urbanBANNER.jpg",
            "http://christianbroms.com/images/desc_treesBANNER.jpg"
          );
        }
        else if ((84.4 / res) > 12 && (84.4 / res) < 16){
          // fair connection
          console.log("medium slow, loading smaller med");
          preload(
            "http://christianbroms.com/images/commercial_architectureBANNER.jpg",
            "http://christianbroms.com/images/commercial_renderingBANNER.jpg",
            "http://christianbroms.com/images/personal_architectureBANNER.jpg",
          //  "http://christianbroms.com/images/personal_landscapeBANNER.jpg",
            "http://christianbroms.com/images/personal_nightBANNER.jpg",
            "http://christianbroms.com/images/personal_pinholeBANNER.jpg",
            "http://christianbroms.com/images/personal_urbanBANNER.jpg",
            "http://christianbroms.com/images/desc_treesBANNER.jpg",
            "http://christianbroms.com/images/personal_architecture/parch00.jpg",
            "http://christianbroms.com/images/commercial_architecture/arch00.jpg",
            "http://christianbroms.com/images/commercial_rendering/rend00.jpg",
            "http://christianbroms.com/images/personal_landscape/landscape01.jpg",
            "http://christianbroms.com/images/personal_night/night00.jpg",
            "http://christianbroms.com/images/personal_urban/urban00.jpg"
          );
        }
        else {
          // moderate connection
          console.log("medium, loading med");
          preload(
            "http://christianbroms.com/images/commercial_architectureBANNER.jpg",
            "http://christianbroms.com/images/commercial_renderingBANNER.jpg",
            "http://christianbroms.com/images/personal_architectureBANNER.jpg",
          //  "http://christianbroms.com/images/personal_landscapeBANNER.jpg",
            "http://christianbroms.com/images/personal_nightBANNER.jpg",
            "http://christianbroms.com/images/personal_pinholeBANNER.jpg",
            "http://christianbroms.com/images/personal_urbanBANNER.jpg",
            "http://christianbroms.com/images/desc_treesBANNER.jpg",
            "http://christianbroms.com/images/personal_architecture/parch00.jpg",
            "http://christianbroms.com/images/personal_architecture/parch01.jpg",
            "http://christianbroms.com/images/personal_architecture/parch02.jpg",
            "http://christianbroms.com/images/commercial_architecture/arch00.jpg",
            "http://christianbroms.com/images/commercial_architecture/arch01.jpg",
            "http://christianbroms.com/images/commercial_architecture/arch02.jpg",
            "http://christianbroms.com/images/commercial_rendering/rend00.jpg",
            "http://christianbroms.com/images/commercial_rendering/rend01.jpg",
            "http://christianbroms.com/images/commercial_rendering/rend02.jpg",
            "http://christianbroms.com/images/personal_landscape/landscape01.jpg",
            "http://christianbroms.com/images/personal_landscape/landscape02.jpg",
            "http://christianbroms.com/images/personal_landscape/landscape03.jpg",
            "http://christianbroms.com/images/personal_night/night00.jpg",
            "http://christianbroms.com/images/personal_night/night01.jpg",
            "http://christianbroms.com/images/personal_night/night02.jpg",
            "http://christianbroms.com/images/personal_urban/urban00.jpg",
            "http://christianbroms.com/images/personal_urban/urban01.jpg",
            "http://christianbroms.com/images/personal_urban/urban02.jpg"
          );
        }
      }
      else {
        // fast connection, load all site images
        console.log("fast, loading larger");
        preload(
          "http://christianbroms.com/images/commercial_architectureBANNER.jpg",
          "http://christianbroms.com/images/commercial_renderingBANNER.jpg",
          "http://christianbroms.com/images/personal_architectureBANNER.jpg",
        //  "http://christianbroms.com/images/personal_landscapeBANNER.jpg",
          "http://christianbroms.com/images/personal_nightBANNER.jpg",
          "http://christianbroms.com/images/personal_pinholeBANNER.jpg",
          "http://christianbroms.com/images/personal_urbanBANNER.jpg",
          "http://christianbroms.com/images/desc_treesBANNER.jpg",
          "http://christianbroms.com/images/personal_architecture/parch00.jpg",
          "http://christianbroms.com/images/personal_architecture/parch01.jpg",
          "http://christianbroms.com/images/personal_architecture/parch02.jpg",
          "http://christianbroms.com/images/personal_architecture/parch03.jpg",
          "http://christianbroms.com/images/personal_architecture/parch04.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch00.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch01.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch02.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch03.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch04.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch05.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch06.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch07.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch08.jpg",
          "http://christianbroms.com/images/commercial_architecture/arch09.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend00.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend01.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend02.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend03.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend04.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend05.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend06.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend07.jpg",
          "http://christianbroms.com/images/commercial_rendering/rend08.jpg",
          "http://christianbroms.com/images/personal_landscape/landscape01.jpg",
          "http://christianbroms.com/images/personal_landscape/landscape02.jpg",
          "http://christianbroms.com/images/personal_landscape/landscape03.jpg",
          "http://christianbroms.com/images/personal_landscape/landscape04.jpg",
          "http://christianbroms.com/images/personal_landscape/landscape00.jpg",
          "http://christianbroms.com/images/personal_landscape/landscape05.jpg",
          "http://christianbroms.com/images/personal_night/night00.jpg",
          "http://christianbroms.com/images/personal_night/night01.jpg",
          "http://christianbroms.com/images/personal_night/night02.jpg",
          "http://christianbroms.com/images/personal_night/night03.jpg",
          "http://christianbroms.com/images/personal_night/night04.jpg",
          "http://christianbroms.com/images/personal_night/night05.jpg",
          "http://christianbroms.com/images/personal_night/night06.jpg",
          "http://christianbroms.com/images/personal_night/night07.jpg",
          "http://christianbroms.com/images/personal_night/night08.jpg",
          "http://christianbroms.com/images/personal_night/night09.jpg",
          "http://christianbroms.com/images/personal_urban/urban00.jpg",
          "http://christianbroms.com/images/personal_urban/urban01.jpg",
          "http://christianbroms.com/images/personal_urban/urban02.jpg",
          "http://christianbroms.com/images/personal_urban/urban03.jpg",
          "http://christianbroms.com/images/personal_urban/urban04.jpg",
          "http://christianbroms.com/images/personal_urban/urban05.jpg",
          "http://christianbroms.com/images/personal_urban/urban06.jpg",
          "http://christianbroms.com/images/personal_urban/urban07.jpg",
          "http://christianbroms.com/images/personal_urban/urban08.jpg",
          "http://christianbroms.com/images/personal_urban/urban09.jpg",
          "http://christianbroms.com/images/personal_urban/urban10.jpg"
        );
      }
    }
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    function showResults() {
      var duration = (endTime - startTime) / 1000;
      var bitsLoaded = downloadSize * 8;
      var speedBps = (bitsLoaded / duration).toFixed(2);
      var speedKbps = (speedBps / 1024).toFixed(2);
      var speedMBps = (speedKbps / 1024).toFixed(2);
      console.log("connection: " + speedMBps + "MB/sec");
      return speedMBps;
    }
  }
});
