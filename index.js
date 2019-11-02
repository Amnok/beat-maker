window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#54d643",
        "#4b0ae2",
        "#d60e83",
        "#31072a"
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        })
    })


    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', () => {
            visual.removeChild(bubble);
        });
    }
})