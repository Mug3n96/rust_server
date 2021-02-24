import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Plugins");
  }

  async getHtml() {
    return `
      <h1>Plugins</h1>
    `; 
  }
}
