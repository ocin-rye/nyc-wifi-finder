function search() {

  var postcode = document.getElementById('postcode').value;
  var query = wifiData.filter(o => o.Postcode === parseInt(postcode));
  var results = query.slice(0, 5);

  // console.log(results)

  if (postcode.toString().length != 5) {
    // clears prior results
    var Container = document.getElementById("results");
    Container.innerHTML = "";

    return resultsQueryHeader.innerHTML = "Please enter a 5 digit postcode.";
  }

  if (results.length < 1) {
    // clears prior results
    var Container = document.getElementById("results");
    Container.innerHTML = "";

    return resultsQueryHeader.innerHTML = "0 results found. Please search another postcode.";
  }

  resultsQueryHeader.innerHTML = "Wifi Hotspots within " + postcode;

  results.map(function(result, index){

    var Container = document.getElementById("results");

    // clears prior result for new search
    if (index === 0) {
      Container.innerHTML = '';
    }

    var resultContainer = document.createElement('div');
    resultContainer.classList.add("result");

    var resultName = document.createElement('h3');
    resultName.innerHTML = result.Name;
    resultName.classList.add("result_name");

    var resultLocation = document.createElement('p');
    resultLocation.innerHTML = 'Location: ' + result.Location_T;
    resultLocation.classList.add("result_location");

    var resultAddress = document.createElement('p');
    resultAddress.innerHTML = 'Address: ' + result.Location + ' ' + result.BoroName + ', ' + result.City;
    resultAddress.classList.add("result_location");

    resultContainer.appendChild(resultName);
    resultContainer.appendChild(resultLocation);
    resultContainer.appendChild(resultAddress);
    Container.appendChild(resultContainer);

  });

}

function postcodeSubmit(e) {
  e.preventDefault();
  search();
}
