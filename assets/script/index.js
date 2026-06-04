document.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress");
  bars.forEach(bar => {
    const target = bar.getAttribute("data-skill");
    let count = 0;
    const interval = setInterval(() => {
      if (count >= target) clearInterval(interval);
      else {
        count++;
        bar.style.width = count + "%";
        bar.textContent = count + "%";
      }
    }, 30);
  });
});

const nameElement = document.getElementById("name");
if (nameElement) {
   const text = nameElement.textContent; 
  nameElement.textContent = "";
let index = 0;
let isDeleting = false;

function typeWriter() {
  if (!isDeleting && index < text.length) {
    nameElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 150);

  } else if (!isDeleting && index === text.length) {
    setTimeout(() => {
      isDeleting = true;
      typeWriter();
    }, 5000); // temps d’attente avant effacement

  } else if (isDeleting && index > 0) {
    nameElement.innerHTML = text.substring(0, index - 1);
    index--;
    setTimeout(typeWriter, 100);

  } else if (isDeleting && index === 0) {
    isDeleting = false;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();
}

 const menuHamburger = document.querySelector(".menu")
        const navLists = document.querySelector(".nav-lists")

        menuHamburger.addEventListener('click',()=>{
        navLists.classList.toggle('mobile-menu')
        })

