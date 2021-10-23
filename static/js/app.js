//////////////////////////////////
// MODULE 11.2.4 - Storyboarding
//////////////////////////////////

// Align the Code

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3.
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for 
// the <tbody> tags in the HTML
var tbody = d3.select("tbody");


///////////////////////////////////
// MODULE 11.5.1 - Introduction to Dynamic Tables
///////////////////////////////////


//  Create a function to build the data table
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }