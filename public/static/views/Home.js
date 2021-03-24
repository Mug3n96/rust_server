import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Home");
  }

  async getHtml() {
    return `
      <article class="article home">
        <header class="article-header__container">
          <h1 class="article-header__title">Welcome!</h1>
          <h3 class="article-header__subtitle">[EU|GER] Dio's Mansion</h3>
          <h5 class="article-header__subtitle">IP: 173.212.227.88:28015</h5>
        </header>
        <p>If you are looking for a fair and toxic free server, you came to the right place! We will envolve players as much as we can into the decisions.</p> 
        <p>If you dont like smth about the serversetting or you know a good plugin which you would love to see on this server, just tell us that. If we, or the players have nothing to say against it, we will include your idea into the server.</p>
        <ul>
          <li>server exists since 13.02.2021</li>
          <li>Wipe Day: 13.02.2021</li>
          <li>
            the next Wipe Day will be discussed with the players, but not before 1.04.2021
          </li>
          <li>resource gathering x2</li>
          <li>stacksize of chosen resources x10</li>
          <li>"Anti Offline Raid" plugin</li>
          <li>no admin abbuse</li>
          <li>active admins</li>
        </ul>
        <p>The server is really new and we would love to see players populating the server! Be one of the firsts who joining our community! :)</p>
      </article>
    `;
  }
}
