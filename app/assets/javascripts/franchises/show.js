$("#franchise-show").ready(function() {
  compileShowIndex();
});

function compileShowIndex() {
  showTemplate = Handlebars.compile($("#franchise-show")[0].innerHTML);
};



