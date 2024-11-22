const movies = [
  // Upcoming Movies
  {
    id: 1,
    title: "Aladdin",
    category: "upcoming",
    description:
      "In the fictional city of Agrabah (based on Baghdad), an orphaned street urchin named Aladdin and his monkey, Abu, meet Princess Jasmine, who has snuck away from her sheltered life in the palace. She wishes to succeed her father as Sultan but is instead expected to marry one of her royal suitors. Jafar, the royal vizier, schemes to overthrow the Sultan and seeks a magic lamp from the Cave of Wonders, that only the diamond in the rough can retrieve.",
    releaseYear: 2024,
    rating: 7.5,
    imageUrl: "./Movies/Aladdin/bg.jpg",
    videoUrl: "./Movies/Aladdin/Aladdin.mp4",
  },
  {
    id: 2,
    title: "Venom 2",
    category: "upcoming",
    description:
      "Venom: Let There Be Carnage follows Eddie Brock as he struggles to coexist with the alien symbiote, Venom. Their chaotic partnership is tested when serial killer Cletus Kasady becomes the host of Carnage, a powerful and malevolent symbiote. Kasady's transformation unleashes chaos, pushing Eddie and Venom to confront their fractured relationship to stop him. The sequel blends dark humor, intense action, and a battle of symbiotic foes in a high-stakes confrontation for survival.",
    releaseYear: 2024,
    rating: 8.2,
    imageUrl: "./Movies/Venom2/Venom2.jpeg",
    videoUrl: "./Movies/Venom2/venom_2.mp4",
  },
  {
    id: 3,
    title: "Morbius",
    category: "upcoming",
    description: "Morbius is a superhero film set in the Sony Spider-Man Universe. It follows Dr. Michael Morbius, a brilliant biochemist suffering from a rare blood disease. In his quest for a cure, he experiments with vampire bat DNA, resulting in him gaining superhuman abilities but also an insatiable thirst for blood. As Morbius grapples with his new identity, he must choose between heroism and his darker impulses, facing formidable challenges.",
    releaseYear: 2024,
    rating: 6.8,
    imageUrl: "./Movies/Morbius/Morbius.jpeg",
    videoUrl: "./Movies/Morbius/Morbius2.mp4",
  },
  {
    id: 4,
    title: "Peter Rabbit",
    category: "upcoming",
    description: "Peter Rabbit is a animated comedy film based on Beatrix Potter's beloved character. The story follows the mischievous and adventurous Peter Rabbit, who, along with his animal friends, frequently raids Mr. McGregor’s vegetable garden. Their rivalry escalates when Thomas McGregor inherits the garden, leading to a series of humorous and chaotic confrontations. ",
    releaseYear: 2024,
    rating: 7.1,
    imageUrl:"./Movies/PeterRabbit/PeterRabbit.jpeg",
    videoUrl: "./Movies/PeterRabbit/PeterRabbit.mp4",
  },

  // Top-Rated Movies
  {
    id: 5,
    title: "Avenger End Game",
    category: "top-rated",
    description:
      "*Avengers: Endgame* concludes the Infinity Saga with the Avengers rallying to undo the damage caused by Thanos' snap in *Infinity War*. After locating and losing the Infinity Stones, they devise a risky time heist to retrieve them from the past. This leads to an epic battle when Thanos returns. Sacrifices are made, including Tony Stark giving his life to defeat Thanos. The movie ends with peace restored and Steve Rogers passing his shield to Sam Wilson.",
    releaseYear: 2023,
    rating: 9.1,
    imageUrl: "./Movies/AvengersEndGame/bg.jpg",
    videoUrl: "./Movies/AvengersEndGame/AvengersEndGame.mp4",
    
    
  },
  {
    id: 6,
    title: "Project Power",
    category: "top-rated",
    description: "Project Power is a 2020 sci-fi action film where a mysterious pill grants temporary superpowers for five minutes but at a deadly cost. Set in New Orleans, the story follows a former soldier, Art (Jamie Foxx), who teams up with a cop (Joseph Gordon-Levitt) and a teenage dealer (Dominique Fishback) to track down the source of the dangerous drug. ",
    releaseYear: 2020,
    rating: 8.9,
    imageUrl: "./Movies/ProjectPower/bg.jpeg",
    videoUrl: "./Movies/ProjectPower/ProjectPower.mp4",
  },
  {
    id: 7,
    title: "Black Widow",
    category: "top-rated",
    description: "*Black Widow* (2021) is a Marvel Cinematic Universe film centered on Natasha Romanoff, aka Black Widow, set between *Captain America: Civil War* and *Avengers: Infinity War*. Haunted by her past as a trained assassin, Natasha confronts hidden parts of her history when a conspiracy tied to her origins emerges. Reuniting with her surrogate family, she battles the dangerous Red Room and its ruthless leader to uncover long-buried secrets and seek redemption.",
    releaseYear: 2021,
    rating: 9.0,
    imageUrl:"./Movies/BlackWidow/bg.jpg",
    videoUrl:"./Movies/BlackWidow/BlackWidow.mov",
  },
  {
    id: 8,
    title: "Black Panther",
    category: "top-rated",
    description: "*Black Panther* (2018) is a Marvel superhero film set in the technologically advanced African nation of Wakanda. After the death of King T'Chaka, T'Challa returns home to assume the throne and take on the mantle of Black Panther. He faces challenges to his leadership from rival Erik Killmonger, who seeks to reshape Wakanda’s global role. The movie explores themes of heritage, power, and responsibility, blending rich cultural storytelling with action and intrigue.",
    releaseYear: 2018,
    rating: 8.7,
    imageUrl: "./Movies/BlackPanther/BlackPanther.jpg",
    videoUrl:"./Movies/BlackPanther/BlackPanther.mp4",
  },

  // Latest Movies
  {
    id: 9,
    title: "Singham 3",
    category: "latest",
    description: "*Singham 3* is the third installment in the *Singham* franchise, following the story of DCP Bajirao Singham. In this film, Singham confronts a ruthless and corrupt antagonist, who manipulates the system for personal gain. Singham must use his strength, intelligence, and dedication to justice to restore order and fight for the truth, risking his own life in the process.",
    releaseYear: 2024,
    rating: 7.3,
    imageUrl: "./Movies/Singham3/bg.jpeg",
    videoUrl:"./Movies/Singham3/Singham3.mp4",
  },
  {
    id: 10,
    title: "Bhul Bhulaiya 3",
    category: "latest",
    description: "*Bhool Bhulaiyaa 3* is an upcoming Bollywood horror-comedy film, continuing the story of supernatural mystery and comedic twists. It follows new characters caught in a haunted, ancient mansion, where secrets and ghosts lurk. With a mix of humor, thrill, and suspense, the film explores eerie events, unexpected turns, and the return of dark forces that challenge the protagonists.",
    releaseYear: 2024,
    rating: 8.9,
    imageUrl: "./Movies/BhulBhulaiya3/bg.jpeg",
    videoUrl:"./Movies/BhulBhulaiya3/videoplayback.mp4",
  },
  {
    id: 11,
    title: "Bhoot Part 1",
    category: "latest",
    description: "*Bhoot Part One: The Haunted Ship* is a 2020 Indian horror film directed by Bhanu Pratap Singh. It follows Prithvi, a shipping officer haunted by personal loss, who discovers a mysteriously abandoned, haunted ship docked on Mumbai's shores. As he investigates the eerie vessel, he encounters supernatural events and malevolent spirits, forcing him to confront his deepest fears and unresolved past.",
    releaseYear: 2024,
    rating: 7.8,
    imageUrl: "./Movies/BhootPartOne/BhootPartOne.jpg",
    videoUrl:"./Movies/BhootPartOne/BhootPart1.mp4",
  },
  {
    id: 12,
    title: "Arm",
    category: "latest",
    description: "*Arm* is a gritty drama that follows the life of a young man caught between loyalty and morality. As an enforcer for a drug-dealing gang, he faces a dilemma when ordered to commit an act that conflicts with his conscience. The story delves into themes of redemption, violence, and personal choice, highlighting the struggle to break free from a life of crime.",
    releaseYear: 2024,
    rating: 8.2,
    imageUrl: "./Movies/Arm/bg.jpeg",
    videoUrl:"./Movies/Arm/Arm.mp4",
  },

  // English Movies
  {
    id: 13,
    title: "Doctor Strange",
    category: "english",
    description: "Doctor Strange follows Dr. Stephen Strange, a gifted but arrogant neurosurgeon whose career ends after a car accident damages his hands. Desperate for healing, he seeks mystical guidance and encounters the Ancient One, who introduces him to sorcery. Strange learns to harness powerful magic, confronting dark forces threatening Earth and embracing his destiny as the Sorcerer Supreme and a hero.",
    releaseYear: 2016,
    rating: 8.3,
    imageUrl: "./Movies/DoctorStrange/DoctorStrange.jpg",
    videoUrl:"./Movies/DoctorStrange/DoctorStrange.mp4",
  },
  {
    id: 14,
    title: "Fault in Our Star",
    category: "english",
    description: "*The Fault in Our Stars* is a heartfelt romantic drama based on John Green's novel. It follows Hazel Grace Lancaster, a witty teenager with cancer, who meets Augustus Waters at a support group. Their connection blossoms into a deep, life-changing love story as they navigate the joys and heartbreaks of life and illness, cherishing every moment despite their uncertain futures.",
    releaseYear: 2014,
    rating: 8.5,
    imageUrl: "./Movies/Faultinourstar/bg.jpeg",
    videoUrl:"./Movies/Faultinourstar/Faultinourstar.mp4",
  },
  {
    id: 15,
    title: "Cinderella",
    category: "english",
    description: "*Cinderella* is a timeless fairy tale film that follows the story of a kind young woman who, despite enduring cruelty from her wicked stepmother and stepsisters, remains hopeful and resilient. With the help of her Fairy Godmother, she transforms for one magical night, capturing the heart of a charming prince. Love and kindness ultimately triumph, fulfilling her dreams.",
    releaseYear: 2015,
    rating: 7.2,
    imageUrl: "./Movies/Cinderella/bg.jpeg",
    videoUrl:"./Movies/Cinderella/cinderella.mp4",
  },
  {
    id: 16,
    title: "Safe Haven",
    category: "english",
    description: "*Safe Haven* is a romantic drama based on Nicholas Sparks' novel. It follows Katie, a mysterious young woman who moves to a small North Carolina town to escape her troubled past. She forms a bond with Alex, a widowed store owner, and his children. As love blossoms, Katie’s past catches up with her, forcing her to confront secrets that could endanger her newfound peace.",
    releaseYear: 2013,
    rating: 7.9,
    imageUrl: "./Movies/Safeheaven/bg.jpeg",
    videoUrl:"./Movies/Safeheaven/safeheaven.mp4",
  },

  // Hindi Movies
  {
    id: 17,
    title: "Bahubali 2",
    category: "hindi",
    description:
      "Baahubali 2: The Conclusion is an epic Indian action film directed by S.S. Rajamouli. It follows the story of Mahendra Baahubali, who sets out to reclaim his rightful throne and avenge the betrayal against his father, Amarendra Baahubali. This visually spectacular film reveals the reason behind Kattappa’s infamous betrayal, showcasing themes of power, loyalty, and justice. Rich in drama, grandeur, and emotion, it captivated audiences worldwide with its powerful storytelling.",
    releaseYear: 2017,
    rating: 8.1,
    imageUrl: "./Movies/Bahubali2/bg.jpg",
    videoUrl:"./Movies/Bahubali2/Bahubali2.mp4",
  },
  {
    id: 18,
    title: "Shivaay",
    category: "hindi",
    description: "*Shivay* is a Indian action-thriller film centered around Shivaay, a skilled Himalayan mountaineer and fearless protector. His world changes when his young daughter, Gaura, is abducted by a human trafficking ring in Bulgaria. Determined and relentless, Shivaay embarks on a perilous journey to rescue her, battling enemies and confronting his own vulnerabilities in a tale of love, sacrifice, and survival.",
    releaseYear: 2016,
    rating: 7.4,
    imageUrl: "./Movies/Shivaay/Shivaay.jpeg",
    videoUrl:"./Movies/Shivaay/Shivaay.mp4",
  },
  {
    id: 19,
    title: "Padmaavat",
    category: "hindi",
    description: "*Padmaavat* is a Indian epic period drama directed by Sanjay Leela Bhansali. Set in 13th-century India, it tells the tale of the beautiful and courageous Queen Padmavati, wife of Maharawal Ratan Singh of Mewar. The powerful Sultan Alauddin Khilji becomes infatuated with her and wages war to capture her. The film explores themes of honor, love, and sacrifice.",
    releaseYear: 2018,
    rating: 8.0,
    imageUrl: "./Movies/Padmavat/Padmaavat.jpg",
    videoUrl:"./Movies/Padmavat/Padmaavat.mp4",
  },
  {
    id: 20,
    title: "Dhaakad",
    category: "hindi",
    description: "*Dhaakad*  is an action thriller featuring Kangana Ranaut as Agni, a fierce and skilled secret agent. Tasked with taking down an international human trafficking syndicate, she confronts ruthless criminals while uncovering dark secrets. With high-octane action, intense combat, and emotional depth, Agni's journey explores courage, revenge, and justice in a dangerous world.",
    releaseYear: 2022,
    rating: 7.4,
    imageUrl: "./Movies/Dhaakad/Dhaakad.jpg",
    videoUrl:"./Movies/Dhaakad/Dhaakad.mp4",
  },
];

