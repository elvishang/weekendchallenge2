console.log('js scourced')

$(document).ready(onReady);

var map = {
    Add: '+',
    Subtract: '-',
    Multiplication: '*',
    Division: '/'
}

function onReady() {
    $('.calculate').on('click', calculateResult)
}

function calculateResult(event) {
    event.preventDefault();
    var data = {
        x: $('.firstVal').val(),
        y: $('.secondVal').val(),
        type: $(this).attr('id')
    };
    
    $.ajax({
        type: "POST",
        url: "/calcuate",
        data: data
    }).done(function(response){
        console.log(response);
        $('.total').text(response);
        $('tbody').append('<tr><td>' + data.x + ' ' + map[data.type] + ' ' + data.y + ' = ' + response + '</td></tr>');
    })
}