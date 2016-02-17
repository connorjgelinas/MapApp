angular.module('starter.controllers', [])

.controller("MapController", function($scope) {
  google.maps.event.addDomListener(window, "load", function() {
    var myLatLng = new google.maps.LatLng(39.7472641, -75.5469999);
    var mapOptions = {
      center: myLatLng,
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    //Sets map center to current location
    navigator.geolocation.getCurrentPosition(function(pos){
      map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
    });
    $scope.map = map;
  });
});

