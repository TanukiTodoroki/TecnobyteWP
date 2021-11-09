let map;

function initMap() {
  const LatLngTecnobyte = { lng: -89.6216101, lat: 21.0212196 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 21.0212299, lng:-89.6218066 },
    zoom: 18,
    gestureHandling: 'greedy',
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  new google.maps.Marker({
    position: LatLngTecnobyte,
    map,
    title: "Tecnobyte Península",
  });
}