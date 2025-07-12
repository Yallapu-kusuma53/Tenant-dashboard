document.addEventListener('DOMContentLoaded', function() {

    // --- Global Utility Functions ---

    /**
     * Displays a Bootstrap toast notification.
     * @param {string} message - The message to display in the toast.
     * @param {string} type - 'success' or 'error'. Determines the toast's background color and icon.
     */
    window.showToast = function(message, type = 'success') {
        const successToastEl = document.getElementById('successToast');
        const errorToastEl = document.getElementById('errorToast');
        
        let toastEl, messageSpan;

        if (type === 'success') {
            toastEl = successToastEl;
            messageSpan = document.getElementById('successMessage');
        } else if (type === 'error') {
            toastEl = errorToastEl;
            messageSpan = document.getElementById('errorMessage');
        } else {
            console.warn("Invalid toast type. Defaulting to success.");
            toastEl = successToastEl;
            messageSpan = document.getElementById('successMessage');
        }

        if (messageSpan) {
            messageSpan.textContent = message;
        }

        if (toastEl) {
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        } else {
            console.error("Toast element not found for type:", type);
        }
    };

    // --- Event Listeners and Initializations (if any global ones are needed) ---

    // Example: You might have a global logout confirmation here
    // const logoutLink = document.querySelector('.sidebar .nav-item.mt-auto .nav-link[href="login.html"]');
    // if (logoutLink) {
    //     logoutLink.addEventListener('click', function(event) {
    //         if (!confirm('Are you sure you want to log out?')) {
    //             event.preventDefault();
    //         }
    //     });
    // }

    // Any other JavaScript that applies universally to all pages can go here.
    // Page-specific logic (like form submissions, modal population, search filters)
    // should remain within the <script> tags of their respective HTML files
    // or be structured as functions called from those files, after this general script.js.

});