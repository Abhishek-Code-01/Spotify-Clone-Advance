let playButtons = document.querySelectorAll('#btn');
let musicFiles = document.querySelectorAll('#dd');
let volIcons = document.querySelectorAll('#vol-icon');
let volSliders = document.querySelectorAll('#vol');
let currentTimeDisplays = document.querySelectorAll('#current-time');
let h = document.querySelectorAll('#h');
let m = document.querySelectorAll('#mm');

// Variable to keep track of currently playing music and its button
let currentlyPlaying = null;
let currentlyPlayingButton = null;

// Helper function to reset all images
function resetAllImages() {
    m.forEach((image) => {
        image.style.transform = "scale(1)";
        image.style.transition = "all 0.9s ease-in-out";
        image.style.transform = 'rotate(20deg)';
    });
}

// Play button aur music control ke liye
playButtons.forEach((play, index) => {
    let music = musicFiles[index];  // Corresponding music file
    let currentH = h[index]; // Corresponding h element
    let currentM = m[index]; // Corresponding m element

    play.addEventListener('click', () => {
        if (music.paused) {
            // Reset all images to their original position
            resetAllImages();

            // Pause the currently playing song (if any)
            if (currentlyPlaying && currentlyPlaying !== music) {
                currentlyPlaying.pause();
                if (currentlyPlayingButton) {
                    currentlyPlayingButton.innerHTML = '<i class="fa-solid fa-play"></i>';
                    currentlyPlayingButton.style.fontSize = '22px';
                }
            }

            // Play the selected song
            music.play();
            play.innerHTML = '<i class="fa-solid fa-pause"></i>';
            play.style.fontSize = '26px';

            // Apply transition and transform to the current image
            currentM.style.transform = "scale(1.2)";
            currentM.style.transition = 'all 0.9s ease-in-out';

            // Update the currently playing music and button
            currentlyPlaying = music;
            currentlyPlayingButton = play;

        } else {
            // Pause the currently playing song
            music.pause();
            play.innerHTML = '<i class="fa-solid fa-play" aria-hidden="true"></i>';
            play.style.fontSize = '22px';

            // Revert image transformation
            currentM.style.transform = "scale(1)";
            currentM.style.transition = 'all 0.9s ease-in-out';
            currentM.style.transform = 'rotate(20deg)';
            

            // Reset currently playing music and button
            currentlyPlaying = null;
            currentlyPlayingButton = null;
        }
    });
});

// Volume control ke liye
volSliders.forEach((volSlider, index) => {
    let music = musicFiles[index]; // Corresponding music file
    let icon = volIcons[index];    // Corresponding volume icon
    let currentH = h[index]; // Corresponding h element

    volSlider.addEventListener('input', (event) => {
        let volume = event.target.value;
        music.volume = volume;

        if (volume == 0) {
            icon.className = "fa fa-volume-mute";
            currentH.textContent = "V-Mute";
        } else if (volume <= 0.5) {
            icon.className = "fa fa-volume-down";
            currentH.textContent = "V-normal";
        } else {
            icon.className = "fa fa-volume-up";
            currentH.textContent = "V-Max";
        }

        setTimeout(() => {
            currentH.textContent = 'Music';
        }, 2000);

        icon.style.opacity = volume > 0 ? 1 : 0.5;
    });
});

// Time update ke liye
musicFiles.forEach((music, index) => {
    let currentTimeDisplay = currentTimeDisplays[index];

    music.addEventListener('timeupdate', () => {
        let currentTime = music.currentTime;
        let minutes = Math.floor(currentTime / 60);
        let seconds = Math.floor(currentTime % 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        currentTimeDisplay.textContent = `${minutes}:${seconds}`;
    });
});


//support system time update
let support = document.getElementById('support');

support.addEventListener('click', () => {
    alert('Support function updated Few Days...');
});


// Create playlist ke liye
let create = document.querySelectorAll('#Create');
let cc = document.querySelector('.Create')

cc.addEventListener('click', () => {
    alert('Library creation function updated Few Days...');
});


create.forEach((button)=>{
button.addEventListener('click', () => {
    alert('Not functionable');  
})


});
