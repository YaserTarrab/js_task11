function sayHi(userName, age = "20 +", gender = "NAN") {
    if (!gender) {
      gender = "Unknown";
    }
    return `Hi ${userName}, you are ${age} years old and you are a ${gender}.`;
  }

  function displayMessage() {
    const userName = document.getElementById("userName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;

    // Check if required fields are filled
    if (!userName || !age) {
      document.getElementById("output").textContent = "Please fill in all required fields (name and age).";
      return;
    }

    const message = sayHi(userName, age, gender);
    document.getElementById("output").textContent = message;
  }
