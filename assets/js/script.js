document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = `translateY(-5px) rotate(${Math.random() * 2 - 1}deg)`;
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = `scale(1.2) rotate(${Math.random() * 20 - 10}deg)`;
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    const modal = document.getElementById("modal");
    const navLinks = document.querySelectorAll(".nav-link");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("multi-purpose-form");
    const modalTitle = document.getElementById("modal-title");
    const jobTypeGroup = document.getElementById("job-type-group");
    const complaintTypeGroup = document.getElementById("complaint-type-group");

    navLinks.forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            modal.style.display = "block";
            const formType = this.getAttribute("data-form");
            modalTitle.textContent = this.textContent;
            
            jobTypeGroup.style.display = formType === "work" ? "block" : "none";
            complaintTypeGroup.style.display = formType === "complaints" ? "block" : "none";
        }
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    form.onsubmit = function(e) {
        e.preventDefault();
        console.log("تم إرسال النموذج");
        modal.style.display = "none";
    }
});