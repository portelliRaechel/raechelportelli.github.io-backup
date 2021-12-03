var map = new mapboxgl.Map({
  container: "map", // HTML container id
  style: "mapbox://styles/mapbox/streets-v9", // style URL
  center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
  zoom: 13,
});

var marker = new mapboxgl.Marker()
  .setLngLat([-21.9270884, 64.1436456])
  .addTo(map);

var popup = new mapboxgl.Popup().setHTML(
  "<h3>Reykjavik Roasters</h3><p>A good coffee shop</p>"
);

map.on("load", function () {
  map.addSource("mapbox-dem", {
    type: "raster-dem",
    url: "mapbox://mapbox.mapbox-terrain-dem-v1",
  });
  map.setTerrain({ source: "mapbox-dem" });
});
