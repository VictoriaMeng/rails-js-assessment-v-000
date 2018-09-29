class Franchise {
  constructor(franchise) {
    this.id = franchise["id"];
    this.name = franchise["name"];
    this.medium = franchise["medium"];
    this.url = franchise["url"];
    if (franchise["your_rating"]) {
      this.your_rating = new Rating(franchise["your_rating"]);
      this.ratings_count = franchise["ratings_count"];
      this.average_rating = franchise["average_rating"];
    };
  };

  ratings_count_text() {
    return `Total Number of Ratings: ${this.ratings_count}`
  };

  average_rating_text() {
    return `Average Rating: ${this.average_rating}`
  };
}
