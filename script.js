let windows = document.querySelectorAll(".window");

windows.forEach(win => {
  let header = win.querySelector(".title-bar");

  let isDragging = false;
  let offsetX, offsetY;

  // Bring to front on click
  win.addEventListener("mousedown", () => {
    bringToFront(win);
  });

  // Drag start
  header.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;

    bringToFront(win);
  });

  // Drag move
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      win.style.left = (e.clientX - offsetX) + "px";
      win.style.top = (e.clientY - offsetY) + "px";
    }
  });

  // Stop drag
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});

// Z-index system (real OS behavior)
let topZ = 10;

let disclaimer = document.querySelectorAll(".disclaimer");

disclaimer.forEach(win => {
  let header = win.querySelector(".disclaimer-bar");

  let isDragging = false;
  let offsetX, offsetY;

  // Bring to front on click
  win.addEventListener("mousedown", () => {
    bringToFront(win);
  });

  // Drag start
  header.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;

    bringToFront(win);
  });

  // Drag move
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      win.style.left = (e.clientX - offsetX) + "px";
      win.style.top = (e.clientY - offsetY) + "px";
    }
  });

  // Stop drag
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});



function bringToFront(win) {
  topZ++;
  win.style.zIndex = topZ;
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".clickable-image").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.dataset.full || img.src;
        lightbox.style.display = "flex";
    });
});

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});