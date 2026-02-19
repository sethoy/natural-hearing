document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.getElementById("current-date");
    const today = new Date();

    // Formatting date to MM/DD/YYYY
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;
    
    // Injecting the date into the HTML
    dateElement.textContent = formattedDate;
});