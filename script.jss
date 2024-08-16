const ipAddressElement = document.getElementById('ip-address');
const countryElement = document.getElementById('country');
const regionElement = document.getElementById('region');
const cityElement = document.getElementById('city');
const latitudeElement = document.getElementById('latitude');
const longitudeElement = document.getElementById('longitude');
const ispElement = document.getElementById('isp');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', searchIP);

getIP();

function getIP() {
    fetch('http://ip-api.com/json/')
        .then(response => response.json())
        .then(data => {
            updateIPInfo(data);
        })
        .catch(error => {
            console.error(error);
            alert('Error: Unable to retrieve IP information');
        });
}

function searchIP() {
    const query = searchInput.value.trim();
    if (query) {
        fetch(http://ip-api.com/json/${query})
            .then(response => response.json())
            .then(data => {
                updateIPInfo(data);
            })
            .catch(error => {
                console.error(error);
                alert('Error: Invalid IP address or unable to retrieve IP information');
            });
    } else {
        alert('Error: Please enter a valid IP address');
    }
}

function updateIPInfo(data) {
    ipAddressElement.textContent = IP Address: ${data.query};
    country
