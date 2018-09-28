class Franchise {
  constructor(franchise) {
    this.id = id;
    this.name = name;
    this.medium = medium;
    this.url = url;
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

// {

//   "id": 1,
//   "name": "Steven Universe",
//   "medium": "TV Show",
//   "average_rating": 5.0,
//   "ratings_count": 2,
//   "url": "/franchises/1",
//   "your_rating": {
//       "id": 4,
//       "stars": 5,
//       "user_id": 2293352840680163,
//       "franchise_id": 1
//   },
//   "ratings": [
//       {
//           "id": 1,
//           "stars": 5
//       },
//       {
//           "id": 4,
//           "stars": 5
//       }
//   ]

// }