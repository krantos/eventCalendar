window.addEventListener("load", function () {

getDataFromTheServer();
});

function eventoDataHandler() {
  
 function getEventosPerDay(day) {

  }

  function printData() {
    console.log(this.data);
  }

}

function getDataFromTheServer() {
    var responsedData;
    var requestURL = 'http://localhost/eventcalendar/datos.php';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
      responsedData = request.response;
      populateData(responsedData);
    }
  }

    function populateData(jsonObj) {
    console.log(jsonObj);
  }
