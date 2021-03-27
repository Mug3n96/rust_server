import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Info");
  }

  async getHtml() {
    return `
      <article class="article info">
        <header class="article-header__container">
          <h1 class="article-header__title">Info</h1>
        </header>
        <main>
          <div class="info-section">
            <h4>Server-IP: <span>173.212.227.88:25018</span></h4>
            <h4>Contact: <span>dios-mansion@outlook.de</span></h4>
            <p>Don't be shy to message us :). You can message us via e-mail, ingame or on Discord.</p>
          </div>
          <div>
            <iframe src="https://discord.com/widget?id=825037788058615808&theme=dark" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
        </main>
      </article>
    `;
  }
}
