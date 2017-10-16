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
    $('.numberButton').on('click', numberButtonClick)
    $('#clear').on('click', clear)
}

function clear() {
    $('.firstVal').val('');
    $('.secondVal').val('');
    // $('tbody').text('');
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
        url: "/calculate",
        data: data
    }).done(function(response){
        console.log(response);
        $('.total').text(response);
        $('tbody').append('<tr><td>' + data.x + ' ' + map[data.type] + ' ' + data.y + ' = ' + response + '</td></tr>');
        clear();
    })
}

// function numberButtonClick(){
//     // get this number & append to current number output
//     $( '.firstVal' ).text( $('.numberButton').data('number'));
// }