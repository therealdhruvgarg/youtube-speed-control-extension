let isThreeX = false; // Track the current speed state

chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes("youtube.com")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: toggleSpeed,
            args: [isThreeX]
        });

        // Toggle the state
        isThreeX = !isThreeX;
    }
});

function toggleSpeed(currentState) {
    const video = document.querySelector("video");
    if (video) {
        if (video.playbackRate === 1.0) {
            video.playbackRate = 2.5;
            alert("Playback speed set to 2.5x!");
        } else if (video.playbackRate === 2.5) {
            video.playbackRate = 3.0;
            alert("Playback speed set to 3x!");
        } else {
            video.playbackRate = 1.0;
            alert("Playback speed set back to 1x!");
        }
    } else {
        alert("No video found on this page.");
    }
}

