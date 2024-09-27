document.getElementById('getStartedBtn').onclick = function() {
    window.location.href = 'register.html'; 
};

document.getElementById('login-button').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});
const phrases = [
    "Welcome to PA-Learn!",
    "Empowering individuals .",
    "Programming languages.",
    "Explore technology.",
    "learning journey!"
];

let currentPhraseIndex = 0;
const animatedTextElement = document.querySelector('.animated-text');

function startTypingAnimation() {
    animatedTextElement.textContent = phrases[currentPhraseIndex];
    animatedTextElement.style.animation = 'none';

    
    setTimeout(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        startTypingAnimation();
    }, 4000); 
}


startTypingAnimation();

  window.onload = function() {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none'; 
        const content = document.querySelector('.content');
        content.style.display = 'block'; 
        setTimeout(() => {
            content.style.opacity = 1; 
        }, 10);
    }, 7000); 
};