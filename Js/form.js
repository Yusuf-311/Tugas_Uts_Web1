document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form input values
    const nama = document.getElementById("Nama").value;
    const nim = document.getElementById("NIM").value;
    const jenisKelamin = document.getElementById("Kelamin").value;
    const ttl = document.getElementById("TTL").value;
    const agama = document.getElementById("Agama").value;
    const universitas = document.getElementById("Universitas").value;
    const jurusan = document.getElementById("Jurusan").value;
    const peminatan = document.getElementById("Peminatan").value;
    const cv = document.getElementById("CV").value;

    // Create an object to store the form data
    const formData = {
      nama,
      nim,
      jenisKelamin,
      ttl,
      agama,
      universitas,
      jurusan,
      peminatan,
      cv,
    };

    // Store form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));

    // Optionally, you can reset the form after submission
    form.reset();

    // Alert or do something else to indicate successful submission
    alert("Form submitted and data stored in local storage!");
  });
});
