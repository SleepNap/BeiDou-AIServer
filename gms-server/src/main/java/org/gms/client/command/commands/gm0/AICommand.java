package org.gms.client.command.commands.gm0;

import org.gms.client.Client;
import org.gms.client.command.Command;
import org.gms.manager.ServerManager;
import org.gms.service.AIService;

public class AICommand extends Command {
    private final AIService aiService = ServerManager.getApplicationContext().getBean(AIService.class);

    {
        setDescription("Chat with AI");
    }

    @Override
    public void execute(Client client, String[] params) {
        String chatMessage = String.join(" ", params);
        String result = aiService.chat(client.getPlayer().getId(), chatMessage);
        if (result != null) {
            client.getPlayer().message(result);
        }
    }
}
