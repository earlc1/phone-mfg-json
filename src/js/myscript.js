const fetch = require('node-fetch')
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
    getRemoteData();
});


function getRemoteData() {
// write your code here to fetch data from api.
    fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data));     This works
        .then(data => {
            console.log(data)
            // What object data to write out
            for (var x = 0; data.length; x++) {
                var phoneMfr = data[x]
                console.log(phoneMfr)
                output1.innerHTML += phoneMfr.id + "<br>"
                output2.innerHTML += phoneMfr.headquarters + "<br>"
                output3.innerHTML += phoneMfr.manufacturerName + "<br>"
                output4.innerHTML += phoneMfr.nameOfCEO + "<br>"
                output5.innerHTML += phoneMfr.modifiedOn + "<br>"
            }
            // Where to write object data
            var output1=document.getElementById('output1')
            var output2=document.getElementById('output2')
            var output3=document.getElementById('output3')
            var output4=document.getElementById('output4')
            var output5=document.getElementById('output5')
        }
        )
        .catch(err => console.error(err))
}

getRemoteData()