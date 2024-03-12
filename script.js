document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;

    var formattedDate = new Date(date).toISOString().split('T')[0];

    var calendlyURL = 'https://calendly.com/sua-barbearia/' + service.toLowerCase().replace(' ', '-') + '?name=' + encodeURIComponent(name) + '&date=' + formattedDate;

    window.location.href = calendlyURL;
});

document.getElementById('calendlyButton').addEventListener('click', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;

    var formattedDate = new Date(date).toISOString().split('T')[0];

    var calendlyURL = 'https://calendly.com/sua-barbearia/' + service.toLowerCase().replace(' ', '-') + '?name=' + encodeURIComponent(name) + '&date=' + formattedDate;

    window.location.href = calendlyURL;
});

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmationMessage').classList.add('show');
    setTimeout(function() {
        document.getElementById('confirmationMessage').classList.remove('show');
    }, 3000);
});