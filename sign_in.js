$(document).ready(function() {
    $('#eyes').click(function() {
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if ($(this).hasClass('open')) {
            $(this).next().attr('type', 'text');
        } else {
            $(this).next().attr('type', 'password');
        }
    });
});