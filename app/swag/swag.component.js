// default component structure:
// angular.module('APP_NAME_HERE').component('COMPONENT_NAME_HERE', {});
angular.module("swagShop").component("swag", {
  templateUrl: "app/swag/swag.template.html",
  controllerAs: "swagCtrl",
  bindings: {
    item: "<", // I believes this means that the data flow is unidirectional.
    action: "&", //action as a function
    actionLabel: "@" //action label is a string here
  }
})
