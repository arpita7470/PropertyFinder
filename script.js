const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

// Toggle sidebar open
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.add("no-scroll");

});

closeBtn.addEventListener("click" ,()=>{
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
 document.body.classList.remove("no-scroll");


});

// Click outside to close
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

document.querySelectorAll(".Sidebar ul li a").forEach(link =>{
  link.addEventListener("click",()=>{
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.add("no-scroll");

  });
});
const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        navButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const heading =
  document.querySelector(".hero h1");
  const para =
  document.querySelector(".hero p");
  setTimeout(() => {
    heading.style.opacity = "1";
    heading.style.transform="translateY(0)";}, 300);
  setTimeout(() => {
    para.style.opacity = "1";
    para.style.transform="translateY(0)";}, 300);
});

document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("animatedHeading");
    const text = heading.textContent.trim(); 
    let i = 0;

    function typing() {
        if (i < text.length) {
            heading.textContent += text.charAt(i);
            i++;
            setTimeout(typing, 30);
        } else {
            // 1 sec rukega fir dobara shuru karega
            setTimeout(() => {
                heading.textContent = ""; // reset
                i = 0; // reset index
                typing(); // loop again
            }, 1000);
        }
    }

    heading.textContent = ""; // start blank
    typing();
});