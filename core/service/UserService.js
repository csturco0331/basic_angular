angular.module('app')
.service('UserService', [ function() {
<<<<<<< HEAD
  this.score = 0
  this.hasScore = () => this.score > 0
  this.resetScore = () => this.score = 0
  this.incScore = () => this.score = this.score + 1
=======

this.clear = () => {
  this.name = ''
}


>>>>>>> e7318e210a1065974dfd344acac956bbc9c8904e
}])
