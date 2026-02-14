document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     THEME TOGGLE
  ===================== */
  const toggle = document.getElementById("themeToggle");

  if (!toggle) {
    console.log("❌ themeToggle not found");
    return;
  }

  // تحميل الثيم المحفوظ
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // عند الضغط
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });


  /* =====================
     SCROLL ANIMATION
  ===================== */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});
