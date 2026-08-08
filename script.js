// Database of 22+ books with random book cover images
const booksDatabase = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", price: "$29.99", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80", text: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees." },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", price: "$34.50", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80", text: "Illustrates the best approaches and major pitfalls of many different aspects of software development." },
  { id: 3, title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: "$22.00", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80", text: "Unearths the elegant subset of JavaScript that is more reliable, readable, and maintainable." },
  { id: 4, title: "Design Patterns", author: "Erich Gamma", price: "$41.99", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80", text: "Captures solutions to recurring problems in software architecture." },
  { id: 5, title: "You Don't Know JS Yet", author: "Kyle Simpson", price: "$25.00", cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80", text: "Dives deep into the core mechanisms of the JavaScript language." },
  { id: 6, title: "Introduction to Algorithms", author: "Thomas H. Cormen", price: "$55.00", cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80", text: "Comprehensive reference manual for modern computer algorithms." },
  { id: 7, title: "Refactoring", author: "Martin Fowler", price: "$38.00", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80", text: "Improving the design of existing code without changing its external behavior." },
  { id: 8, title: "Head First Design Patterns", author: "Eric Freeman", price: "$30.00", cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&q=80", text: "A learner-friendly guide to solving complex software design challenges." },
  { id: 9, title: "Eloquent JavaScript", author: "Marijn Haverbeke", price: "$27.50", cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80", text: "A modern introduction to programming and JavaScript development." },
  { id: 10, title: "Cracking the Coding Interview", author: "Gayle L. McDowell", price: "$32.00", cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&q=80", text: "180 programming questions and solutions for software interviews." },
  { id: 11, title: "System Design Interview", author: "Alex Xu", price: "$36.00", cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&q=80", text: "An insider's guide to passing system design interviews at top tech companies." },
  { id: 12, title: "Structure and Interpretation", author: "Harold Abelson", price: "$45.00", cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&q=80", text: "Teaches functional programming and computer science principles." },
  { id: 13, title: "Domain-Driven Design", author: "Eric Evans", price: "$42.50", cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80", text: "Tackling complexity in the heart of software systems." },
  { id: 14, title: "Continuous Delivery", author: "Jez Humble", price: "$39.00", cover: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&q=80", text: "Reliable software releases through build, test, and deployment automation." },
  { id: 15, title: "Code Complete", author: "Steve McConnell", price: "$40.00", cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80", text: "A practical handbook of software construction." },
  { id: 16, title: "Site Reliability Engineering", author: "Betsy Beyer", price: "$35.00", cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&q=80", text: "How Google runs production systems reliably." },
  { id: 17, title: "Designing Data-Intensive Apps", author: "Martin Kleppmann", price: "$44.00", cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=80", text: "The big ideas behind reliable, scalable, and maintainable systems." },
  { id: 18, title: "Soft Skills", author: "John Sonmez", price: "$21.99", cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&q=80", text: "The software developer's life manual for career and growth." },
  { id: 19, title: "Grokking Algorithms", author: "Aditya Bhargava", price: "$28.00", cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80", text: "An illustrated guide for programmers and curious minds." },
  { id: 20, title: "Modern Software Engineering", author: "Dave Farley", price: "$33.00", cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=80", text: "A coherent discipline for empowering developers to build better software." },
  { id: 21, title: "Python Crash Course", author: "Eric Matthes", price: "$26.00", cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&q=80", text: "A hands-on, project-based introduction to programming." },
  { id: 22, title: "HTML and CSS: Design Books", author: "Jon Duckett", price: "$24.50", cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&q=80", text: "A visual guide to learning modern front-end web design." }
];

// STATE MANAGEMENT
let currentUser = null;
let cart = [];

// DOM ELEMENTS
const authSection = document.getElementById("auth-section");
const appSection = document.getElementById("app-section");
const loginForm = document.getElementById("login-form");
const userDisplayName = document.getElementById("user-display-name");
const dropdownUsername = document.getElementById("dropdown-username");
const profileBtn = document.getElementById("profile-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const logoutBtn = document.getElementById("logout-btn");

const booksGrid = document.getElementById("books-grid");
const searchInput = document.getElementById("search-input");
const cartBadge = document.getElementById("cart-badge");
const cartItemsContainer = document.getElementById("cart-items-container");

const navLinks = document.querySelectorAll(".nav-link, .footer-nav-link");
const viewSections = document.querySelectorAll(".view-section");

const readModal = document.getElementById("read-modal");
const closeModal = document.getElementById("close-modal");
const modalTitle = document.getElementById("modal-title");
const modalAuthor = document.getElementById("modal-author");
modalBody = document.getElementById("modal-body");

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  checkAuthState();
  renderBooks(booksDatabase);
  setupNavigation();
  setupEvents();
});

// AUTHENTICATION LOGIC
function checkAuthState() {
  const savedUser = localStorage.getItem("eubooks_user");
  const savedCart = localStorage.getItem("eubooks_cart");

  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    cart = savedCart ? JSON.parse(savedCart) : [];
    showApp();
  } else {
    showAuth();
  }
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value;

  currentUser = { name: usernameInput, loggedInAt: new Date().toISOString() };
  localStorage.setItem("eubooks_user", JSON.stringify(currentUser));

  showApp();
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("eubooks_user");
  currentUser = null;
  cart = [];
  updateCartUI();
  showAuth();
});

function showAuth() {
  authSection.classList.remove("hidden");
  appSection.classList.add("hidden");
}

function showApp() {
  authSection.classList.add("hidden");
  appSection.classList.remove("hidden");
  userDisplayName.textContent = currentUser.name;
  dropdownUsername.textContent = currentUser.name;
  updateCartUI();
}

// VIEW SWITCHING LOGIC (Fixed scroll & page targeting)
function switchView(targetViewId) {
  viewSections.forEach(sec => sec.classList.add("hidden"));

  const targetView = document.getElementById(targetViewId);
  if (targetView) {
    targetView.classList.remove("hidden");
  }

  // Sync nav active styling
  document.querySelectorAll(".nav-link").forEach(l => {
    if (l.getAttribute("data-target") === targetViewId) {
      l.classList.add("active");
    } else {
      l.classList.remove("active");
    }
  });

  // Always scroll to top when changing views to prevent landing at the footer
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupNavigation() {
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetViewId = link.getAttribute("data-target");
      if (targetViewId) {
        switchView(targetViewId);
      }
    });
  });
}

// RENDER BOOKS GRID
function renderBooks(books) {
  booksGrid.innerHTML = "";
  if (books.length === 0) {
    booksGrid.innerHTML = `<p>No books found matching your search.</p>`;
    return;
  }

  books.forEach(book => {
    const bookCard = document.createElement("div");
    bookCard.className = "book-card";
    bookCard.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" class="book-cover-img" />
      <div class="book-details">
        <div class="book-title">${book.title}</div>
        <div class="book-author">By ${book.author}</div>
        <div class="book-price">${book.price}</div>
        <div class="book-actions">
          <button class="btn btn-secondary" onclick="openReadModal(${book.id})"><i class="fa-solid fa-book-open"></i> Read</button>
          <button class="btn btn-primary" onclick="addToCart(${book.id})"><i class="fa-solid fa-cart-plus"></i> Add</button>
        </div>
      </div>
    `;
    booksGrid.appendChild(bookCard);
  });
}

// SEARCH FILTER
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = booksDatabase.filter(b => 
    b.title.toLowerCase().includes(query) || 
    b.author.toLowerCase().includes(query)
  );
  renderBooks(filtered);
});

// CART LOGIC
function addToCart(bookId) {
  const book = booksDatabase.find(b => b.id === bookId);
  if (book) {
    cart.push(book);
    localStorage.setItem("eubooks_cart", JSON.stringify(cart));
    updateCartUI();
    alert(`"${book.title}" added to your cart!`);
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("eubooks_cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  cartBadge.textContent = cart.length;
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p>Your cart is empty.</p>`;
    return;
  }

  cart.forEach((item, idx) => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <p>${item.author} - <strong>${item.price}</strong></p>
      </div>
      <button class="btn btn-danger" onclick="removeFromCart(${idx})"><i class="fa-solid fa-trash"></i></button>
    `;
    cartItemsContainer.appendChild(itemEl);
  });
}

// READ MODAL
function openReadModal(bookId) {
  const book = booksDatabase.find(b => b.id === bookId);
  if (book) {
    modalTitle.textContent = book.title;
    modalAuthor.textContent = `Author: ${book.author}`;
    modalBody.innerHTML = `
      <p><strong>Overview:</strong> ${book.text}</p>
      <br>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    `;
    readModal.classList.remove("hidden");
  }
}

closeModal.addEventListener("click", () => readModal.classList.add("hidden"));
window.addEventListener("click", (e) => {
  if (e.target === readModal) readModal.classList.add("hidden");
});

// PROFILE DROPDOWN TOGGLE
function setupEvents() {
  profileBtn.addEventListener("click", () => {
    profileDropdown.classList.toggle("hidden");
  });

  window.addEventListener("click", (e) => {
    if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
      profileDropdown.classList.add("hidden");
    }
  });
}