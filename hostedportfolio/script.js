// 1. Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 2. Skill Bar Animation (Corrected)
const skillBar = document.querySelector('.skill');
let skillBarAnimated = false;

// Add scroll event listener *outside* the loop (only once)
window.addEventListener('scroll', () => {
    const skillBarPosition = skillBar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillBarPosition < windowHeight * 0.75 && !skillBarAnimated) {
        skillBar.style.width = '100%';
        skillBar.style.transition = 'width 1s ease-out';
        skillBarAnimated = true;
    }
});

// 3. Timeline Item Animations (Corrected)
const timelineItems = document.querySelectorAll('.timeline-item');

// Add scroll event listener *outside* the loop (only once)
window.addEventListener('scroll', () => {
    timelineItems.forEach(item => { // Now loop inside the scroll listener
        const itemPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemPosition < windowHeight * 0.8) {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        } else { // Optional: Reset if item scrolls out of view
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'none'; // Remove transition to prevent flickering
        }
    });
});

// 4. Header Text Animation
const headerH1 = document.querySelector('header h1');
const headerP = document.querySelector('header p');

window.addEventListener('load', () => {
    headerH1.style.opacity = 1;
    headerP.style.opacity = 1;
    headerH1.style.transition = 'opacity 1s ease';
    headerP.style.transition = 'opacity 1s ease 0.5s';
});

// 5. Footer Social Icons Animation
const socialIcons = document.querySelectorAll('.social-links a');

socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
        icon.style.transition = 'transform 0.3s ease';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
        icon.style.transition = 'transform 0.3s ease';
    });
});

// JavaScript to detect when items come into view and add a class to animate them
document.querySelectorAll("#certifications li").forEach(item => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        } else {
          entry.target.classList.remove("in-view");
        }
      });
    });
    
    observer.observe(item);
});

