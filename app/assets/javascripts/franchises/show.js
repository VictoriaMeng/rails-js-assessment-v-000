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
  $.getJSON(href, function(franchise) {
    $("#franchise-show").prepend(showTemplate(franchise));
    addFormListener();
  });
};

function showPrevious() {
  const previousId = parseInt($("p").attr("value")) - 1;
  clearFranchise();
  renderFranchise("/franchises/" + previousId);
};

function showNext() {
  const nextId = parseInt($("p").attr("value")) + 1;
  clearFranchise();
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
    if ($("#rating-id").length == 0) {
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

function renderNewRating(data) {
  $("p#empty-rating").attr("value", data["id"]);
  $("p#empty-rating").attr("id", "rating-id");
  $("p#rating-id")[0].innerHTML = "Your Rating: " + data["stars"];

}


