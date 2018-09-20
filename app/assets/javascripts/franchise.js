$(document).ready(function() {
  // renderIndex();
  compileFranchiseTemplate();
  addLinkListeners();
});

function renderIndex() {
  alert("Rendered")
}

function compileFranchiseTemplate() {
  franchiseTemplate = Handlebars.compile($("#franchise-summary-template")[0].innerHTML);
};

function addLinkListeners() {
  $("ol li a").each(function() {
    this.addEventListener("click", function(event) {
      event.preventDefault();
      $.get(this, function(franchise) {
        if ($("#franchise-details-" + franchise.id).length === 0) {
          franchiseTemplate(franchise);
          $("li#" + franchise.id).append(franchiseTemplate(franchise));
        };
      });
    })
  });
};

