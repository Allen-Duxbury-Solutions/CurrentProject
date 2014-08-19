document.addEventListener("DOMContentLoaded", function() { InformationChanger(); }, false);
function InformationChanger() {
$('.textWord_about').hide();

$('.link').click(function() {
    $('.textWord_about').hide();       
    $('.textWord_about[data-link=' + $(this).data('link') + ']').fadeIn({
        width: '200px'
    }, 300);
});
}