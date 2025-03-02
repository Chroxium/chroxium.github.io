async function fetchLatestRelease() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Chroxium/Bluej-Themes/releases/latest"
    );
    const data = await response.json();
    return `https://github.com/Chroxium/Bluej-Themes/archive/refs/tags/${data.tag_name}.zip`;
  } catch (error) {
    console.error("Error fetching latest release:", error);
    return null;
  }
}

document
  .getElementById("install-button")
  .addEventListener("click", async () => {
    const zipUrl = await fetchLatestRelease();
    if (zipUrl) {
      Object.assign(document.createElement("a"), { href: zipUrl }).click();
    }
    document
      .getElementById("installation")
      ?.scrollIntoView({ behavior: "smooth" });
  });

document
  .getElementById("preview-button")
  .addEventListener("click", () =>
    document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" })
  );

document
  .getElementById("faq-button")
  .addEventListener("click", () =>
    document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })
  );

document.addEventListener("click", (event) => {
  const menu = document.getElementById("dropdown-menu");
  if (
    !menu.contains(event.target) &&
    !document.querySelector(".material-icons").contains(event.target)
  ) {
    menu.style.display = "none";
  }
});

function toggleMenu() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
