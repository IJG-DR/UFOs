
///////////////////////////////////////////////////
// MODULE 11.2.4 - Storyboarding
///////////////////////////////////////////////////

// Align the Code

// import the data from data.js
const tableData = data;

// Reference the HTML table using d3.
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for 
// the <tbody> tags in the HTML
var tbody = d3.select("tbody");




///////////////////////////////////////////////////
// MODULE 11.5.1 - Introduction to Dynamic Tables
// MODULE 11.5.2 - Add forEach to Your Table
///////////////////////////////////////////////////


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




///////////////////////////////////////////////////
// MODULE 11.5.3 - Add Filters 
// MODULE 11.5.4 - Use the "If" Statement
///////////////////////////////////////////////////


// Create a function to filter the data based on user input
function handleClick() {
    
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      // using the .filter() method. The triple = means that the data
      // has to match not only the value but also the data type.
      filteredData = filteredData.filter(row => row.datetime === date);
    }
  
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}



// Attach an event to listen for the form button and call the filter function
d3.selectAll("#filter-btn").on("click", handleClick);



// Build the table when the page loads by calling the buildTable function
buildTable(tableData);