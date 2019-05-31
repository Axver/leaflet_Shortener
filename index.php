<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="leaflet_Shortener.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin="" />
    <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
    <style>
    #mapid { height: 480px; }
    </style>
    <title>Jquery Plugin</title>
</head>

<body>

    <a href="#">Test Link</a>
    <a href="#">Test Link</a>

    <div id="mapid"></div>

    <script>
        var token = 'pk.eyJ1IjoiYXh2ZXI3IiwiYSI6ImNqZjZ0NXk2NjA4NzI0MG44djVyOXU2cXAifQ.N-pJV3Uw0nOhjvLz9E4Zuw';
        // Adding Maps
        maps=$("#mapid").addMaps('mapid', token);
        // Change Maps Center
        maps.center(99.770569,0.215825);
        // Adding Marker
        marker=maps.marker(99.770569,0.215825);
        // Adding Marker Colors
        marker.color('blue');
        marker.popup("<b>Test Popup</b>");
        marker_1=maps.marker(99.780569,0.215825);
        marker_1.color('red');
        marker_1=maps.marker(99.780569,0.226825);
        marker_1.color('circle_green');
        marker_1.popup("text","open");
        // Adding Click Function
        // maps.mapFunction("click");
        // Disbaled Drag Function
        // maps.mapFunction("disabled_drag");
        maps.mapFunction("locate",16);

        // marker_2=maps.marker(99.770569,0.215825);
        // Icon Using URL Custom Icon
        // marker_2.url("https://cdn1.iconfinder.com/data/icons/rafif-rounded-glyph-vol-3/512/vol.3_pin-512.png");
        
        // Adding size for marker
        // marker_2.url("https://cdn1.iconfinder.com/data/icons/rafif-rounded-glyph-vol-3/512/vol.3_pin-512.png",40,40);
    
        maps.polygon();
        circle=maps.circle(0.205825,98.770569);
        
    </script>

</body>

</html>