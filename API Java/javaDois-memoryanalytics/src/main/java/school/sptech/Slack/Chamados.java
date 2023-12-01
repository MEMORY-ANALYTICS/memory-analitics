package school.sptech.Slack;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Chamados {
    public static void main(String[] args) throws IOException, InterruptedException {
// Substitua os valores abaixo pelos seus dados
        String apiUrl = "https://app.pipefy.com/pipes/303782075";
        String token = "eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJQaXBlZnkiLCJpYXQiOjE3MDE0NDQ2NDMsImp0aSI6ImRhMmRhYTRmLWEzODYt" +
                "NGRhNy04NDg5LWFjY2ZiZTE3OTczZiIsInN1YiI6MzAzMjQzMDQ0LCJ1c2VyIjp7ImlkIjozMDMyNDMwNDQsImVtYWlsIjoibWVt" +
                "b3J5YW5hbHl0aWNzQG91dGxvb2suY29tIiwiYXBwbGljYXRpb24iOjMwMDI5NzUyNCwic2NvcGVzIjpbXX0sImludGVyZmFjZV91" +
                "dWlkIjpudWxsfQ.SnMC0bVJpUM7n255s1mQQ9OndV8wYl-JLfbtPa0O223izEpJWDDmIf9QtDhPlbRGycM1ULfDxFGa2hln86Va7g";

// Crie o cliente HTTP
        HttpClient client = HttpClient.newHttpClient();

// Crie a solicitação GraphQL para criar um card
        String requestBody = "{ \"query\": \"mutation { createCard(input: { pipe_id: 303782075, title: \\\"Novo Card\\\" }) { card { id } } }\" }";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(apiUrl))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + token)
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();

// Envie a solicitação e obtenha a resposta
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

// Exiba a resposta
        System.out.println("Resposta da API: " + response.body());
    }
}
