angular.module('app')
.service('UserService', [ function() {
  this.score = 0
  this.hasScore = () => this.score > 0
  this.resetScore = () => this.score = 0
  this.incScore = () => this.score = this.score + 1
}])
