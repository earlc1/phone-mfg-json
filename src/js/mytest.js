const fetch = require('node-fetch')

const url = 'https://www.justcode.com/dataservice/api/phoneManufacturer/list'

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