// Convert the movies array to a JSON string and store it in local storage
localStorage.setItem("movies", JSON.stringify(movies));

// Get the modal, button to open it, and the button to close it
const modal = document.getElementById("movie-modal");
const openModalBtn = document.getElementById("open-modal-btn");

const closeModalBtn = document.getElementById("close-modal-btn");

// Function to show the login modal
function showLogin() {
  document.getElementById("loginModal").style.display = "block";
}

// Function to close the login modal
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

// Function to show the signup modal
function showSignup() {
  document.getElementById("signupModal").style.display = "block";
}

// Function to close the signup modal
function closeSignup() {
  document.getElementById("signupModal").style.display = "none";
}

// Signup functionality
function signup() {
  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const role = document.getElementById("userRole").value; // New field for role

  if (username && password) {
    const newUser = { username, password, role };
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    closeSignup();
  } else {
    alert("Please fill in all fields.");
  }
}

// Login functionality
function login() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    updateUIForLoggedInUser(user);
    alert(`Welcome ${user.username}!`);
    closeLogin();
  } else {
    alert("Invalid credentials.");
  }
}

document.getElementById("open-modal-btn").style.display = "none";

// Update the UI for logged-in user
function updateUIForLoggedInUser(user) {
  // Hide Login and Signup buttons, show Logout
  document.querySelectorAll(".auth-options button").forEach((btn) => {
    btn.style.display = "none"; // Hide all login/signup buttons
  });
  if (user.role == "admin") {
    document.getElementById("open-modal-btn").style.display = "inline";
  }

  document.getElementById("logoutButton").style.display = "inline"; // Show Logout button
  displayMovies(); // Display movies once logged in
}

