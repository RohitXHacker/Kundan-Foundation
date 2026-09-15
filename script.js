const amountButtons = document.querySelectorAll(".amount-button");

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    amountButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");
  });
});

const donateButton = document.getElementById("donateButton");

donateButton.addEventListener("click", () => {
  alert(
    "Connect this button to your verified donation provider before launch."
  );
});

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("mobile-menu-open");

  if (isOpen) {
    navLinks.classList.remove("mobile-menu-open");
    navLinks.style.display = "none";
  } else {
    navLinks.classList.add("mobile-menu-open");

    navLinks.style.display = "flex";
    navLinks.style.position = "absolute";
    navLinks.style.top = "82px";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.padding = "20px";
    navLinks.style.background = "#faf8f3";
    navLinks.style.flexDirection = "column";
    navLinks.style.alignItems = "stretch";
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 850) {
      navLinks.classList.remove("mobile-menu-open");
      navLinks.style.display = "none";
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 850) {
    navLinks.style.display = "flex";
    navLinks.style.position = "static";
    navLinks.style.padding = "0";
    navLinks.style.background = "transparent";
    navLinks.style.flexDirection = "row";
    navLinks.style.alignItems = "center";
  } else if (
    !navLinks.classList.contains("mobile-menu-open")
  ) {
    navLinks.style.display = "none";
  }
});