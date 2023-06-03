console.log("go chrome go");

document.addEventListener("copy", (e) => {
  var len = document.querySelectorAll("h1");
  console.log(window.getSelection().toString());
  console.log(len[0].innerHTML);

  const api = async () => {
    await fetch("http://localhost:3300/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };
  api();

  //   console.log(e.target.innerText);
});
document.addEventListener("select", (e) => console.log(e));