// Logout functionality
function logout() {
  localStorage.removeItem("loggedInUser");
  document.getElementById("logoutButton").style.display = "none";
  document.querySelectorAll(".auth-options button").forEach((btn) => {
    btn.style.display = "inline"; // Show login/signup buttons again
  });
  alert("You have logged out.");
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    updateUIForLoggedInUser(loggedInUser);
  } else {
    displayMovies(); // Display movies for users who are not logged in
  }

  // Add event listener to search input for real-time search
  document
    .getElementById("searchInput")
    .addEventListener("input", searchMovies);
});

function searchMovies(event) {
  const query = event.target.value.toLowerCase(); // Get search query and convert it to lowercase
  const movies = getMovies(); // Get the movies from local storage

  // Filter movies based on title (case-insensitive)
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query)
  );

  // Display the filtered movies
  displaySearchResults(filteredMovies);
  console.log(filteredMovies);
}

function getMovies() {
  return JSON.parse(localStorage.getItem("movies")) || [];
}

// Function to save updated movies to local storage
function saveMovies(movies) {
  localStorage.setItem("movies", JSON.stringify(movies));
}

// Function to open the video player modal
function openVideoPlayer(videoUrl) {
  // Create modal content
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("video-modal-overlay");
  modalOverlay.innerHTML = `
          <div class="video-modal">
              <video controls autoplay>
                  <source src="${videoUrl}" type="video/mp4">
                  Your browser does not support the video tag.
              </video>
              <button class="video-close-btn" onclick="closeVideoPlayer()">Close</button>
          </div>
      `;

  // Append to the body
  document.body.appendChild(modalOverlay);
}

