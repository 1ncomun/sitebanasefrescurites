<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salão de Cabeleireiro</title>
    <style>
        /* Estilos CSS existentes omitidos por brevidade */
        /* Novos estilos para o tema escuro */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #222;
            color: #fff;
        }

        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #333;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        h1, h2 {
            color: #007bff;
            text-align: center;
            margin-bottom: 20px;
            font-weight: normal;
        }

        #servicesList {
            list-style: none;
            padding: 0;
            text-align: center;
            margin-bottom: 30px;
        }

        #servicesList li {
            margin-bottom: 10px;
            font-size: 1.2em;
            transition: color 0.3s;
            cursor: pointer;
        }

        #servicesList li:hover {
            color: #ff00ff;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        label {
            margin-bottom: 5px;
            font-weight: bold;
            color: #ccc;
        }

        input, select {
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #777;
            border-radius: 3px;
            background-color: #444;
            color: #fff;
        }

        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        button:hover {
            background-color: #0056b3;
        }

        #confirmationMessage {
            text-align: center;
            margin-top: 20px;
            padding: 10px;
            background-color: #007bff;
            border: 1px solid #0056b3;
            border-radius: 3px;
            display: none;
            transition: opacity 0.3s;
        }

        #confirmationMessage.show {
            display: block;
            opacity: 1;
        }

        .barber-link {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: #007bff;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }

        .barber-link:hover {
            color: #ff00ff;
        }

        .additional-info {
            margin-top: 30px;
            text-align: center;
        }

        .additional-info p {
            margin-bottom: 10px;
            color: #ccc;
        }

        .contact-info {
            margin-top: 30px;
            text-align: center;
        }

        .contact-info p {
            margin-bottom: 5px;
            color: #777;
        }

        .social-media {
            margin-top: 20px;
            text-align: center;
        }

        .social-media a {
            display: inline-block;
            margin: 0 10px;
            color: #007bff;
            transition: color 0.3s;
        }

        .social-media a:hover {
            color: #ff00ff;
        }

        .customer-review {
            border: 1px solid #777;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 20px;
        }

        .customer-review .rating {
            color: #ff0;
            font-size: 20px;
        }
    </style>
</head>
<body>
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/1gorb/corte', text: 'Agende seu horário ', color: '#0069ff', textColor: '#92fdbb', branding: undefined }); }</script>
    <div class="container">
        <div class="calendly-link" id="https://calendly.com/1gorb/corte">
            <h2>Agende diretamente pelo Calendly</h2>
            <p>Clique no botão abaixo para agendar seu horário diretamente no Calendly.</p>
            <a href="#" id="calendlyButton">Agendar no Calendly</a>
        <h1>Salão de Cabeleireiro</h1>
        <h2>Serviços</h2>
        <ul id="servicesList">
            <li>Corte de Cabelo - R$ 50,00</li>
            <li>Coloração - R$ 80,00</li>
            <li>Penteado - R$ 60,00</li>
        </ul>
        <h2>Agendamento</h2>
        <form id="appointmentForm">
            <div>
                <label for="name">Nome:</label>
                <input type="text" id="name" required>
            </div>
            <div>
                <label for="service">Serviço:</label>
                <select id="service" required>
                    <option value="">Selecione um serviço</option>
                    <option value="Corte de Cabelo">Corte de Cabelo</option>
                    <option value="Coloração">Coloração</option>
                    <option value="Penteado">Penteado</option>
                </select>
            </div>
            <div>
                <label for="date">Data:</label>
                <input type="date" id="date" required>
            </div>
            <div>
                <button type="submit">Agendar</button>
            </div>
        </form>
        <div id="confirmationMessage">Você será redirecionado!</div>
        <a href="barber1.html" class="barber-link">Lucas</a>
        <a href="barber2.html" class="barber-link">Matheus</a>

        <div class="additional-info">
            <h2>Informações Adicionais</h2>
            <p>katchaunnnnn.</p>
            <p>katchaunnnnn.</p>
        </div>
        <div class="contact-info">
            <h2>Informações de Contato</h2>
            <p>Telefone: (51) 98450-425</p>
            <p>Email: no7comun@gmail.com</p>
            <p>Endereço: Rua Exemplo, 123 - Bairro - Cidade</p>
        </div>

        <div class="social-media">
            <h2>Nos Siga nas Redes Sociais</h2>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
        </div>
        
        <div class="customer-review">
            <h3>Michel viado</h3>
            <p>sou viado👍</p>
            <div class="rating">★</div>
        </div>
        
        <div class="customer-review">
            <h3>Igor Felipe</h3>
            <p>Excelente atendimento e resultados impecáveis. Recomendo muito!</p>
            <div class="rating">★★★★★</div>
        </div>
    </div>
    <script>document.getElementById('appointmentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var service = document.getElementById('service').value;
        var date = document.getElementById('date').value;

        var formattedDate = new Date(date).toISOString().split('T')[0];

        var calendlyURL = 'https://calendly.com/1gorb/corte' + service.toLowerCase().replace(' ', '-') + '?name=' + encodeURIComponent(name) + '&date=' + formattedDate;

        window.location.href = calendlyURL;
    });

    document.getElementById('calendlyButton').addEventListener('click', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var service = document.getElementById('service').value;
        var date = document.getElementById('date').value;

        var formattedDate = new Date(date).toISOString().split('T')[0];

        var calendlyURL = 'https://calendly.com/sua-barbearia/';

        window.location.href = calendlyURL;
    });</script>

    <script>
        document.getElementById('appointmentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('confirmationMessage').classList.add('show');
            setTimeout(function() {
                document.getElementById('confirmationMessage').classList.remove('show');
            }, 3000);
        });
    </script>
</body>
</html>
