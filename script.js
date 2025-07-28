document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.getElementById('name').value,
        mobile: document.getElementById('mobile').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        job: document.getElementById('job_type').value,
        comment: document.getElementById('comments').value
    };

    fetch('https://script.google.com/macros/s/AKfycbwEbdGYz_rvdiRdhOOseN3vSwZKv-MNKhPQ4MOyq7e4KB_xEVRg8BM8Z0NrDLOPIYh-/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.text();
    })
    .then(result => {
        alert("Form submitted successfully");
        document.getElementById("leadForm").reset();
    })
    .catch(error => {
        alert("Error submitting form. See console.");
        console.error("Submit error:", error);
    });
});
