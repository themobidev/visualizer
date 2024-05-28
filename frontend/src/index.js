import "./styles/main.scss";

// // helpers
// import { toggleSidebar, toggleMenu, stickyNav} from "./functions/scripts";
// // Page Components & Modules
// import Sidebar from './templates/partials/body/sidebar';
// import Wrapper from './templates/partials/body/wrapper';
// import Section from './templates/partials/section';
// import Profile from './views/profile';
// import Blog from './views/blog'
// import Grid from './views/grid';
// import mobileNav from "./templates/partials/body/mobileNav";

// require('angular');
// require('ngstorage');
// require('angular-bootstrap-select');
// require('angular-sanitize');
import initCanvas from "./utils/initCanvas";

const visualBuilder = angular.module("visualBuilder", ["ngStorage", "ngSanitize", "angular-bootstrap-select", "ngDropzone"]);
visualBuilder.controller("ConfigCtrl", ["$scope", "$http", "$localStorage", function(e, t, o) {}])
(function() {
  initCanvas();
  jQuery(".preloaderimg").fadeOut(),
  jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function() {
      jQuery(this).remove()
  })

})();
  



