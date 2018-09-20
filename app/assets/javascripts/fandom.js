$(document).ready(function() {
  addIndexListeners();
});

function addIndexListeners() {
  $("ol li a").each(function() {
    this.addEventListener("click", function(event) {
      event.preventDefault();
      alert(this);
      debugger;
    })
  });
};

