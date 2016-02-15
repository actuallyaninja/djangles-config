(function () {
    loadOptions();
    showHideImagesByPlatform();
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
	var $bgPatternRadioButton = $('input[name="radio-1"]:checked').val();
	


    if (localStorage.slantDirectionNumber) {
    
        $slantDirectionNumber[0].value = localStorage.slantDirectionNumber;
        $backgroundImageSelection[0].value = localStorage.backgroundImageSelection;
		//$bgPatternRadioButton[0].value = localStorage.bgPatternRadioButton;
		$bgPatternRadioButton[0].value = $('input[name="radio-1"][value="' + localStorage.bgPatternRadioButton + '"]').prop('checked', true);
    }
	
	
}

function showHideImagesByPlatform(){
	
	var platform = "basalt";
	
	var x = document.getElementsByTagName("img");
	var i;
	for (i = 0; i < x.length; i++) {
		var img = x[i];
		//if (img.name.search(platform) < 0 ){
			//img.style.visibility = 'hidden';
			//img.style.align = 'center';
		//}
		img.src = platform + "-" + i.toString() + ".png";
		//img.style.class = (platform == "chalk" ? "shrinksq" : "shrink");
		if(platform == "chalk"){
			img.style.class="shrinksq";
		}
		else{
			img.style.class="shrink";
		}
		console.log("img.src="+img.src + ", img.style.class=" + img.style.class);
	}
	

}

function getAndStoreConfigData() {

        
    var $slantDirectionNumber = $('#slantDirectionNumber');  
    var $backgroundImageSelection = $('#backgroundImageSelection');  
	var $bgPatternRadioButton = $('input[name="radio-1"]:checked').val();
	
    
    var options = {
        
        slantDirectionNumber: $slantDirectionNumber.val(),
        backgroundImageSelection: $backgroundImageSelection.val(),
		bgPatternRadioButton: $bgPatternRadioButton

    };

    localStorage.slantDirectionNumber = options.slantDirectionNumber;
    localStorage.backgroundImageSelection = options.backgroundImageSelection;
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