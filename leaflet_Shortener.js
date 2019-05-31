$.fn.greenify = function () {
    this.css("color", "green");
};

(function ($) {
    var mymap;
    $.fn.addMaps = function (id, token) {
        mymap = L.map(id).setView([0.215825, 99.770569], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: token
        }).addTo(mymap);
        var self = this;
        this.center = function (lat, lon) {
            mymap.panTo(new L.LatLng(lon, lat));
            return self;
        };
        this.marker = function (lat, lon) {
            var marker = L.marker([lon, lat]).addTo(mymap);
            $.fn.color = function (color) {
                if (color == 'blue') {
                    iconUrl = 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/66-512.png';
                }
                else if (color == 'red') {
                    iconUrl = 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/67-512.png';
                }
                else if (color == 'circle_green') {
                    iconUrl = 'https://cdn3.iconfinder.com/data/icons/web-ui-color/128/Marker_green-512.png';
                }
                else if (color == 'circle_red') {
                    iconUrl = 'https://cdn1.iconfinder.com/data/icons/ui-navigation-1/152/marker-512.png';
                }
                var myIcon = L.icon({
                    iconUrl: iconUrl,
                    iconSize: [80, 80]
                });
                marker.setIcon(myIcon);
            }

            $.fn.url = function (url,x,y) {

                if(x==null || y==null)
                {
                    x=80;
                    y=80;
                }
                var myIcon = L.icon({
                    iconUrl: url,
                    iconSize: [x, y]
                });
                marker.setIcon(myIcon);
            }
            // Popup
            $.fn.popup = function (text, status) {
                if (status == "open") {
                    marker.bindPopup(text).openPopup();
                }
                else {
                    marker.bindPopup(text);
                }
            }
            var data;
            $.fn.mapFunction = function (data, property) {
                console.log(data);
                if (data == 'click') {
                    function onMapClick(e) {
                        alert("You clicked the map at " + e.latlng);
                    }
                    mymap.on('click', onMapClick);
                }
                else if (data == 'disabled_drag') {
                    mymap.dragging.disable();
                }
                else if (data == 'locate') {
                    console.log("test");
                    mymap.locate({ setView: true, maxZoom: 20 });
                    if (property == null) {
                        property = 10;
                    }
                    mymap.setZoom(property);

                }
            }   
            // Belum Selesai
            $.fn.polygon=function()
            {
                console.log("polygon");
                var polygon = L.polygon([
                    [
                        99.51416015625,
                        0.24856489413284294
                      ],
                      [
                        99.56497192382812,
                        0.10025019298899991
                      ],
                      [
                        99.80667114257812,
                        0.19363366460992998
                      ],
                      [
                        99.67208862304686,
                        0.3364543651431255
                      ],
                      [
                        99.51416015625,
                        0.24856489413284294
                      ]
                ]).addTo(mymap);
            }

            $.fn.circle=function(lat,lon,radius)
            {
                if(lat==null && lon==null)
                {
                    lon=51.509;
                    lat=-0.08;
                }
                else if (radius==null)
                {
                    radius=500;
                }

                
                var circle = L.circle([lat, lon], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: radius
                }).addTo(mymap);
            }
            return self;
        }
        return this;
    };
}(jQuery));