// Function to close the video player modal
function closeVideoPlayer() {
  console.log("video button clicked for close");
  const modalOverlay = document.querySelector(".video-modal-overlay");
  if (modalOverlay) {
    document.body.removeChild(modalOverlay);
  }
}

// Function to delete a movie
function deleteMovie(id) {
  let movies = getMovies();
  movies = movies.filter((movie) => movie.id !== id);
  saveMovies(movies);
  displayMovies(); // Refresh the displayed list
}

// Function to open edit modal with selected movie details
function editMovie(id) {
  console.log(id);
  const movies = getMovies();
  const movie = movies.find((movie) => movie.id === id);
  if (movie) {
    document.getElementById("editId").value = movie.id;
    document.getElementById("editTitle").value = movie.title;
    document.getElementById("editDescription").value = movie.description;
    document.getElementById("editYear").value = movie.releaseYear;
    document.getElementById("editRating").value = movie.rating;
    document.getElementById("editModal").style.display = "block";
  }
}

// Function to open the modal
function openModal() {
  document.getElementById("editModal").style.display = "flex";
}

// Function to close the modal
function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// Function to save the updated movie
function saveMovie() {
  const id = parseInt(document.getElementById("editId").value);
  const title = document.getElementById("editTitle").value;
  const description = document.getElementById("editDescription").value;
  const releaseYear = parseInt(document.getElementById("editYear").value);
  const rating = parseFloat(document.getElementById("editRating").value);

  let movies = getMovies();
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex !== -1) {
    movies[movieIndex] = {
      ...movies[movieIndex],
      title,
      description,
      releaseYear,
      rating,
    };
    saveMovies(movies);
    displayMovies();
    closeModal();
  }
}

