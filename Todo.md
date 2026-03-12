- Word mark Hicom <>Glow<>✅
- In my waitlist page, I want a stylyzed popup to show once a user has registered his or herself and then to clear the form fields back to their default empty state.✅
- loading state✅
- sending default mail to customers and providers


index.html:
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your Public Key
    })();
</script>

index.js:
document.addEventListener('DOMContentLoaded', () => {
    const waitlistForm = document.getElementById('waitlist-form');

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            submitted = true;

            // 1. Get the values from the form
            const formData = new FormData(waitlistForm);
            const userType = formData.get('entry.1065046570'); // The name attribute of your select
            const userEmail = formData.get('entry.1045781291'); // The name attribute of your email input

            // 2. Determine which template to send
            let templateId = "";
            if (userType === "customer") {
                templateId = "TEMPLATE_ID_CUSTOMER";
            } else if (userType === "provider") {
                templateId = "TEMPLATE_ID_PROVIDER";
            }

            // 3. Send the email via EmailJS
            const templateParams = {
                to_email: userEmail,
                user_type: userType,
                reply_to: 'support@hicomglow.com'
            };

            emailjs.send('YOUR_SERVICE_ID', templateId, templateParams)
                .then(() => {
                    console.log('Auto-reply sent successfully!');
                }, (err) => {
                    console.error('Email failed to send...', err);
                });

            // The form continues to submit to the hidden iframe as usual
            // UI Loading state logic follows...
        });
    }
});
