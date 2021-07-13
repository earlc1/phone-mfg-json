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
    try {
        fetch(url)
            .then(response => response.json())
            // .then(data => console.log(data));     This works
            .then(data => {
                var temp = "";
                data.forEach((itemData) => {
                    temp += "<tr>"
                    temp += "<td>" + itemData.id + "</td>"
                    temp += "<td>" + itemData.manufacturerName + "</td>"
                    temp += "<td>" + itemData.nameOfCEO + "</td>"
                    temp += "<td>" + itemData.headquarters + "</td>"
                    temp += "<td>" + itemData.modifiedOn + "</td>"
                })
                document.getElementById('data').innerHTML = temp
            })
    } catch (error) {
        console.log(error)
    }
}

getRemoteData()