// Function to close the edit modal
function closeModal() {
  document.getElementById("editModal").style.display = "none";
}

// Function to handle form submission and add new movie
document
  .getElementById("movie-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get values from the form
    const title = document.getElementById("movie-title").value;
    const description = document.getElementById("movie-description").value;
    const releaseYear = document.getElementById("movie-release-year").value;
    const rating = document.getElementById("movie-rating").value;
    const imageUrl = document.getElementById("movie-image-url").value;
    const category = document.getElementById("movie-category").value;

    // Create a new movie object
    const newMovie = {
      id: movies.length ? Math.max(...movies.map((movie) => movie.id)) + 1 : 1,
      title,
      description,
      releaseYear: parseInt(releaseYear),
      rating: parseFloat(rating),
      imageUrl,
      category,
    };

    // Add the new movie to the movies array
    movies.push(newMovie);

    // Save the updated movies array to localStorage
    localStorage.setItem("movies", JSON.stringify(movies));

    // Re-render the movies list to include the new movie
    displayMovies();

    // Close the modal after adding the movie
    document.getElementById("movie-modal").style.display = "none";

    // Reset the form
    event.target.reset();
  });

// Function to open the modal
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// Function to close the modal
closeModalBtn.onclick = function () {
  modal.style.display = "none";
};

// Close the modal if the user clicks anywhere outside the modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Initial display of movies when the page loads
displayMovies();

