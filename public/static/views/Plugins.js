import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Plugins");
  }

  async getHtml() {
    return `
      <h1 class="title-plugins">Plugins</h1>
      <div class="articles-container plugin">
        <article class="article plugin">
          <header class="article-header__container">
            <h3 class="article-header__title">Anti Offline Raid</h3>
            <h5>Plugin which makes offline raiding much harder.</h5>
          </header>
          <a href="plugins/antiofflineraid" 
            class="article-button plugin">read more</a>
        </article>
        <article class="article plugin">
          <header class="article-header__container">
            <h3 class="article-header__title">Remover Tool</h3>
            <h5>Removes with "/remove" commando structures.</h5>
          </header>
          <a href="plugins/removertool" 
            class="article-button plugin">read more</a>
        </article>
        <article class="article plugin">
          <header class="article-header__container">
            <h3 class="article-header__title">Info Panel</h3>
            <h5>Removes with "/remove" commando structures.</h5>
          </header>
          <a href="plugins/infopanel"
            class="article-button plugin">read more</a>
        </article>
        <article class="article plugin">
          <header class="article-header__container">
            <h3 class="article-header__title">Dangerous Treasures</h3>
            <h5>Removes with "/remove" commando structures.</h5>
          </header>
          <a href="plugins/dangeroustreasures"
            class="article-button plugin">read more</a>
        </article>
        <article class="article plugin">
          <header class="article-header__container">
            <h3 class="article-header__title">Visual Cupboard</h3>
            <h5>Removes with "/remove" commando structures.</h5>
          </header>
          <a href="plugins/visualcupboard"
            class="article-button plugin">read more</a>
        </article>
        <article class="article plugin">
          <header class="article-header__container">
            <h3 class="article-header__title">Stack Size Controller</h3>
            <h5>Removes with "/remove" commando structures.</h5>
          </header>
          <a href="plugins/stacksizecontroller"
            class="article-button plugin">read more</a>
        </article>
        <article class="article plugin">
          <header class="article-header__container">
            <h3 class="article-header__title">Gather Manager</h3>
            <h5>Removes with "/remove" commando structures.</h5>
          </header>
          <a href="gathermanager"
            class="article-button plugin">read more</a>
        </article>
      </div>
    `; 
  }
}
