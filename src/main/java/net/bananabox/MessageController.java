package net.bananabox;

import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Path("/api/messages")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class MessageController {
  private final ArrayList<Message> messages;

  public MessageController() {
    messages = new ArrayList<>();
    messages.add(new Message(new User("CelestBoy", ""), LocalDateTime.now(), "Coucou"));
    messages.add(new Message(new User("CelestBoy", ""), LocalDateTime.now(), "ça va ?"));
    messages.add(new Message(new User("toto", ""), LocalDateTime.now(), "non"));
    messages.add(new Message(new User("CelestBoy", ""), LocalDateTime.now(), "ah ?"));
    messages.add(new Message(new User("toto", ""), LocalDateTime.now(), "ouais c'est bof"));
    messages.add(new Message(new User("toto", ""), LocalDateTime.now(), "regarde ça : https://music.youtube.com/watch?v=tcYodQoapMg&list=OLAK5uy_m2xdwqi_yo13jqJ7tqraoJX3q1aU2BbPw"));
    messages.add(new Message(new User("toto", ""), LocalDateTime.now(), "en plus, www.test.com et https://www.google.com/ sont mes sites préférés"));
  }

  @GET
  public List<Message> getMessages() {
    return messages;
  }

  @POST
  public List<Message> addMessage(Message message) {
    messages.add(message);
    return messages;
  }
}
