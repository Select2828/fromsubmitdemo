window.addEventListener('load', () => {
    if(localStorage.getItem("TYPE") == "Landingpage")
    {
        document.getElementById('IntroTitel').innerHTML = "Plan your website"
        document.getElementById('BasePrice').innerHTML = "- Baseprice ~ 250$"
        document.getElementById('Design').style.opacity = 1;
        document.getElementById('Logo').style.display = "none";
        document.getElementById('Video').style.opacity = 1;
    }
})