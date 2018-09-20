$(document).ready(function() {
  addIndexListeners();
  testTemplate();
});

function testTemplate() {
  const test = {name: "MY NAME IS HERE"}
  const template = Handlebars.compile($("#test-template")[0].innerHTML);
  const html = template(test);
  $("body").append(html);
}

function addIndexListeners() {
  $("ol li a").each(function() {
    this.addEventListener("click", function(event) {
      event.preventDefault();
      alert(this);
      // debugger;
    })
  });
};

