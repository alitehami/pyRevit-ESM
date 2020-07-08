let holder = null;
document
  .getElementById("inputfile")
  .addEventListener("change", async function () {
    let fr = new FileReader();
    fr.onload = function () {
      document.getElementById("output").textContent = fr.result;
      let x = JSON.parse(fr.result);
      console.log(x);

      holder = x;
    };
    fr.readAsText(this.files[0]);
  });

let download_click = document.getElementById("download_click");
let download = document.createElement("a");
download_click.addEventListener("click", function () {
  // download_click.preventDefault();
  console.log("downloading...")
  let data =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(holder));
  download.setAttribute("href", data);
  download.setAttribute("download", "updated_extension.json");
  download.click();
});
