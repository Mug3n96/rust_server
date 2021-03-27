import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Rules");
  }

  async getHtml() {
    return `
      <article class="article rules">
        <header class="article-header__container">
          <h1 class="article-header__title">Rules</h1>
        </header>
        <main>
          <div class="rules-section">
            <div>
              <p>You can do whatever you like in general. There are no punishments about raiding bases etc. but if possible just take the most necessery stuff out of raids and please don't destroy nonsense other players structures. We would be really thankful if you help new players and show them the server, instead of scaring them away.</p>
            </div>
            <div>
              <ul>
                <li>NO flaming, blaming</li>
                <li>NO rasism</li>
                <li>respect each others</li>
                <li>and the usual...</li>
              </ul>
            </div>
            <div>
              <p>By disregarding the rules, the modorators and admins are free to ban/kick you (proof is necessery). We never had problems with toxic player. Since the start of the server only nice people joined! :). We hope this will continue.</p>
            </div>
          </div>
        </main>
      </article>
    `;
  }
}
