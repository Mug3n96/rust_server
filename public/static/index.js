import Home from "./views/Home.js";
import Plugins from "./views/Plugins.js";

const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    // { path: "/error", view: () => console.log("404")},
    { path: "/", view: Home },
    { path: "/plugins", view: Plugins },
    // { path: "/info", view: () => console.log("Viewing Info")},
    // { path: "/rules", view: () => console.log("Viewing Rules")},
    // { path: "/contact", view: () => console.log("Viewing Contact")}
  ];

  const potentialMatches = routes.map(route => {
    return {
      route: route,
      isMatch: location.pathname === route.path
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click",  e => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});

