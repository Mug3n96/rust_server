// views
import Home from "./views/Home.js";
import Plugins from "./views/Plugins.js";
import Plugin from "./views/Plugin.js";
import Info from "./views/Info.js";

// modules
import Hamburger from "./modules/hamburger.js";

// router start ------------------------

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));
};

const router = async () => {
  const routes = [
    // { path: "/error", view: () => console.log("404")},
    { path: "/", view: Home },
    { path: "/plugins", view: Plugins },
    { path: "/plugins/:id", view: Plugin },
    { path: "/info", view: Info},
    // { path: "/rules", view: () => console.log("Viewing Rules")},
    // { path: "/contact", view: () => console.log("Viewing Contact")}
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

// router end -----------------------

const burger = new Hamburger(
  document.querySelector("#burger_nav"),
  document.querySelector("#main_nav")
);

burger.init();
