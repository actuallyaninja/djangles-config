(function () {
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

    //var $slantDirectionSelection = $('#slantDirectionSelection');
    var $slantDirectionNumber = $('#slantDirectionNumber');
    var $backgroundImageSelection = $('#backgroundImageSelection');
    //var $backgroundColorPicker = $('#backgroundColorPicker');


    if (localStorage.slantDirectionNumber) {
        // $slantDirectionSelection[0].checked = localStorage.slantDirection == 'true';
        $slantDirectionNumber[0].value = localStorage.slantDirectionNumber;
        $backgroundImageSelection[0].value = localStorage.backgroundImageSelection;
        //$backgroundColorPicker[0].value = localStorage.backgroundColor;
    }
}

function getAndStoreConfigData() {

    
    //var $slantDirectionNumber = $('#slantDirectionNumber');
    var $slantDirectionNumber = $('#slantDirectionNumber').tabs();

    var $backgroundImageSelection = $('#backgroundImageSelection');
    
    var options = {

        
        slantDirectionNumber: $slantDirectionNumber.val(),
        //slantDirectionNumber: $slantDirectionNumber.tabs('option', 'active'),
        backgroundImageSelection: $backgroundImageSelection.val()
        

    };

    //localStorage.slantDirection = options.slantDirection;
    localStorage.slantDirectionNumber = options.slantDirectionNumber;
    localStorage.backgroundImageSelection = options.backgroundImageSelection;
    //localStorage.backgroundColor = options.backgroundColor;

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