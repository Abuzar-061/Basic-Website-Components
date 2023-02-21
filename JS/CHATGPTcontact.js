
        // Get a reference to the form
        var form = document.getElementById("my-form");

        // Add an event listener to the form's submit event
        form.addEventListener("submit", function (event) {
            // Prevent the form from being submitted
            event.preventDefault();

            // Get the form's input elements
            var name = document.getElementById("name");
            var email = document.getElementById("email");
            var password = document.getElementById("password");

            // Check if the inputs are empty
            if (!name.value || !email.value || !password.value) {
                alert("Please fill out all fields");
                return;
            }

            // Check if the email is valid
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
                alert("Please enter a valid email address");
                return;
            }

            // Check if the password is strong
            if (password.value.length < 8) {
                alert("Password should be at least 8 characters long");
                return;
            }

            // If the form is valid, submit it
            form.submit();
        });

