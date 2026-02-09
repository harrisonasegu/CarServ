  // ======================================
        // function for dynamic date & time updates
        function updateDateTime() {
            const now = new Date();
            // Format date
            const options = { year: 'numeric' };
            document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);
        }

        // Update immediately
        updateDateTime();