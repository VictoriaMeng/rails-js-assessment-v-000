$("#franchise-index").ready(function() {
  compileIndexTemplate();
  compileDetailsTemplate();
  renderIndex();
});

function compileIndexTemplate() {
  indexTemplate = Handlebars.compile($("#franchise-index-template")[0].innerHTML);
};

function compileDetailsTemplate() {
  detailsTemplate = Handlebars.compile($("#franchise-details-template")[0].innerHTML);
};

function renderIndex() {
  $.getJSON("/franchises", function(franchises) {
    $("#franchise-index").append(indexTemplate(franchises));
    addLinkListeners();
  });
};

function addLinkListeners() {
  $("ol li a").each(function() {
    this.addEventListener("click", function(event) {
      event.preventDefault();
      $.getJSON(this, function(franchise) {
        if ($("#franchise-details-" + franchise.id).length === 0) {
          $("li#" + franchise.id).append(detailsTemplate(franchise));
        };
      });
    });
  });
};

