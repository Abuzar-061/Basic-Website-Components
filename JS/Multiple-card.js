
    // ---------------Footer address------------------------
    function address() {
      alert("Anarkali Street no 1,Shop Name BF Collections, Samnabad,Faisalabad")
    }
    // ---------------Sign-up-------------------------------
    var email = document.getElementById("email2")
    function signup() {
      if (email.value == "") {
        alert("Please enter your email first before sign-up")
      }
      else {
        alert("Sign-up Successfully")
      }
    }
    // ------------------------------------------------------------------
    function watches() {
      if (confirm("Please confirm your order!")) {
        var email = window.prompt("Enter Your Email")
        alert("Your order is placed " + " we will contact you at your given email " + email);
      }
      else if (!confirm("Your order is canceled")) {

      }
    }
    // ------------------------------------------------------------------

    function shirts() {
      if (confirm("Please confirm your order!")) {
        var email = window.prompt("Enter Your Email")
        alert("Your order is placed " + " we will contact you at your given email " + email);
      }
      else if (!confirm("Your order is canceled")) {

      }
    }
    // ------------------------------------------------------------------

    function shoes() {
      if (confirm("Please confirm your order!")) {
        var email = window.prompt("Enter Your Email")
        alert("Your order is placed " + " we will contact you at your given email " + email);
      }
      else if (!confirm("Your order is canceled")) {

      }
    }
    // ------------------------------------------------------------------

    function trouser() {
      if (confirm("Please confirm your order!")) {
        var email = window.prompt("Enter Your Email")
        alert("Your order is placed " + " we will contact you at your given email " + email);
      }
      else if (!confirm("Your order is canceled")) {

      }
    }
    // ------------------------------------------------------------------

    function sticky() {
      var contact = window.prompt("How Can i help you");
      alert("Your mesage is in queue we will respond you soon at your email");
      var emll = window.prompt("Please enter your email");
      alert("We will contact you soon.Thanks for contacting us ");
    }

  