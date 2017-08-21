function addMarkerWithTimeout(position, html, timeout) {
  window.setTimeout(function() {
    var data = position;
    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: data.name,
      animation: google.maps.Animation.DROP
    });
    markers.push(marker);
    var infowindow = new google.maps.InfoWindow({
      content: html,
    });
    google.maps.event.addListener(marker, 'click', (function(marker, html) {
      return function() {
        if (this.getMap()) {
          infowindow.open(this.getMap(), this);
        } else {
          infowindow.close()
        }
      }
    })(marker, html));
  }, timeout);
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {
      lat: 52.520,
      lng: 13.410
    }
  });
}


function drop() {
  clearMarkers();
  for (var i = 0; i < neighborhoods.length; i++) {
    if (i == 0) {
      html = contentString
    } else {
      html = "html " + i
    }
    addMarkerWithTimeout(neighborhoods[i], html, i * 200);
  }
}
var contentString = '<div id="content">' +
  '<div id="siteNotice">' +
  '</div>' +
  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
  '<div id="bodyContent">' +
  '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  'sandstone rock formation in the southern part of the ' +
  'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
  'south west of the nearest large town, Alice Springs; 450&#160;km ' +
  '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
  'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
  'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
  'Aboriginal people of the area. It has many springs, waterholes, ' +
  'rock caves and ancient paintings. Uluru is listed as a World ' +
  'Heritage Site.</p>' +
  '<p>Attribution: Uluru, <a            href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
  '(last visited June 22, 2009).</p>' +
  '</div>' +
  '</div>';d


function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}
var neighborhoods = [{
  lat: 52.511,
  lng: 13.447,
  name: "2007"
}, {
  lat: 52.549,
  lng: 13.422,
  name: "2008"
}, {
  lat: 52.497,
  lng: 13.396,
  name: "2009"
}, {
  lat: 52.517,
  lng: 13.394,
  name: "2010"
}];

var citymap = [
    {
        lat: 40.90532,
        lon: -73.12556,
        department: 'Department of Electrical & Computer Engineering',
        title: 'Stony Brook University'
    },
    {
        lat: 35.473160,
        lon: 139.588525,
        department: ' Department of Physics, Electrical and Computer Engineering',
        title: 'Yokohama National University'
    },
    {
        lat: 35.153498,
        lon: 136.967570,
        department: ' Department of Physics, Electrical and Computer Engineering',
        title: 'Nagoya University'
    },
    {
        lat: -33.928312,
        lon: 18.866515,
        department: 'Department of Electrical & Electronic Engineering',
        title: 'Stellenbosch University'
    }
];

var markers = [];
var map;
google.maps.event.addDomListener(window, 'load', initMap);
