document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const message = document.getElementById('registrationMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        const name = formData.get('name');
        const age = formData.get('age');
        const address = formData.get('address');

        // Custom validation logic
        if (age < 18) {
            message.textContent = "You must be at least 18 years old to register for voting.";
        } else {
            message.textContent = `Thank you, ${name}, for registering to vote. We will process your registration soon.`;
            form.reset(); // Clear form fields after submission
        }
    });
});
