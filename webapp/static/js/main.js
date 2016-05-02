function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: 40.263, lng: -97.523}
  });
}

var map;
$(function(){
  var markers = [];
  function makeRequest(sentiment, candidate) {
    var points = [];
    var query = '/' + sentiment + '/' + candidate;
    $.getJSON(query).done(function(data){
      points = data;

      for(var key in points) {
        var marker = new google.maps.Marker({
          position: {
            lat: points[key].coordinates[0],
            lng: points[key].coordinates[1]
          },
          map: map
        });
        markers.push(marker);
      }
    });
  }

  function clearMap() {
    for (var i = 0; i < markers.length; i++ ) {
      markers[i].setMap(null);
    }
  }

  makeRequest('POS', 'Clinton');

  $("input:radio[name=candidate]").click(function(){
    clearMap();
    var candidate = $(this).val();
    var sentiment = $("input:radio[name=sentiment]").val();
    markers = [];
    makeRequest(sentiment, candidate);
  });

  $("input:radio[name=sentiment]").click(function(){
    clearMap();
    var sentiment = $(this).val();
    var candidate = $("input:radio[name=candidate]").val();
    markers = [];
    makeRequest(sentiment, candidate);
  });

});
