import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Plugin");
  }

  data = [
    {
      title: "Anti Offline Raid",
      description:
        `This plugin should <span class="akzent-secondary">prevent</span> offline raiding to a certain degree. When players are <span class="akzent-secondary">more</span> than <span class="akzent-secondary">10 minutes afk</span> or <span class="akzent-secondary">offline</span>, the protection will kick in. It won't <span class="akzent-secondary">fully</span> protect you from offline raiding, it will <span class="akzent-secondary">dramatically</span> reduce the damage on the structures. In the <span class="akzent-secondary">most</span> szenarios the offline raider will not see a reason to <span class="akzent-secondary">waste resources</span> to raid a offlien base but for <span class="akzent-secondary">safety</span> build safe bases :P. Online raiding is <span class="akzent-secondary">not forbiden</span> so have fun! (But respect each other).`,
      configuration: `
        <ul>
          <li><span class="akzent-secondary">0</span> to <span class="akzent-secondary">1</span> hour <span class="akzent-secondary">0%</span> Damage on Structures</li>
          <li><span class="akzent-secondary">1</span> to <span class="akzent-secondary">24</span> hours <span class="akzent-secondary">10%</span> Damage on Structures</li>
          <li><span class="akzent-secondary">24</span> to <span class="akzent-secondary">48</span> hours <span class="akzent-secondary">20%</span> Damage on Structures</li>
          <li><span class="akzent-secondary">48</span> to <span class="akzent-secondary">168</span> hours <span class="akzent-secondary">100%</span> Damage on Structures</li>
          <li>From <span class="akzent-secondary">168</span> hours <span class="akzent-secondary">200%</span> Damage on Structures</li>
        </ul>
        <span>To see if a player is offline or afk use the <span class="akzent-secondary">/ao</span> command.</span>
      `,
      pluginAuthor: `<a class="article-button plugin" href="https://umod.org/user/Calytic">Calytic</a>`,
      linkToPlugin: `<a class="article-button plugin" href="https://umod.org/plugins/anti-offline-raid">Anti Offline Raid</a>`,
      link: "antiofflineraid",
    },
    {
      title: `Remover Tool`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `removertool`
    },
    {
      title: `Info Panel`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `infopanel`
    },
    {
      title: `Dangerous Treasures`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `dangeroustreasures`
    },
    {
      title: `Visual Cupboard`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `visualcupboard`
    },
    {
      title: `Stack Size Controller`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `stacksizecontroller`
    },
    {
      title: `Gather Manager`,
      description: ``,
      configuration: ``,
      pluginAuthor: ``,
      linkToPlugin: ``,
      link: `gathermanager`
    }
  ];

  findData() {
    let matchIndex = null;
    this.data.forEach((elem, index) => {
      if (elem.link === this.params.id) {
        matchIndex = index;
      }
    });

    if (matchIndex !== null) return this.data[matchIndex];
    else return null;
  }

  async getHtml() {
    const cont = this.findData();

    if (cont) {
      return `
        <h1 class="title-plugin">${cont.title}</h1>
        <div class="plugin-container">
          <div>
            <h3>Description:</h3>
            ${cont.description}
          </div>
          <div>
            <h3>Configuration:</h3>
            ${cont.configuration}
          </div>
          <div>
            <h3>Plugin:</h3>
            ${cont.linkToPlugin}
          </div>
          <div>
            <h3>Author of Plugin:</h3>
            ${cont.pluginAuthor}
          </div>
        </div>
      `;
    } else {
      window.location.href = "/404";
    }
  }
}
