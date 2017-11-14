var myApp = angular.module('myApp', []);
myApp.controller("MyController", function($scope){
	debugger;
$('#importFile').on('change', function (evt) {
	debugger;
	var files = $(evt.currentTarget).get(0).files;
  });
});