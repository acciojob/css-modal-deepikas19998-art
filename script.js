// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");

  // Show modal
  openBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  // Close modal on close button
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Close modal on outside click
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});

