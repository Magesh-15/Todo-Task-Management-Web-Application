// Add hovered class to selected list item
const list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}

// Add both mouse and keyboard (focus) support
list.forEach((item) => {
  item.addEventListener("mouseover", activeLink);
  item.addEventListener("focus", activeLink); // For keyboard tab
});

// Menu Toggle
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");

toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  toggle.setAttribute(
    "aria-expanded",
    navigation.classList.contains("active")
  );
});
