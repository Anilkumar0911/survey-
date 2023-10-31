    function submitForm() {
      // Get form values
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const dob = document.getElementById("dob").value;
      const country = document.getElementById("country").value;
      const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value).join(", ");
      const profession = document.getElementById("profession").value;
      const email = document.getElementById("email").value;
      const mobile = document.getElementById("mobile").value;

      // Display a popup with the form values
      alert("Survey Form Data:\n\n" +
        "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Date of Birth: " + dob + "\n" +
        "Country: " + country + "\n" +
        "Gender: " + gender + "\n" +
        "Profession: " + profession + "\n" +
        "Email: " + email + "\n" +
        "Mobile Number: " + mobile);

      // Reset the form
      document.getElementById("surveyForm").reset();
    }