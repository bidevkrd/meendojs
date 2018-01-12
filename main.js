console.log('injected');
function initapp() {
	console.log('initapp');
    $(document).ready(
        function() {
            console.log('complete');
        }
    );
}

function jq() {
	console.log('jq');	
    var s = document.createElement('script');
    s.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js');
    document.addEventListener('DOMContentLoaded', initapp, true);
	document.head.appendChild(s);
}

function injectform() {
    $('body').append(
        // $();
    );
}

function hideforeign() {

}

jq();