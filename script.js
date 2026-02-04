// Initialize AOS
AOS.init();

// Lightbox Functions
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightboxContent");

  content.innerHTML = "";

  if (src.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.className = "max-h-[90vh] max-w-[90vw] rounded-xl";
    content.appendChild(video);
  } else {
    const img = document.createElement("img");
    img.src = src;
    img.className = "max-h-[90vh] max-w-[90vw] rounded-xl";
    content.appendChild(img);
  }

  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lightboxContent");

  // Stop any playing video
  const video = content.querySelector("video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }

  lightbox.classList.add("hidden");
  content.innerHTML = "";
}

// Floating Buttons at End
const floatingButtons = document.getElementById('floatingButtons');
const floatingEnd = document.getElementById('floatingEndButtons');
window.addEventListener('scroll', function(){
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.body.scrollHeight;
  if(scrollPosition >= documentHeight - 100){
    floatingButtons.style.display = 'none';
    floatingEnd.style.display = 'flex';
  } else {
    floatingButtons.style.display = 'flex';
    floatingEnd.style.display = 'none';
  }
});
