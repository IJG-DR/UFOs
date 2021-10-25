
//////////////////////////////////////////////////////////////////////////////////////
// MODULE 11 - Challenge
//////////////////////////////////////////////////////////////////////////////////////

// import the data from data.js
const tableData = data;

// get table references:
// Reference the HTML table using d3.
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for 
// the <tbody> tags in the HTML
var tbody = d3.select("tbody");



//////////////////////////////////////////////////////////////////////////////////////
// Create a function to build the data table
//////////////////////////////////////////////////////////////////////////////////////

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
    });
  });
}
// END OF FUNCTION
//////////////////////////////////////////////////////////////////////////////////////



// 1. Create a variable to keep track of all the filters as an object.

var filters = {};



//////////////////////////////////////////////////////////////////////////////////////
// Create a function to update the filters
//////////////////////////////////////////////////////////////////////////////////////

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changedElement.attr("id");
    console.log(filterId);
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId] = elementValue;
    }
    else {
      delete filters[filterId];
    }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
}
// END OF FUNCTION
//////////////////////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////
// Create a function to apply the filters to the table
//////////////////////////////////////////////////////////////////////////////////////

// 7. Use this function to filter the table when data is entered.
function filterTable() {

  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;

  // 9. Loop through all of the filters and keep any data that
  // matches the filter values.
  // Use the Object.entries method on the 'filters' list to get the keys, 
  // run a forEach on each key/value pair, and use nested arrow functions to 
  // parse over the data for each row where the key and value match.
  Object.entries(filters).forEach(([key,value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
    });

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}
// END OF FUNCTION  
//////////////////////////////////////////////////////////////////////////////////////




// 2. Attach an event to listen for changes to each filter and if so, 
// calls on the updateFilters function created in step #3 above.
d3.selectAll("input").on("change", updateFilters);



// Build the table when the page loads
buildTable(tableData);
