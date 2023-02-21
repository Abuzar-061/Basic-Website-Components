
    //  <!-- ----------------------------For Toggle Button--------------------------------- -->
    var chk = document.getElementById('chk');

    chk.addEventListener('change', () => {
      // <!----The classList. toggle() method supports adding and removing CSS classes whether they exist or not
      document.body.classList.toggle('dark');
    });
    //  <!-- ----------------------------Service Contact--------------------------------- -->
    function contact() {
      var name = window.prompt("What is your name...")
      var eml = window.prompt("Write your email ...")
      var help = window.prompt("Hi " + name + " My name is Edward Phillips, How Can i help You.. ");
      alert(" Your request " + help + " is processing we will contact you soon " + eml);
    }
    //  <!-- ----------------------------Service Contact--------------------------------- -->
    function contact1() {
      var name = window.prompt("What is your name...")
      var eml = window.prompt("Write your email ...")
      var help = window.prompt("Hi " + name + " ...! My name is Kate Perry, How Can i help You.. ");
      alert(" Your request " + help + " is processing we will contact you soon at your email " + eml);
    }
    //  <!-- ----------------------------Service Contact--------------------------------- -->
    function contact2() {
      var name = window.prompt("What is your name...")
      var eml = window.prompt("Write your email ...")
      var help = window.prompt("Hi " + name + " ...! My name is Allen, How Can i help You.. ");
      alert(" Your request " + help + " is processing we will contact you soon at your email " + eml);
    }
    //  <!-- ----------------------------Sticky function--------------------------------- -->
    function sticky() {
      var contact = window.prompt("How can i help you");
      alert("Your mesage is in queue we will respond you soon at your email");
      var emll = window.prompt("Please enter your email");
      alert("We will contact you soon.Thanks for contacting us ");
    }
    //  <!-- ----------------------------Contact Us Form--------------------------------- -->
    var nam = document.getElementById("email");
    var text = document.getElementById("text");
    function abuzar() {
      if (nam.value == "", text.value == "") {
        alert("Please input before submit");
      }
      else {
        document.getElementById("form").innerHTML = "Submitted Successfully!";
      }
    }
    //  <!-- ----------------------------Footer Sign Up Button--------------------------------- -->
    var email = document.getElementById("email2")
    function signup() {
      if (email.value == "") {
        alert("Please enter your email first before sign-up")
      }
      else {
        alert("Sign-up Successfully")
      }
    }
    //  <!-- ----------------------------Select Option Validation--------------------------------- -->

    const form = document.querySelector("form");
    const select = document.querySelector("#color");
    const error = document.querySelector("#error");
    var innerr = document.querySelector("#inner");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (select.value === "") {
        error.textContent = "Please select a color";
        error.style.display = "block";
      } else {
        error.style.display = "none";
        console.log("Selected Brand: " + select.value);
      }
    });

  