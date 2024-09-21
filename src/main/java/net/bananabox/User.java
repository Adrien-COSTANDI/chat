package net.bananabox;

public record User(String username, String avatar) {

  public User {
    username = username.trim();
    avatar = avatar.trim();
  }
}