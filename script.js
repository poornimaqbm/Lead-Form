document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default form submission

    const formData = {
      name: document.getElementById('name').value,
      mobile: document.getElementById('mobile').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      job: document.getElementById('job_type').value,  // fixed here
      comment: document.getElementById('comments').value  // fixed here
    };

    fetch('https://script.google.com/macros/s/AKfycbwEbdGYz_rvdiRdhOOseN3vSwZKv-MNKhPQ4MOyq7e4KB_xEVRg8BM8Z0NrDLOPIYh-/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(result => {
      alert("Form submitted successfully!");
      document.getElementById("leadForm").reset();
    })
    .catch(error => {
      alert("Error submitting form.");
      console.error(error);
    });
  });

