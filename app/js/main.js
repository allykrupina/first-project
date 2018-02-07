function initMap() {
  var uluru = {lat: 42.505, lng: -70.906};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  var contentString =
      '<div id="map-content">'+
          '<p class="title">Company.com</p>'+
          '<p class="description">xyz Street</p>'+
          '<p class="description">London, UK 13214</p>'+
      '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });
  infowindow.open(map,marker);
}
$('.menu-button').click(function(){
    $('.menu-button, .menu').toggleClass('open');
});
