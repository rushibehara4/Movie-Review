let containerEl = document.getElementById("reviewsContainer");

let buttonEl = document.getElementById("addBtn");
let movieTitleEl = document.getElementById("titleInput");
let movieReviewEl = document.getElementById("reviewTextarea");

buttonEl.onclick = function() {
    if (movieTitleEl.value === "") {
        alert("Enter the movie title");
        return;
    } else {
        let reviewsContainerEl = document.createElement("div");
        reviewsContainerEl.id = "reviewsContainer";
        reviewsContainerEl.classList.add("d-flex", "flex-column");
        containerEl.appendChild(reviewsContainerEl);

        let movieTitleName = document.createElement("h1");
        movieTitleName.classList.add("movie-title-review");
        movieTitleName.textContent = "Movie Title : " + movieTitleEl.value;
        reviewsContainerEl.appendChild(movieTitleName);

        let movieReviewName = document.createElement("p");
        movieReviewName.classList.add("movie-review-name");
        movieReviewName.textContent = "Review : " + movieReviewEl.value;
        reviewsContainerEl.appendChild(movieReviewName);
    }

    movieTitleEl.value = "";
    movieReviewEl.value = "";
}