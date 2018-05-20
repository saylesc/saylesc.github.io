/**
 * @namespace CORY namespace.
 */
var CORY = CORY || {};

// Create CORY Tree Structure for the blog
CORY.Tree = (function () {
   var coryNg = angular.module('coryBlog', ['ui.tree']);
   
   coryNg.controller('CoryTechController', ['$scope', function ($scope) {
      $scope.treeList = [{
         "id" : 1,
         "title" : "AngularJS",
         "nodes" : [
            {
               "id" : 1.1,
               "title" : "ReactJS",
               "nodes" : []
            },
            {
               "id" : 1.2,
               "title" : "CZML",
               "nodes" : []
            },
            {
               "id" : 1.3,
               "title" : "Python",
               "nodes" : [{
                     "id" : 1.4,
                     "title" : "Minecraft Pi",
                     "nodes" : []
               }]
            }]
         }, {
            "id" : 2,
            "title" : "Docker",
            "nodes" : []
         }, {
            "id" : 3,
            "title" : "Google Cloud Platform (GCP)",
            "nodes" : []
         }, {
            "id" : 4,
            "title" : "Amazon Web Services (AWS)",
            "nodes" : []
         }, {
            "id" : 5,
            "title" : "Kubernetes",
            "nodes" : []
         }, {
            "id" : 6,
            "title" : "Git",
            "nodes" : []
         }, {
            "id" : 7,
            "title" : "gitpitch",
            "nodes" : []
         }, {
            "id" : 8,
            "title" : "SVG",
            "nodes" : []
         }, {
            "id" : 9,
            "title" : "Raspberry Pi",
            "nodes" : []
         }, {
            "id" : 10,
            "title" : "OpenMap",
            "nodes" : []
         }
      ];
   }]);
})();
