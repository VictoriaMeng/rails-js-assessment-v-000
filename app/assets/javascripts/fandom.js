$(document).ready(function() {
  addIndexListeners();
});

function addIndexListeners() {
  $("ol li a").each(function() {
    this.addEventListener("click", function() {
      alert(this);
    })
  });
};

