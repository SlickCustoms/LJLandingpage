const yearNode = document.getElementById("current-year");
const cookieBanner = document.getElementById("cookie-banner");
const cookieAccept = document.getElementById("cookie-accept");
const cookieDismiss = document.getElementById("cookie-dismiss");
const cookieStorageKey = "pow-booking-cookie-consent-dismissed";

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const hideCookieBanner = () => {
  if (!cookieBanner) {
    return;
  }

  cookieBanner.classList.remove("is-visible");
  document.body.classList.remove("cookie-visible");
};

const showCookieBanner = () => {
  if (!cookieBanner) {
    return;
  }

  cookieBanner.classList.add("is-visible");
  document.body.classList.add("cookie-visible");
};

const persistCookieChoice = () => {
  try {
    window.localStorage.setItem(cookieStorageKey, "true");
  } catch (error) {
    console.warn("Cookie consent preference could not be saved.", error);
  }
};

const cookieChoiceSaved = (() => {
  try {
    return window.localStorage.getItem(cookieStorageKey) === "true";
  } catch (error) {
    return false;
  }
})();

if (!cookieChoiceSaved) {
  showCookieBanner();
}

[cookieAccept, cookieDismiss].forEach((button) => {
  if (!button) {
    return;
  }

  button.addEventListener("click", () => {
    persistCookieChoice();
    hideCookieBanner();
  });
});
