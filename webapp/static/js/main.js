// angular.module('PresApp', ['ngMap'])
// .controller('MainController', ['MapService', 'ngMap', function(MapService, ngMap){
//   var self = this;
//   self.initialize = function() {
//     MapService.getCoordinates(function(data) {
//       self.coordinates = data;
//     });
//     ngMap.getMap().then(function(map){
//       self.map = map;
//       console.log(map);
//       console.log(map.getCenter());
//     });
//     self.initMap = function() {
//       console.log("test");
//     };
//   };
//
//   self.initialize();
// }])
// .service('MapService', ['$http', function($http){
//   return {
//     getCoordinates: function(callback) {
//       $http.get('/getpoints')
//       .success(function(data){
//         console.log(data);
//         callback(data);
//       })
//       .error(function(err){
//         console.log(err);
//       });
//     }
//   };
// }]);

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 40.263, lng: -97.523}
  });
}

var map;
$(function(){
  var points = [];
  $.getJSON('/getpoints').done(function(data){
    points = data;

    for(var key in points) {
      var marker = new google.maps.Marker({
        position: {
          lat: points[key].latlng[0],
          lng: points[key].latlng[1]
        },
        map: map,
        title: key,
        label: points[key].count
      });
    }

  });
});
