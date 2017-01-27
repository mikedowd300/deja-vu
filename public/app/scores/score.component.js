(function() {
  'use strict';

  angular.module('app')
    .component('score', {
      controller: gameController,
      templateUrl: '/app/scores/score.game.html'
    })
    .component('dejaHeader', {
      templateUrl: '/app/scores/score.header.html'
    })
    .component('dejaFooter', {
      templateUrl: '/app/scores/score.footer.html'
    });


    function gameController($http) {
      let vm = this;
      vm.notStarted = true;
      vm.cards = [];

      vm.$onInit = function(){
        vm.gameOver = false;
        $http.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`).then(function(response) {
          console.log(response.data.deck_id);
          $http.get(`https://deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=52`).then(function(result) {
            vm.cards = result.data.cards;
          })
        });
      }

      vm.startGame = function(event) {
        event.preventDefault();
        vm.notStarted = !vm.notStarted;
        for(let i = 0; i < 52; i++) {
          vm.cards[i].show = false;
        }
        console.log(vm.cards);
        vm.getRandomCard();
        vm.points = 0;
        vm.pointsLimit = vm.cardCount;
      }

      vm.getRandomCard = function() {
        vm.randomCard = Math.floor(Math.random() * 52);
        console.log(vm.randomCard);
      }

      vm.flipCard = function(card) {
        card.show = !card.show;

      }
      vm.flipCardBack = function(card) {
        vm.flipCard(card);
        vm.getRandomCard();
        vm.points++;
        console.log(card.code);
        console.log(vm.cards[vm.randomCard].code);
        if(card.code === vm.cards[vm.randomCard].code) {
          vm.pointsLimit--;
          if(vm.pointsLimit === 0){
            vm.gameOver = true;
            var obj = {
              name: vm.playerName,
              points: vm.points,
              card_count: 52
            }
            $http.post('/score', obj).then(function(response) {
              console.log(response.status);
            })
          }
        }
        console.log(vm.points);

      }
    }

}());
