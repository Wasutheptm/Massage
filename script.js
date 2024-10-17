function toggleHam(x) {
    x.classList.toggle("change");

    
        var x = document.getElementById('myMenu');
        if (x.className === "menu") {
          x.className += " menu-active";
        } else {
          x.className = "menu";
        }
      
  }

  const videoList = [
    'Video/massage.mp4',
    'Video/massage2.mp4',
    'Video/massage3.mp4',
    // เพิ่ม URL วิดีโอเพิ่มเติมตามต้องการ
];

let currentVideoIndex = 0;
const videoElement = document.getElementById('myVideo');

function changeVideo(direction) {
    currentVideoIndex += direction;

    if (currentVideoIndex < 0) {
        currentVideoIndex = videoList.length - 1;
    } else if (currentVideoIndex >= videoList.length) {
        currentVideoIndex = 0;
    }

    videoElement.src = videoList[currentVideoIndex];
    videoElement.play();
}

document.addEventListener('DOMContentLoaded', function () {
    setInterval(() => {
        slideNext();
    }, 5000);
});

function slidePrev() {
    changeVideo(-1);
}

function slideNext() {
    changeVideo(1);
}

