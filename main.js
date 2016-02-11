﻿(function () {
    loadOptions();
    submitHandler();
})();

function submitHandler() {
    var $submitButton = $('#submitButton');

    $submitButton.on('click', function () {
        console.log('Submit');

        var return_to = getQueryParam('return_to', 'pebblejs://close#');
        document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));

    });
}

function loadOptions() {

    
    var $slantDirectionNumber = $('#slantDirectionNumber');
    var $backgroundImageSelection = $('#backgroundImageSelection');
	//var $bgPatternRadioButton = $('#bgPatternRadioButton');  


    if (localStorage.slantDirectionNumber) {
    
        $slantDirectionNumber[0].value = localStorage.slantDirectionNumber;
        $backgroundImageSelection[0].value = localStorage.backgroundImageSelection;
		//$bgPatternRadioButton[0].value = localStorage.bgPatternRadioButton;
    
    }
}

function getAndStoreConfigData() {

        
    var $slantDirectionNumber = $('#slantDirectionNumber');  
    var $backgroundImageSelection = $('#backgroundImageSelection');  
	//var $bgPatternRadioButton = $('#bgPatternRadioButton');
    
    var options = {
        
        slantDirectionNumber: $slantDirectionNumber.val(),
        backgroundImageSelection: $backgroundImageSelection.val(),
		//bgPatternRadioButton: $bgPatternRadioButton.val()

    };

    localStorage.slantDirectionNumber = options.slantDirectionNumber;
    localStorage.backgroundImageSelection = options.backgroundImageSelection;
//	localStorage.bgPatternRadioButton = options.bgPatternRadioButton;

    console.log('Got options: ' + JSON.stringify(options));
    return options;
}

function getQueryParam(variable, defaultValue) {
    var query = location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (pair[0] === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return defaultValue || false;
}