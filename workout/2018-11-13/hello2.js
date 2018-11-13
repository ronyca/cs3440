$(function() {
    var greeting = $("<h1 id=\"greeting\">Look Mom, No Hands!</h1>");
    $("body").append(greeting);
    greeting.css({
        height: '3em',
        width: '15em',
        backgroundColor: 'rgb(63, 184, 255)',
        border: '10px solid rgb(0, 51, 102)',
        color: 'white'
    });
    var p = $("<p></p>");
    p.css({
        marginTop: '1em'
    });
    var b = $("<b>The border property is: </b>");
    var s = $("<span></span>");
    p.append(b);
    p.append(s);
    s.text(greeting.css("border"));
    $("body").append(p);
});