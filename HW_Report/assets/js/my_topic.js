const rowsPerPage = 5;
let currentPage = 1;
const rows = document.querySelectorAll("#topicsBody tr");
const totalPages = Math.ceil(rows.length / rowsPerPage);
console.log(rows.totalPages);
const pagination = document.getElementById("pagination");

function displayPage(page) {
  currentPage = page;
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  rows.forEach((row, index) => {
    row.style.display = index >= start && index < end ? "" : "none";
  });
  updatePagination();
}

function updatePagination() {
  pagination.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    if (i === currentPage) {
      button.classList.add("active");
    }
    button.addEventListener("click", () => displayPage(i));
    pagination.appendChild(button);
  }
}

// Initial display
displayPage(currentPage);