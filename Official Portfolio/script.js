var preloader = document.getElementById('loader');

function loading(){
  preloader.style.display= 'none';
}

// LINK TO NEXT PAGES
function about() {
  window.location.href="about.html";
}

function home() {
  window.location.href="index.html";
}

// SCROLL TO PROJECTS
function work() {
    document.getElementById("projects").scrollIntoView({behavior: "smooth"});
  }

// CONSTANT TEXT CHANGING HEADINGS
var nameEl = document.querySelector('.story');
var aboutEl = document.querySelector('.design');
var loadE1= document.querySelector('.load-head')
var names = ['Minimalistic', 'Aesthetics', 'Self-Taught','Storytelling']; // an array of names
var abouts = ['Developer', 'Admirer', 'Student', 'Designer']; // an array of abouts
var loadd = ['Web Developer', 'Designer', 'Student', 'Pawan']

var i = 0; // initialize a counter

setInterval(function() {
  nameEl.textContent = names[i];
  aboutEl.textContent = abouts[i];
  loadE1.textContent = loadd[i];
  i = (i + 1) % names.length; // increment counter and wrap around to beginning of array
}, 1500); // change text every 2 seconds (adjust as needed)

// NAME HOVER VOWEL EFFECT
var namep = document.getElementById('name');

namep.addEventListener('mouseover', function() {
  this.textContent = 'Pxwxn Kxmxt';
});

namep.addEventListener('mouseout', function() {
  this.textContent = 'Pawan Kamat';
});

// ABOUT HOVER VOWEL EFFECT
var aboutp = document.getElementById('about');

aboutp.addEventListener('mouseover', function() {
  this.textContent = 'Xbxxt';
});

aboutp.addEventListener('mouseout', function() {
  this.textContent = 'About';
});

// NEXT PROJECT
function gotosphere() {
  window.location.href="sphere.html";
}

function spherenext() {
  window.location.href="windows.html";
}

function gotovote() {
  window.location.href="vote.html";
}

function votenext() {
  window.location.href="sphere.html";
}

function gotowin() {
  window.location.href="windows.html";
}

// NAMASTE HOVER
var hindi = document.getElementById('hindi');

hindi.addEventListener('mouseover', function() {
  this.textContent = 'Namaste';
});

hindi.addEventListener('mouseout', function() {
  this.textContent = 'नमस्ते';
});

// MUMBAI HOVER
var mumbai = document.getElementById('mumbai');

mumbai.addEventListener('mouseover', function() {
  this.textContent = 'Mumbai';
});

mumbai.addEventListener('mouseout', function() {
  this.textContent = 'मुम्बई';
});
