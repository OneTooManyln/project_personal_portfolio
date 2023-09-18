const updateSectionText = () => {
  const sidebarSectionText = document.querySelector(
    ".sidebar-current-section-text",
  );

  window.addEventListener("scroll", (e) => {
    const scrollPosition =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    if (scrollPosition >= 25 && scrollPosition < 55) {
      sidebarSectionText.innerText = "";
      sidebarSectionText.innerText = "ABOUT";
    } else if (scrollPosition >= 55 && scrollPosition < 95) {
      sidebarSectionText.innerText = "";
      sidebarSectionText.innerText = "PROJECTS";
    } else if (scrollPosition >= 95) {
      sidebarSectionText.innerText = "";
      sidebarSectionText.innerText = "CONTACT";
    } else {
      sidebarSectionText.innerText = "";
      sidebarSectionText.innerText = "HOME";
    }
  });
};

export default updateSectionText;
