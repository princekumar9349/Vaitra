document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            // After successful registration
            try {
                // (Agar aapka register API call karwana hai to yahan karo)
                // For now directly predicting after form submit.

                const response = await fetch('/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        num_patients: 5, // Default maan lo 5 patients
                        avg_consult_time: 15, // Default 15 mins consult time
                        peak_hour: 1, // Peak hour factor 1 (normal)
                        urgency_level: 2 // Urgency 2 (medium)
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                document.getElementById('predictionResult').innerHTML = `
                    <p><strong>Total Consultation Time:</strong> ${result.total_consult_time} minutes</p>
                    <p><strong>Traffic Risk:</strong> ${result.traffic_risk}</p>
                    <p><strong>Message:</strong> ${result.message}</p>
                `;
            } catch (error) {
                console.error('Error:', error);
                alert('Prediction failed! Please try again.');
            }

            // Reset the form after registration and prediction (optional)
            registrationForm.reset();
        });
    }
});
