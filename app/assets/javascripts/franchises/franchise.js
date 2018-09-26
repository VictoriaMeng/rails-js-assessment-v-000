class Franchise {
  constructor(franchise) {
    this.ratings_count = franchise["ratings_count"];
    this.average_rating = franchise["average_rating"];
  };

  ratings_count_text() {
    return `Total Number of Ratings: ${this.ratings_count}`
  };

  average_rating_text() {
    return `Average Rating: ${this.average_rating}`
  };
}