package school.sptech.Slack;

import com.slack.api.Slack;
import com.slack.api.methods.SlackApiException;
import com.slack.api.methods.request.chat.ChatPostMessageRequest;
import com.slack.api.methods.response.chat.ChatPostMessageResponse;

import java.io.IOException;

public class Alertas {
    private final String token = "xoxb-5803756490416-6261023221495-T9bWCnU0GZlZDnP9iSrKUNxk";
    private final String channelId = "C0682SLMA74";

    public Alertas() {
    }

    public void alertarCanal(String mensagem) {
        try {
            Slack slack = Slack.getInstance();
            ChatPostMessageRequest.ChatPostMessageRequestBuilder messageRequest = ChatPostMessageRequest.builder()
                    .token(token)
                    .channel(channelId)
                    .text("""
            ALERTA!!!
            ---------------------------
            %s
            
            --------------------------
            """.formatted(mensagem));

            ChatPostMessageResponse response = slack.methods().chatPostMessage(messageRequest.build());

            if (response.isOk()) {
                System.out.println("Mensagem enviada com sucesso!");
            } else {
                System.err.println("Erro ao enviar a mensagem: " + response.getError());
            }
        } catch (IOException | SlackApiException e) {
            e.printStackTrace();
        }
    }
}
