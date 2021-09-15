//codigo  del google maps  xD//

function iniciarMap() {
    var coord = { lat: -33.4488897, lng: -70.6692655 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}