var app = angular.module('myapp', ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider) {
	// static translation registration
	$translateProvider.translations("en", {
		"APP_TITLE": 			"Test for translation",
		"INTRODUCTION_TEXT": 	"Let's learn how to i18n"
	});

	$translateProvider.translations("ja", {
		"APP_TITLE": 			"翻訳の実験",
		"INTRODUCTION_TEXT": 	"多言語対応の開発方法を学ぼう"		
	});

	$translateProvider.useSanitizeValueStrategy('escaped');
	$translateProvider.preferredLanguage("en");

}])

.controller('ctrl', ["$scope", "$translate", function($scope, $translate) {
	$scope.jsTrSimple = $translate.instant('SERVICE');

	$scope.setLang = function(langKey) {
		$translate.use(langKey);
	};
}]);