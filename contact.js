// Include this script tag in your HTML to use EmailJS
// <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>

document.addEventListener("DOMContentLoaded", () => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace YOUR_PUBLIC_KEY with your EmailJS public key

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        };

        // Validate the inputs (optional)
        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            alert("Please fill out all fields.");
            return;SSS
        }

        // Send email using EmailJS
        emailjs
            .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
            .then(
                (response) => {
                    alert("Message sent successfully!");
                    contactForm.reset(); // Clear the form after successful submission
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.error("EmailJS error:", error);
                }
            );
    });
});
