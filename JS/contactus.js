

      var x = document.getElementById('email');
      var y = document.getElementById('textarea');
      function formvalidation() {
         if (x.value == "" || y.value == "") {
            alert("Please enter all input");
         }
         else {
            alert("" + x.value);
         }
      }
   