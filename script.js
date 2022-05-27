// Drag and drop

const position = { x: 0, y: 0 };

interact(".draggable").draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move(event) {
      position.x += event.dx;
      position.y += event.dy;

      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
    },
  },
});

// Open, close, expand, reduce window

// /section

// computer
const computerIcon = document.getElementById("computer-icon");

const computerOpen = document.getElementById("computer-open");

const closeFolder = document.getElementById("close-folder");
// /computer

const expandFolder = document.getElementById("expand-folder");

const sectionExpand = document.getElementById("computer-open");

const windowExpand = document.getElementById("window-expand");

computerIcon.addEventListener("dblclick", function () {
  computerOpen.style.display = "block";
});

closeFolder.addEventListener("click", function () {
  computerOpen.style.display = "none";
});

// bin
const binIcon = document.getElementById("bin-icon");

const closeBinFolder = document.getElementById("close-bin-folder");

const openBinFolder = document.getElementById("bin-open-folder");

binIcon.addEventListener("dblclick", function () {
  openBinFolder.style.display = "block";
});

closeBinFolder.addEventListener("click", function () {
  openBinFolder.style.display = "none";
});
