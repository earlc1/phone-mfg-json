const fetch = require('node-fetch')
const url = 'https://www.justcode.com/dataservice/api/phoneManufacturer/list'

/*
PURPOSE;
    - Get data for phoneManufacturer records from server in JSON format
    - GET URL
        https://www.justcode.com/dataservice/api/phoneManufacturer/list
    - Response data format: JSON
*/

$(document).ready(function() {
    getRemoteData();
});
function getRemoteData() {
// write your code here to fetch data from api.
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
}

getRemoteData()