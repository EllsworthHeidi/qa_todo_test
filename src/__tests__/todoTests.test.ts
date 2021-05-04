
  import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
  
  const chromedriver = require("chromedriver");
  
  const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
  
  
  const todoInput: By = By.className("new-todo");
  const todos: By = By.css(".li.todo");
  const todoLabel: By = By.className("label");
  const todoComplete: By = By.css(".input");
  const todoStar: By = By.className("star");
  const starBanner: By = By.className("starred");
  const todoCount: By = By.className("todo-count");
  const clearCompletedButton: By = By.css(".clear-completed");
  
  driver: WebDriver


describe("the todo app", () => {
  it("can add a todo", () => {});
  it("can remove a todo", () => {});
  it("can mark a todo with a star", () => {});
  it("has the right number of todos listed", () => {});
});
