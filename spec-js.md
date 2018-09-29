# Specifications for the Rails with jQuery Assessment

Specs:
- [x] Use jQuery for implementing new requirements
- [x] Include a show resource rendered using jQuery and an Active Model Serialization JSON backend.
-- Javascript/jquery for Franchise show resource is in app/assets/javascripts/franchises/show.js file
-- Franchise, Rating, and User Serializer classes are now defined in serializers folder
-- Handlebars templates for the franchise show view are written in script tags in the view
- [x] Include an index resource rendered using jQuery and an Active Model Serialization JSON backend.
-- Javascript/jquery for Franchise index resource is in app/assets/javascripts/franchises/index.js file
-- Handlebars templates for the franchise show view are written in script tags in the view
- [x] Include at least one has_many relationship in information rendered via JSON and appended to the DOM.
-- Clicking on individual franchise links in the franchise index page appends basic details about the ratings that `belong_to` to the franchise.
- [x] Use your Rails API and a form to create a resource and render the response without a page refresh.
-- The ratings show page contains a form that submits either a post or patch request to create/update the user's rating.
- [x] Translate JSON responses into js model objects.
-- Javascript Franchise and Rating classes are defined in assets/javascripts folder.
-- All JSON responses are converted to Franchise and/or Rating js model objects before object details are appended to DOM.
- [x] At least one of the js model objects must have at least one method added by your code to the prototype.
-- The Franchise js class contains a ratings_count_text() and average_rating_text() method that return strings to be appended to the DOM

Confirm
- [ ] You have a large number of small Git commits
- [ ] Your commit messages are meaningful
- [ ] You made the changes in a commit that relate to the commit message
- [ ] You don't include changes in a commit that aren't related to the commit message
