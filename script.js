const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

  });

}


// Demo cart interaction

document.querySelectorAll("[data-cart]").forEach((button) => {

  button.addEventListener("click", () => {

    const originalText = button.textContent;

    button.textContent = "Added ✓";

    setTimeout(() => {

      button.textContent = originalText;

    }, 1400);

  });

});


// Demo course signup

const signupForm =
  document.querySelector("#course-signup");


if (signupForm) {

  signupForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const successMessage =
      document.querySelector("#signup-success");


    if (successMessage) {

      successMessage.style.display = "block";

    }


    signupForm.reset();

  });

}
