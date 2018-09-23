$("#franchise-show").ready(function() {
  compileShowTemplate();
  renderFranchise(window.location.href);
});

function compileShowTemplate() {
  showTemplate = Handlebars.compile($("#franchise-show-template")[0].innerHTML);
};

function renderFranchise(href) {
  $.getJSON(href, function(franchise) {
    $("#franchise-show").prepend(showTemplate(franchise));
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


