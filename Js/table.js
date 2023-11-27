document.addEventListener("DOMContentLoaded", function () {
  // Function to populate table with form data from local storage
  function populateTable() {
    // Retrieve form data from local storage
    const storedFormData = localStorage.getItem("formData");

    if (storedFormData) {
      // Parse JSON data back into an object
      const formData = JSON.parse(storedFormData);

      // Get table body
      const tableBody = document.querySelector("#formDataTable tbody");

      // Create a new row for the form data
      const newRow = document.createElement("tr");

      // Create a cell for each field
      const fields = [
        "nama",
        "nim",
        "jenisKelamin",
        "ttl",
        "agama",
        "universitas",
        "jurusan",
        "peminatan",
        "cv",
      ];

      fields.forEach((field) => {
        const cell = document.createElement("td");
        cell.textContent = formData[field];
        newRow.appendChild(cell);
      });

      // Create a cell for the 'No' column (row number)
      const noCell = document.createElement("th");
      noCell.setAttribute("scope", "row");
      noCell.textContent = tableBody.childElementCount + 1; // Number rows sequentially
      newRow.insertBefore(noCell, newRow.firstChild); // Insert as first cell

      // Append the new row to the table body
      tableBody.appendChild(newRow);
    }
  }

  // Call function to populate the table on page load
  populateTable();
});
