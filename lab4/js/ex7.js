$('#quizForm').submit(function(event) {
    event.preventDefault(); // Prevent page reloading

    var selectedAnswer = $('#inventor').val();
    var resultDiv = $('#result');

    if (selectedAnswer === 'john') {
        resultDiv.text('Correct! John Resig invented jQuery.');
    } else {
        resultDiv.text('Wrong answer. Try again.');
    }
});
