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

      // Create a cell for the 'No' column (row number)
      const noCell = document.createElement("th");
      noCell.setAttribute("scope", "row");
      noCell.textContent = tableBody.childElementCount + 1; // Number rows sequentially
      newRow.appendChild(noCell);

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

      // Create a cell for the delete button
      const deleteCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-btn");
      deleteCell.appendChild(deleteButton);
      newRow.appendChild(deleteCell);

      // Append the new row to the table body
      tableBody.appendChild(newRow);
    }
  }

  // Call function to populate the table on page load
  populateTable();

  // Add event listeners to dynamically added delete buttons
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const row = event.target.closest("tr");
      row.remove(); // Remove the row from the table

      // Here, you can also delete the corresponding data from localStorage based on the row's content
      // For example, retrieve the ID or unique identifier associated with the row and delete it from localStorage
    }
  });
});

// jQuery code to add a class to a button
$(document).ready(function () {
  $(".delete-btn").addClass("btn btn-danger");
});
