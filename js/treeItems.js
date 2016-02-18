/**
 * @namespace CORY namespace.
 */
var CORY = CORY || {};

// Create CORY Tree Structure for the blog
CORY.Tree = (function () {
   var coryNg = angular.module('coryBlog', ['ui.tree']);
   
   coryNg.controller('CoryTreeController', ['$scope', function ($scope) {
      $scope.treeList = [{
         "id" : 1,
         "title" : "Tree Item 1",
         "nodes" : [
            {
               "id" : 1.1,
               "title" : "Tree Item 1.1",
               "nodes" : []
            },
            {
               "id" : 1.2,
               "title" : "Tree Item 1.2",
               "nodes" : []
            }]
         }, {
            "id" : 2,
            "title" : "Tree Item 2",
            "nodes" : []
         }, {
            "id" : 3,
            "title" : "Tree Item 3",
            "nodes" : []
         }, {
            "id" : 4,
            "title" : "Tree Item4",
            "nodes" : []
         }
      ];
   }]);
})();