const url = 'https://www.justcode.com/dataservice/api/phoneManufacturer/list'

/*
PURPOSE;
    - Get data for phoneManufacturer records from server in JSON format
    - GET URL
        https://www.justcode.com/dataservice/api/phoneManufacturer/list
    - Response data format: JSON
*/


// Makes function available after document is loaded
$(document).ready(function() {
    console.log("document ready")
    getRemoteData();
});

var table0 = document.getElementById('mytable')

function getRemoteData() {
// write your code here to fetch data from api.
    fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data));     This works
        .then(data => {
            for (var x=0; x<data.length; x++) {
                var phoneMfr = data[x]
                console.log(phoneMfr)
                table0.innerHTML += `<tr><td>${phoneMfr.id}</td><td>${phoneMfr.manufacturerName}</td><td>${phoneMfr.nameOfCEO}</td><td>${phoneMfr.headquarters}</td><td>${phoneMfr.modifiedOn}</td></tr>`
                }
            }
        )
        .catch(err => console.error(err))
}
