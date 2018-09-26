class Franchise {
  constructor(ratings_count, average_rating) {
    this.ratings_count = ratings_count;
    this.average_rating = average_rating;
  };

  ratings_count_text() {
    return `Total Number of Ratings: ${this.ratings_count}`
  };

  average_rating_text() {
    return `Average Rating: ${this.average_rating}`
  };
}