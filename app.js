/****
   SIT209 - Software Engineering 2: Developing IoT Applications
   Exercise:       Topic 3 Pass Task
   Student Name:   Ereena Bagga
   Student ID:     2010993040 
 ****/

// Load the navbar.html file anytime there is a div mounted to the DOM with the id navbar
$('#navbar').load('navbar.html');

// Load the footer.html file anytime there is a div mounted to the DOM with the id footer
$('#footer').load('footer.html');

// Array declaration. 
// Gets the item devices from local storage, converts it into a JSON object, and stores it in the array devices
const devices = JSON.parse(localStorage.getItem('devices')) || [];

// Iterate over the array devices and create a new row in the table for each object
devices.forEach(function (device) {
  $('#devices tbody').append(`
    <tr>
      <td>${device.user}</td>
      <td>${device.name}</td>
    </tr>`
  );
});

// Add a new device to the list of devices on button click
$('#add-device').on('click', function () {
  const user = $('#user').val();
  const name = $('#name').val();
  devices.push({ user, name });
  localStorage.setItem('devices', JSON.stringify(devices));
  location.href = '/';
});