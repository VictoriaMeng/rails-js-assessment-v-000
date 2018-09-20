$(document).ready(function() {
  compileFranchiseTemplate();
  addLinkListeners();
});

function compileFranchiseTemplate() {
  franchiseTemplate = Handlebars.compile($("#franchise-summary-template")[0].innerHTML);
};

function addLinkListeners() {
  $("ol li a").each(function() {
    this.addEventListener("click", function(event) {
      event.preventDefault();
      $.get(this, function(franchise) {
        debugger;
        franchiseTemplate(franchise);
        $("li#" + franchise.id).append(franchiseTemplate(franchise));
      });
    })
  });
};

