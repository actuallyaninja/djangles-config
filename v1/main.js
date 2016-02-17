(function () {
    loadOptions();
	showHideImagesByPlatform(getURLParameter("platform"));
	submitHandler();
})();

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}


function submitHandler() {
    var $submitButton = $('#submitButton');
	var $submitButtonTop = $('#submitButtonTop');

	
    $submitButton.on('click', function () {
        console.log('Submit');

        var return_to = getQueryParam('return_to', 'pebblejs://close#');
        document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));

    });
	
	$submitButtonTop.on('click', function () {
        console.log('Submit');

        var return_to = getQueryParam('return_to', 'pebblejs://close#');
        document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));

    });

}

function loadOptions() {

    
    var $slantDirectionNumber = $('#slantDirectionNumber');
    //var $backgroundImageSelection = 0; //$('#backgroundImageSelection');
	var $bgPatternRadioButton = $('input[name="radio-1"]:checked').val();
	


    if (localStorage.slantDirectionNumber) {
    
        $slantDirectionNumber[0].value = localStorage.slantDirectionNumber;
        //$backgroundImageSelection[0].value = localStorage.backgroundImageSelection;
		$bgPatternRadioButton[0].value = $('input[name="radio-1"][value="' + localStorage.bgPatternRadioButton + '"]').prop('checked', true);
    }
	
	
}

function showHideImagesByPlatform(platform){
	
	if(platform=="aplite" || platform=="basalt" || platform=="chalk"){
		//nice!
	}
	else{
		platform = "basalt";
	}
	
	
	var x = document.getElementsByTagName("img");
	var i;
	for (i = 0; i < x.length; i++) {
		var img = x[i];
		img.src = platform + "-" + i.toString() + ".png";
		img.style.width = (platform == "chalk" ? "84px" : "72px");		
		img.style.height = "84px";
	}
}

function getAndStoreConfigData() {

        
    var $slantDirectionNumber = $('#slantDirectionNumber');  
    //var $backgroundImageSelection = 0; //$('#backgroundImageSelection');  
	var $bgPatternRadioButton = $('input[name="radio-1"]:checked').val();
	
    
    var options = {
        
        slantDirectionNumber: $slantDirectionNumber.val(),
        //backgroundImageSelection: 0, //$backgroundImageSelection.val(),
		bgPatternRadioButton: $bgPatternRadioButton

    };

    localStorage.slantDirectionNumber = options.slantDirectionNumber;
    //localStorage.backgroundImageSelection = options.backgroundImageSelection;
	localStorage.bgPatternRadioButton = options.bgPatternRadioButton;

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