class React {
  constructor() {
    this.library = "React"
    this.server = "https://localhost:3000";

    // Requirement
    document
      .querySelector("button")
      .addEventListener("click", this.handleClicked.bind(this));
  }
  handleClicked(){
    console.log("Button Clicked");
    console.log(this.server);
  }
}

const app =new React