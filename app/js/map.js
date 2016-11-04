 
       var markers = [
    {
        "title": 'Cours de Bricolage',
        "lat": '46.1759668',
        "lng": '2.79504659999998',
        "description": 'Je vous apprendrais la menuiserie'
    },
    {
        "title": 'Cours de Cuisine',
        "lat": '45.0883595',
        "lng": '3.82652380000002',
        "description": 'Couscous marocain'
    },
    {
        "title": 'Maths',
        "lat": '47.9542149',
        "lng": '2.81203529999993',
        "description": 'Propose cours de maths'
    },
    {
        "title": 'Anglais',
        "lat": '45.979006',
        "lng": '2.53388300000001',
        "description": 'Discutons en anglais autour dun teatime'
    },
    {
        "title": 'Mecanique',
        "lat": '46.2147067',
        "lng": '2.91062020000004',
        "description": 'Vous apprendrez à changer une courroie de distribution'
    }
    ];
    window.onload = function () {
        LoadMap();
    }
    function LoadMap() {
        var mapOptions = {
            center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
        
       
        //Create and open InfoWindow.
        var infoWindow = new google.maps.InfoWindow();
       
        
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: data.title
                
            });
 
            //Attach click event to the marker.
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    //Wrap the content inside an HTML DIV in order to set height and width of InfoWindow.
                    infoWindow.setContent("<div style = 'width:200px;min-height:30px;text-align:left'><h3 class='black'>"+ data.title +"</h3>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
    }
