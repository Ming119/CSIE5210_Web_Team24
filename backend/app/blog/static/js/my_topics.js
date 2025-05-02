const rowsPerPage = 5;
let currentPage = 1;
const topicsBody = document.getElementById("topicsBody");
const pagination = document.getElementById("pagination");
const createPostBtn = document.getElementById("createPostBtn");
const createPostModal = document.getElementById("createPostModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const createPostForm = document.getElementById("createPostForm");

// Fetch and display posts
function fetchPosts() {
  fetch("/api/posts/") // Replace with your API endpoint
    .then((response) => response.json())
    .then((data) => {
      topicsBody.innerHTML = ""; // Clear existing posts
      data.forEach((post) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${post.title}</td>
          <td>${post.updated_at}</td>
          <td>${post.author}</td>
        `;
        topicsBody.appendChild(row);
      });
      displayPage(1); // Reset to the first page
    });
}

// Display posts for the current page
function displayPage(page) {
  currentPage = page;
  const rows = document.querySelectorAll("#topicsBody tr");
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;

  rows.forEach((row, index) => {
    row.style.display = index >= start && index < end ? "" : "none";
  });

  updatePagination(totalPages);
}

// Update pagination buttons
function updatePagination(totalPages) {
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

// Show the modal
createPostBtn.addEventListener("click", () => {
  createPostModal.style.display = "flex";
});

// Close the modal
closeModalBtn.addEventListener("click", () => {
  createPostModal.style.display = "none";
});

// Handle form submission
createPostForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(createPostForm);
  fetch("/api/posts/", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        createPostModal.style.display = "none";
        fetchPosts(); // Refresh posts
      } else {
        alert("Failed to create post");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Initial fetch
fetchPosts();