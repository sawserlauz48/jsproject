import PAGES from "../models/pageModel.js";

//making var for pages
const HOMEPAGELINK = document.getElementById(PAGES.HOME);
const ABOUTPAGELINK = document.getElementById(PAGES.ABOUT);
const REGISTERPAGELINK = document.getElementById(PAGES.REGISTER);
const LOGINPAGELINK = document.getElementById(PAGES.LOGIN);
// const PAGE404LINK = document.getElementById(PAGES.PAGE404);
//function to change classes
const pageChange = (pageToShow) => {
  HOMEPAGELINK.classList.remove("d-block");
  ABOUTPAGELINK.classList.remove("d-block");
  REGISTERPAGELINK.classList.remove("d-block");
  LOGINPAGELINK.classList.remove("d-block");
  // PAGE404LINK.classList.remove("d-block");
  HOMEPAGELINK.classList.add("d-none");
  ABOUTPAGELINK.classList.add("d-none");
  REGISTERPAGELINK.classList.add("d-none");
  LOGINPAGELINK.classList.add("d-none");
  // PAGE404LINK.classList.add("d-none");

  switch (pageToShow) {
    case PAGES.HOME:
      HOMEPAGELINK.classList.remove("d-none");
      HOMEPAGELINK.classList.add("d-block");
      break;
    case PAGES.ABOUT:
      ABOUTPAGELINK.classList.remove("d-none");
      ABOUTPAGELINK.classList.add("d-block");
      break;
    case PAGES.LOGIN:
      LOGINPAGELINK.classList.remove("d-none");
      LOGINPAGELINK.classList.add("d-block");
      break;
    case PAGES.REGISTER:
      REGISTERPAGELINK.classList.remove("d-none");
      REGISTERPAGELINK.classList.add("d-block");
      break;
    // case PAGES.PAGE404:
    //   PAGE404LINK.classList.remove("d-none");
    //   PAGE404LINK.classList.add("d-block");
    //   break;
  }
};

export { pageChange };
