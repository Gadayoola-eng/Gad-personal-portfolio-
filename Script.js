const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function () {
    alert("Hi, I am Ayoola, Thanks for visiting my page! Feel free to connect with me on social media 😊");
});
window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(element => {
        element.classList.add("show");
    });
});