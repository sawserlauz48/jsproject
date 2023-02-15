import PAGES from "./models/pageModel.js";
import { pageChange } from "./routes/router.js";

// linking links to divs
const navLogoLink = document.getElementById("nav-logo-link");
const navHomeLink = document.getElementById("nav-homepage-link");
const navAboutUsLink = document.getElementById("nav-aboutus-link");
const navRigesterLink = document.getElementById("nav-rigister-link");
const navLoginLink = document.getElementById("nav-login-link");

navLogoLink.addEventListener("click", () => {
  pageChange(PAGES.HOME);
});
navHomeLink.addEventListener("click", () => {
  pageChange(PAGES.HOME);
});
navAboutUsLink.addEventListener("click", () => {
  pageChange(PAGES.ABOUT);
});
navRigesterLink.addEventListener("click", () => {
  pageChange(PAGES.REGISTER);
});
navLoginLink.addEventListener("click", () => {
  pageChange(PAGES.LOGIN);
});
