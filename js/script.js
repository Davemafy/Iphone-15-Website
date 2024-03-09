const phoneFrame = document.getElementById("phone-frame");

phoneFrame.addEventListener("mouseover", () => {
    alert("mouse over")
  phoneFrame.classList.add("hover:rotate-90")
});
