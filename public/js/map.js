      // Map initialization 
      var map = L.map('map').setView([14.0860746, 100.608406], 6);
  
      //osm layer
      var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      });
      osm.addTo(map);
  
      if(!navigator.geolocation) {
          console.log("Your browser doesn't support geolocation feature!")
      } else {
          setInterval(() => {
              navigator.geolocation.getCurrentPosition(getPosition)
          }, 2000);
      }
  
      var marker, circle;
  
      function getPosition(position){
          // console.log(position)
          var lat = position.coords.latitude
          var long = position.coords.longitude
          var accuracy = position.coords.accuracy
  
          if(marker) {
              map.removeLayer(marker)
          }
  
          if(circle) {
              map.removeLayer(circle)
          }
  
          marker = L.marker([lat, long])
          circle = L.circle([lat, long], {radius: accuracy})
  
          var featureGroup = L.featureGroup([marker, circle]).addTo(map)
  
          map.fitBounds(featureGroup.getBounds())
  
          console.log("Your coordinate is: Lat: "+ lat +" Long: "+ long+ " Accuracy: "+ accuracy)
      }

      // function getCoordinatesFromAddress(address) {
      //   var url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;
      
      //   fetch(url)
      //     .then(response => response.json())
      //     .then(data => {
      //       if (data.length > 0) {
      //         var lat = data[0].lat;
      //         var lon = data[0].lon;
      //         console.log("Address Coordinates:", lat, lon);
      
      //         // Set map view to the coordinates
      //         map.setView([lat, lon], 13);
      
      //         // Add a marker at the coordinates
      //         L.marker([lat, lon]).addTo(map);
      //       } else {
      //         console.log("No results found");
      //       }
      //     })
      //     .catch(error => console.error('Error:', error));
      // }
      
      // // Example usage: Get coordinates from an address
      // getCoordinatesFromAddress("<%= address %>");
      