function playSound(sound) {
    var audio = new Audio(sound);
    audio.play();
    return audio;  // Return the audio object so we can control it later
}

var spoilers = document.querySelectorAll(".spoiler");

for (let spoiler of spoilers) {
    spoiler.classList.add('spoiler-hidden');

    spoiler.onclick = function() {
        // Play sound only when the text is revealed for the first time
        if (this.classList.contains('spoiler-hidden')) {
            var audio = playSound(this.getAttribute('data-sound'));
            
            // Create the mute button
            var muteButton = document.createElement('button');
            muteButton.innerHTML = "Mute";
            muteButton.classList.add('mute-button');
            muteButton.style.marginRight = "10px";  // Add space between the button and the text
            
            // Insert the button before the spoiler text
            this.parentNode.insertBefore(muteButton, this);

            // Add functionality to the mute button
            var isMuted = false;
            muteButton.onclick = function() {
                if (isMuted) {
                    audio.muted = false;
                    muteButton.innerHTML = "Mute";
                } else {
                    audio.muted = true;
                    muteButton.innerHTML = "Unmute";
                }
                isMuted = !isMuted;  // Toggle the mute state
            }
        }

        // Reveal the spoilered text
        this.classList.remove('spoiler-hidden');
    }
}
