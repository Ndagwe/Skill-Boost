document.addEventListener("DOMContentLoaded", () => {
    // Highlight hovered navigation links
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    // Search button functionality
    document.querySelector(".search-bar button").addEventListener("click", () => {
        let course = document.querySelector(".search-bar select").value;
        if (course !== "Choose a Course") {
            alert(`Searching for: ${course}`);
        } else {
            alert("Please select a course.");
        }
    });

    // View more buttons
    document.querySelectorAll(".view-more").forEach(button => {
        button.addEventListener("click", () => {
            alert("More information coming soon!");
        });
    });

    // Newsletter subscription
    document.querySelector(".newsletter button").addEventListener("click", () => {
        let email = document.querySelector(".newsletter input").value;
        if (email) {
            alert("Thank you for subscribing!");
            document.querySelector(".newsletter input").value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });
});





