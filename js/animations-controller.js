'use strict';

var AnimationsCtrl = function($rootScope, $document, $scope) {

	$scope.animation = {};
	$scope.animation.current = 'fadeIn';
	$scope.animation.previous = $scope.animation.current;

	// only required for dynamic animations
	$scope.changeAnimation = function() {

		var elements = document.getElementsByClass('aboutus');
		var $elements = angular.element(elements);

		$elements.removeClass('animated ' + $scope.animation.previous);
		$elements.addClass('hidden');

		$scope.animation.previous = $scope.animation.current;
		$document[0].dispatchEvent(new CustomEvent('scroll'));
	};

	$scope.descriptions = [
		{
			title: 'About Us',
      subtitle: 'Description 1',
			description: "Chrysalis Medical Communications is the newest company within the Nucleus Global family. We are a full-service agency dedicated to partnering with our clients to provide high-quality scientific and strategic medical communications support. "
		},
		{
      title: 'About Us',
      subtitle: 'Description 2',
			description: "Our experienced in-house scientific team all hold advanced degrees, and our dedicated client services team has decades of combined expertise in managing publication plans, advisory boards, patient education pieces, and more. "
		},
		{
      title: 'About Us',
      subtitle: 'Description 3',
			description: "As part of Nucleus Global, a company with 30 years of experience in medical communications, we also provide cutting-edge digital options supported by our in-house studio team, 3-D designers, and application developers to transform complex information into clear and impactful medical communications deliverables. "
		}
	];

	$scope.animateElementIn = function($el) {
		$el.removeClass('hidden');
		$el.addClass('animated ' + $scope.animation.current);
	};

	$scope.animateElementOut = function($el) {
		$el.addClass('hidden');
		$el.removeClass('animated ' + $scope.animation.current);
	};
};

angular.module('animations').controller('AnimationsCtrl', AnimationsCtrl);
