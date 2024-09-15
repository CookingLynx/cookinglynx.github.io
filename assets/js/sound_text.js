var paragraph = document.getElementById("temp_text");

var audio = new Audio({{ include.sound_path }});

var muteButton = document.createElement('mt_button');
muteButton.innerHTML = "Mute";
muteButton.classList.add('mute-button');
muteButton.style.display = 'none';
muteButton.style.marginBottom = "50px";
paragraph.insertAdjacentElement("afterend", muteButton);
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
	
function playSoundAddText() {
    
    if (!paragraph.classList.contains('expanded')) {
        muteButton.style.display = 'inline';
        paragraph.classList.add('bl-red');
        paragraph.classList.add('expanded');
        paragraph.classList.remove('temp_text');
        audio.play();
        paragraph.innerHTML = "{{ include.final_text }}";
    } else {
        paragraph.innerHTML = "{{ include.initial_text }}";
        paragraph.classList.remove('bl-red');
        paragraph.classList.remove('expanded');
        paragraph.classList.add('temp_text');
        muteButton.style.display = 'none';
        audio.pause();
    }
}
