function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longtitude;
}
function onGeoError() {
    alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
