$(document).ready(function() {
    $(".container").hide();

    $(".btn").on('click', function(){
        $(".container").show();
    });

    $(".container").on('click', '.delete', function(){
        $(this).parent().remove();
    });
});


$.ajax({
    type: "GET",
    url: "/kittyfoofoo",
    success: function (data) {
        appendDom(data);
    }
});


function appendDom(data) {
    for (var i = 0; i < data.people.length; i++) {
        $(".container").append('<div class="person well"></div>');

        var $el = $(".container").children().last();

        $el.append('<p class="name">' + data.people[i].name + '</p>');
        $el.append('<p class="position">' + data.people[i].position + '</p>');
        $el.append('<p class="length">' + data.people[i].location + '</p>');
        $el.append('<img class="image" src="' + data.people[i].imageURL + '">');
        $el.append('<button class="delete">Delete</button>');
    }
}

