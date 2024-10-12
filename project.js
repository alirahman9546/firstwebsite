document.getElementById("change-bio").addEventListener("click", function() {
    const newBio = prompt("Enter new bio:", "Web Developer from India. Loves coding and Sports.");
    if (newBio) {
        document.getElementById("bio").textContent = newBio;
    }
});
