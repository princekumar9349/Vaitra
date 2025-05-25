// script.js

// ** Token Registration Form Handling **
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const tokenDisplay = document.getElementById('tokenDisplay');
    const tokenNumberSpan = document.getElementById('tokenNumber');
    let registrationCounter = 0; // Initialize counter here

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = registrationForm.querySelector('input[type="text"]');
            const ageInput = registrationForm.querySelector('input[type="number"]');
            const diseaseInput = registrationForm.querySelectorAll('input[type="text"]')[1];
            const doctorSelect = document.getElementById('doctor');
            // const contactInput = registrationForm.querySelector('input[type="tel"]');

            if (nameInput.value && ageInput.value && diseaseInput.value && doctorSelect.value && contactInput.value) {
                const token = generateToken();
                tokenNumberSpan.textContent = token;
                tokenDisplay.style.display = 'block';
                registrationForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    function generateToken() {
        registrationCounter++;
        return registrationCounter.toString();
    }
});

// ** Doctor Search Functionality **
document.addEventListener('DOMContentLoaded', function() {
    const doctorSearchInput = document.getElementById('doctorSearchInput');
    const doctorList = document.querySelector('.doctor-section ul');

    if (doctorSearchInput && doctorList) {
        doctorSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const listItems = doctorList.querySelectorAll('li');

            listItems.forEach(item => {
                const doctorName = item.textContent.toLowerCase();
                if (doctorName.includes(searchTerm)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

// ** Medicine Search Functionality **
document.addEventListener('DOMContentLoaded', function() {
    const medicineSearchInput = document.querySelector('.medicine-section input[type="search"]');
    const medicineTableBody = document.querySelector('.medicine-section table tbody'); // Select the tbody

    if (medicineSearchInput && medicineTableBody) {
        medicineSearchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = medicineTableBody.querySelectorAll('tr'); // Select all tr within the tbody

            rows.forEach(row => {
                const medicineName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
                if (medicineName.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
});

// ** Appointment Form Submission Handling **
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.querySelector('.appointment-container form');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const patientName = appointmentForm.querySelector('#patient-name').value;
            const doctor = appointmentForm.querySelector('#doctor').value;
            const date = appointmentForm.querySelector('#date').value;
            const time = appointmentForm.querySelector('#time').value;
            const contact = appointmentForm.querySelector('#contact').value;

            if (patientName && doctor && date && time && contact) {
                alert(`Appointment booked for ${patientName} with ${doctor} on ${date} at ${time}. Contact number: ${contact}`);
                appointmentForm.reset();
            } else {
                alert('Please fill in all the appointment details.');
            }
        });
    }
});

// ** Contact Form Submission Handling **
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const fullName = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            if (fullName && email && message) {
                alert(`Thank you for your feedback, ${fullName}! We will get back to you at ${email} regarding your message: ${message}`);
                contactForm.reset();
            } else {
                alert('Please fill in all the contact details.');
            }
        });
    }
});