document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            alert(`You clicked on ${button.textContent.trim()}`);

        });

    });

});

 