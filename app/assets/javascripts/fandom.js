$(document).ready(function() {
  compileFranchiseTemplate();
  addLinkListeners();
  // testTemplate();
});

// function testTemplate() {
//   const test = {name: "MY NAME IS HERE"}
//   const template = Handlebars.compile($("#test-template")[0].innerHTML);
//   const html = template(test);
//   $("body").append(html);
// }

function compileFranchiseTemplate() {
  franchiseTemplate = Handlebars.compile($("#franchise-summary-template")[0].innerHTML);
};

function addLinkListeners() {
  $("ol li a").each(function() {
    this.addEventListener("click", function(event) {
      event.preventDefault();
      $.get(this, function(franchise) {
        franchiseTemplate(franchise);
        $("li#" + franchise.id).append(franchiseTemplate(franchise));
      });
    })
  });
};

