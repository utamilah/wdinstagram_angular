(function(){
  "use strict";

  let wdinstagramEntry = [
    {
      photo_url: 'http://www.designbolts.com/wp-content/uploads/2015/11/Inspiring-Brushpen-Crayola-Hand-Lettering-Examples-by-David-Milan-4.jpg',
      author: 'utamilah',
      body: 'Bibendum Tristique Ridiculus Dapibus Venenatis'
    },
    {
      photo_url: 'https://s-media-cache-ak0.pinimg.com/736x/40/67/7f/40677fec7b709578781439f74c6d7c8e.jpg',
      author: 'utamilah',
      body: 'Bibendum Tristique Ridiculus Dapibus Venenatis'
    },
    {
      photo_url: 'https://s-media-cache-ak0.pinimg.com/736x/4b/f2/06/4bf20658209e047fa8f83da7f3b534c8.jpg',
      author: 'utamilah',
      body: 'Bibendum Tristique Ridiculus Dapibus Venenatis'
    },
    {
      photo_url: 'http://68.media.tumblr.com/2e920673bf0ab959e1d642d5c9c7371e/tumblr_nifdqmWxDB1ryq9ado1_500.jpg',
      author: 'utamilah',
      body: 'Bibendum Tristique Ridiculus Dapibus Venenatis'
    }
  ]

  angular
  .module("wdinstagram", [
    "ui.router"
  ])
  .config(["$stateProvider", Router])
  .controller("WDInstagramController", [
    "$stateParams",
    "$state",
    WDInstagramControllerFunction
  ])

  function Router($stateProvider){
    $stateProvider.state("author", {
      url: '/:author',
      controller: 'WDInstagramController',
      controllerAs: 'vm',
      templateUrl: 'index.html'
    })
  }

  function WDInstagramControllerFunction($stateParams, $state){
    console.log($state)
    this.wdinstagrams = wdinstagramEntry
  }

})();









/////
