(function(){
  "use strict";

  angular
  .module("wdinstagram", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .factory("EntryFactory", [
    "$resource",
    EntryFactoryFunction
  ])
  .controller("EntryIndexController", [
    "EntryFactory",
    EntryIndexControllerFunction
  ])
  .controller("EntryShowController", [
    "EntryFactory",
    "$stateParams",
    EntryShowControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("entryIndex", {
      url: '/entries',
      templateUrl: 'js/ng-views/index.html',
      controller: 'EntryIndexController',
      controllerAs: 'vm'
    })
    .state("entryShow", {
      url: '/entries/:id',
      templateUrl: 'js/ng-views/show.html',
      controller: 'EntryShowController',
      controllerAs: 'vm'
    })
  }

function EntryIndexControllerFunction(EntryFactory){
  this.entries = EntryFactory.query();
}

function EntryShowControllerFunction(EntryFactory, $stateParams){
  this.entry = EntryFactory.get({id: $stateParams.id})
}

function EntryFactoryFunction($resource){
  return $resource("http://localhost:3000/entries/:id.json")
}

})();









/////
