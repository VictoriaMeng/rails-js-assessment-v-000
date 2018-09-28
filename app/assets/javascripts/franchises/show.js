$("#franchise-show").ready(function() {
  compileRatingTemplate();
  compileShowTemplate();
  renderFranchise(window.location.href);
});

function compileRatingTemplate() {
  ratingTemplate = Handlebars.compile($("#rating-form-template")[0].innerHTML)
  Handlebars.registerPartial('rating-form', ratingTemplate);
};

function compileShowTemplate() {
  showTemplate = Handlebars.compile($("#franchise-show-template")[0].innerHTML);
};

function renderFranchise(href) {
  const get = $.getJSON(href);
  get.success(function(data) {
    const franchise = new Franchise(data);
    clearFranchise();
    prependFranchise(franchise);
    addRatingCheckmark(franchise);
    addFormListener();
  });
};

function addRatingCheckmark(franchise) {
  if (franchise.your_rating) {
    $("#rating_stars_" + franchise.your_rating.stars).attr('checked', 'checked');
  };
}

function prependFranchise(franchise) {
  $("#franchise-show").prepend(showTemplate(franchise));
}

function showPrevious() {
  const previousId = parseInt($("p").attr("value")) - 1;
  renderFranchise("/franchises/" + previousId);
};

function showNext() {
  const nextId = parseInt($("p").attr("value")) + 1;
  renderFranchise("/franchises/" + nextId);
};

function clearFranchise() {
  $("#franchise-show")[0].innerHTML = "";
}

function addFormListener() {
  $("form")[0].addEventListener("submit", function(event) {
    event.preventDefault();
    const params = $(this).serialize();
    const franchise_id = $("p#franchise-id").attr("value");
    if (noRatingId()) {
      var posting = $.post("/franchises/" + franchise_id + "/ratings/", params)
    } else {
      const rating_id = $("p#rating-id").attr("value")
      var posting = $.ajax({
        url: "/franchises/" + franchise_id + "/ratings/" + rating_id,
        method: "PATCH",
        dataType: "json",
        data: params
      });
    };
    posting.done(function(data) {
      renderNewRating(data);
    });
  });
}

function noRatingId() {
  return $("#rating-id").length == 0;
}

function renderNewRating(data) {
  const franchise = new Franchise(data["franchise"]);
  addRatingIdValue(data);
  replaceEmptyRating();
  renderStars(data);
  renderRatingsCount(franchise);
  renderAverageRating(franchise);
};

function addRatingIdValue(data) {
  $("p#empty-rating").attr("value", data["id"]);
};

function replaceEmptyRating() {
  $("p#empty-rating").attr("id", "rating-id");
}

function renderStars(data) {
  $("p#rating-id")[0].innerHTML = "Your Rating: " + data["stars"];
}

function renderRatingsCount(franchise) {
  $("p#ratings-count")[0].innerHTML  = franchise.ratings_count_text();
};

function renderAverageRating(franchise) {
  $("p#average-rating")[0].innerHTML = franchise.average_rating_text();
};

