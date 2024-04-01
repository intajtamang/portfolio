// JavaScript to toggle display on button click for about
const displayBtn = document.getElementById('displayBtn');
const myDisplay = document.getElementById('myDisplay');
const closeBtn = document.getElementById('closeBtn');

displayBtn.addEventListener('click', function() {
    myDisplay.style.display = 'block';
    skillsDisplay.style.display = 'none'; // Hide skills display if it's open
    educationDisplay.style.display = 'none'; // Hide education display if it's open
    projectsDisplay.style.display = 'none';
});

closeBtn.addEventListener('click', function() {
    myDisplay.style.display = 'none';
});

const skillsBtn = document.getElementById('skillsBtn');
const skillsDisplay = document.getElementById('skillsDisplay');
const closeSkillsBtn = document.getElementById('closeSkillsBtn');

skillsBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    skillsDisplay.style.display = 'block';
    myDisplay.style.display = 'none'; // Hide about display if it's open
    educationDisplay.style.display = 'none'; // Hide education display if it's open
    projectsDisplay.style.display = 'none';
});

closeSkillsBtn.addEventListener('click', function() {
    skillsDisplay.style.display = 'none';
});

const educationBtn = document.getElementById('educationBtn');
const educationDisplay = document.getElementById('educationDisplay');
const closeEducationBtn = document.getElementById('closeEducationBtn');

educationBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    educationDisplay.style.display = 'block';
    myDisplay.style.display = 'none'; // Hide about display if it's open
    skillsDisplay.style.display = 'none'; // Hide skills display if it's open
    projectsDisplay.style.display = 'none';
});

closeEducationBtn.addEventListener('click', function() {
    educationDisplay.style.display = 'none';
});


const projectsBtn = document.getElementById('projectsBtn');
const projectsDisplay = document.getElementById('projectsDisplay');
const closeProjectsBtn = document.getElementById('closeProjectsBtn');
projectsBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    projectsDisplay.style.display = 'block';
    myDisplay.style.display = 'none'; // Hide about display if it's open
    skillsDisplay.style.display = 'none'; // Hide skills display if it's open
    educationDisplay.style.display = 'none';
    });

    closeProjectsBtn.addEventListener('click', function() {
    projectsDisplay.style.display = 'none';
    });