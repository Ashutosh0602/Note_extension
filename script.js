const api = async () => {
  await fetch("http://localhost:3300/", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      document.getElementById("hello").innerText = res.message;
    });
};
api();

// Get reference to background page.
const bgPage = chrome.extension.getBackgroundPage();
// Sign in with popup, typically attached to a button click.
function signIn() {
  bgPage.signInWithPopup();
}
