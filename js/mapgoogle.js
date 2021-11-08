let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.0212299, lng:-89.6218066 },
    zoom: 18,
    gestureHandling: 'greedy',
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}