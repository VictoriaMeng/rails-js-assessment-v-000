$("#franchise-show").ready(function() {
  compileShowTemplate();
  renderFranchise();
});

function compileShowTemplate() {
  showTemplate = Handlebars.compile($("#franchise-show-template")[0].innerHTML);
};

function renderFranchise() {
  $.getJSON(window.location.href, function(franchise) {
    $("#franchise-show").prepend(showTemplate(franchise));
  });
};

function showPrevious() {
  alert("Previous!");
};

function showNext() {
  alert("Next!")
};


