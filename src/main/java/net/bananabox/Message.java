package net.bananabox;

import jakarta.json.bind.annotation.JsonbDateFormat;
import java.time.LocalDateTime;

public record Message(User sender, @JsonbDateFormat("YYYY-MM-dd HH:mm:ss") LocalDateTime date, String content) {

  public Message {
    content = content.trim();
  }
}