// function initGeolocation() {
//   const message = document.getElementById("message");

//   message.textContent = "Fetching location...";

//   if (navigator.geolocation) {

//     navigator.geolocation.getCurrentPosition(
//       async function (position) {
//         try {
//           const lat = position.coords.latitude;
//           const lon = position.coords.longitude;

//           const response = await fetch(
//             `https://maps.app.goo.gl/tC7H9wWyMPfXC9iDA`
//           );

//           const data = await response.json();

//           const city =
//             data.address.city ||
//             data.address.town ||
//             data.address.village ||
//             "your area";

//           message.textContent = `📍 You are browsing from ${city}`;

//         } catch (error) {
//           message.textContent = "Error fetching location name";
//           console.error(error);
//         }
//       },

//       function (error) {
//         switch (error.code) {
//           case error.PERMISSION_DENIED:
//             message.textContent = "Permission denied ❌";
//             break;
//           case error.POSITION_UNAVAILABLE:
//             message.textContent = "Location unavailable ❌";
//             break;
//           case error.TIMEOUT:
//             message.textContent = "Request timed out ⏳";
//             break;
//           default:
//             message.textContent = "Unknown error ❌";
//         }
//       }
//     );

//   } else {
//     message.textContent = "Geolocation not supported";
//   }
// }
// function initGeolocation() {
// const out = document.getElementById("out");

// function explain(code){
//     if(code === 1) return "Permission denied";
//     if(code === 2) return "Position unavailable";
//     if(code === 3) return "Request Timed out";
//     return "Unknown error";
// }
// document.getElementById("locateBtn").addEventListener("click",function(){
//     if(!navigator.geolocation){
//         out.textContent = "Geolocation is not supported in this browser";
//     }
//     out.textContent = "Requesting current location...";
//     navigator.geolocation.getCurrentPosition(
//     function(position){
//         const data = {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             accuracy: position.coords.accuracy
//         };
//         console.log(data);
//         out.textContent = JSON.stringify(data,null,2);
//     },
//     function(error){
//         out.textContent = "Error code:"+error.code+explain(error.code)+ "Message: "+error.message;
//     },
//     {enableHighAccuracy: true,timeout:10000,maximumAge:0}
// )
// });
// }
function initGeolocation() {
  const message = document.getElementById("message");

  message.textContent = "Fetching location...";

  if (!navigator.geolocation) {
    message.textContent = "Geolocation not supported ❌";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        // Reliable API (works consistently)
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
        );

        if (!res.ok) throw new Error("API failed");

        const data = await res.json();

        const city =
          data.city ||
          data.locality ||
          data.principalSubdivision ||
          "your area";

        message.textContent = `📍 You are browsing from ${city}`;
      } catch (err) {
        console.error(err);
        message.textContent = `📍 Latitude: ${lat.toFixed(4)}, Longitude: ${lon.toFixed(4)}`;
      }
    },

    (error) => {
      if (error.code === 1) {
        message.textContent = "Permission denied ❌";
      } else if (error.code === 2) {
        message.textContent = "Location unavailable ❌";
      } else if (error.code === 3) {
        message.textContent = "Request timeout ⏳";
      } else {
        message.textContent = "Something went wrong ❌";
      }
    }
  );
}