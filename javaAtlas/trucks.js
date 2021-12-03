mapboxgl.accessToken =
  "pk.eyJ1IjoiY3VybXVkZ2VvbnBoZCIsImEiOiJja3VxNjkxN2k0c2w0MnptbjU0N242cHFzIn0.DI3yxzJz-CO25QvNLXESOQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [-74.5, 40], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
