package net.bananabox;

public record User(String username, String avatar) {

  public User {
    username = username.trim();
    avatar = avatar.trim();
  }

  public static void main(String[] args) {
    var user = new User("Bananabox", "Bananabox");
    user.avatar();
  }
}