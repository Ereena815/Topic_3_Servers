/****
   SIT209 - Software Engineering 2: Developing IoT Applications
   Exercise:       Topic 3 Pass Task
   Student Name:   Ereena Bagga
   Student ID:     2010993040 
 ****/

// Finds an HTML element (with id="date"), and changes the element content (innerHTML) to the current year
// Used in footer
const d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();