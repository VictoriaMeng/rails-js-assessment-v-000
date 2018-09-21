$(document).ready(function() {
  compileIndexTemplate();
  // compileShowTemplate();
  renderIndex();
  // addLinkListeners();
});

function compileIndexTemplate() {
  indexTemplate = Handlebars.compile($("#franchise-index-template")[0].innerHTML);
}

function renderIndex() {
  $.getJSON("/franchises", function(franchises) {
    $("#franchise-index").append(indexTemplate(franchises));
  });
}

// function compileShowTemplate() {
//   showTemplate = Handlebars.compile($("#franchise-show-template")[0].innerHTML);
// };

// function appendDetails() {
//   // alert("test");
//   this.preventDefault;
//   debugger;
//   $.get(this, function(franchise) {
//     if ($("#franchise-details-" + franchise.id).length === 0) {
//       $("li#" + franchise.id).append(showTemplate(franchise));
//     };
//   });
// }

// function addLinkListeners() {
//   // debugger;
//   $("ol li a").each(function() {
//     this.addEventListener("click", function(event) {
//       event.preventDefault();
//       $.get(this, function(franchise) {
//         if ($("#franchise-details-" + franchise.id).length === 0) {
//           $("li#" + franchise.id).append(showTemplate(franchise));
//         };
//       });
//     })
//   });
// };
