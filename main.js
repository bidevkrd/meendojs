function initapp() {
    $(document).ready(
        function() {
            console.log('complete');
        }
    );
}

function jq() {
    var s = document.createElement('script');
    s.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js');
    document.addEventListener('DOMContentLoaded', initapp, true);
    document.head.appendChild(s);
}

function injectform() {
    $('body').append(
        $();
    );
}

function hideforeign() {

}

jq();