let currentIndex = 0; // To track the current image
let movieImages = [
  "./Images/CarouselImages/Carousel1.jpg", // Replace with actual image URLs
  "./Images/CarouselImages/Carousel2.jpeg", // Replace with actual image URLs
  "./Images/CarouselImages/Carousel3.jpeg", // Replace with actual image URLs
  "./Images/CarouselImages/Carousel4.jpeg", // Replace with actual image URLs
  "./Images/CarouselImages/Carousel5.jpg", // Replace with actual image URLs
  "./Images/CarouselImages/Carousel6.jpeg",
];

function initCarousel() {
  const carouselImagesContainer = document.getElementById("carousel-images");
  movieImages.forEach((imageUrl) => {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.classList.add("carousel-image");
    carouselImagesContainer.appendChild(img);
  });
}

function moveCarousel(direction) {
  const carouselImagesContainer = document.getElementById("carousel-images");
  const totalImages = movieImages.length;

  if (direction === "next") {
    currentIndex = (currentIndex + 1) % totalImages;
  } else {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  }

  // Move the carousel images container to the correct position
  carouselImagesContainer.style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}

// Initialize carousel when page loads
window.onload = initCarousel;

function renderMovies(movies, container) {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Group movies by category
  const categories = {};
  movies.forEach((movie) => {
    if (!categories[movie.category]) {
      categories[movie.category] = [];
    }
    categories[movie.category].push(movie);
  });

  // Display each category with movies
  for (const [category, movies] of Object.entries(categories)) {
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `<h2 style="color: whitesmoke">${category.toUpperCase()}</h2>`;
    const innerDiv = document.createElement("div");
    categoryDiv.append(innerDiv);

    movies.forEach((movie) => {
      const movieDiv = document.createElement("div");

      // Initial display content (title, release year, and rating only)
      movieDiv.innerHTML = `
                <img src="${movie.imageUrl}" alt="${movie.title}" style="width: 150px; height: 150px; object-fit: cover;" />
                <h3>${movie.title}</h3>
                <p>Release Year: ${movie.releaseYear}</p>
                <p>Rating: ${movie.rating}</p>
                <button onclick="openVideoPlayer('${movie.videoUrl}')">Watch Movie</button>
            `;

      // Function to toggle expanded details
      function toggleDetails() {
        if (movieDiv.classList.contains("expanded")) {
          movieDiv.classList.remove("expanded");
          movieDiv.innerHTML = `
                        <img src="${movie.imageUrl}" alt="${movie.title}" style="width: 150px; height: 150px; object-fit: cover;" />
                        <h3>${movie.title}</h3>
                        <p>Release Year: ${movie.releaseYear}</p>
                        <p>Rating: ${movie.rating}</p>
                        <button onclick="openVideoPlayer('${movie.videoUrl}')">Watch Movie</button>
                    `;
        } else {
          movieDiv.classList.add("expanded");
          movieDiv.innerHTML = `
                        <img src="${movie.imageUrl}" alt="${movie.title}" style="width: 150px; height: 150px; object-fit: cover;" />
                        <h3>${movie.title}</h3>
                        <p>${movie.description}</p>
                        <p>Release Year: ${movie.releaseYear}</p>
                        <p>Rating: ${movie.rating}</p>
                    `;
          if (loggedInUser && loggedInUser.role === "admin") {
            movieDiv.innerHTML += `
                            <button onclick="deleteMovie(${movie.id})">Delete</button>
                            <button onclick="editMovie(${movie.id})">Edit</button>
                        `;
          }
        }
      }

      // Add click event to toggle details
      movieDiv.addEventListener("click", toggleDetails);

      innerDiv.appendChild(movieDiv);
    });

    container.appendChild(categoryDiv);
  }
}

// Updated displayMovies function
function displayMovies() {
  const movies = getMovies();
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";
  renderMovies(movies, moviesContainer);
}

// Updated displaySearchResults function
function displaySearchResults(filteredMovies) {
  const moviesContainer = document.getElementById("movies-container");
  moviesContainer.innerHTML = "";

  if (filteredMovies.length === 0) {
    moviesContainer.innerHTML = "<p>No movies found</p>";
  } else {
    renderMovies(filteredMovies, moviesContainer);
  }
}
