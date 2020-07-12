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
let download_json = document.getElementById("submit_json");
let download_yaml = document.getElementById("submit_yaml");



let download = document.createElement("a");



download_click.addEventListener("click", function () {
  holder = editor.getValue();
  // download_click.preventDefault();
  console.log("downloading...");
  let data =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(holder));
  download.setAttribute("href", data);
  download.setAttribute("download", "updated_extension.json");
  download.click();
});


download_json.addEventListener("click", function () {
  // download_json.preventDefault();
  holder = JSON.stringify(editor.getValue());
  console.log("downloading JSON..." + "\n" + holder);
  let data =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(holder);
  download.setAttribute("href", data);
  download.setAttribute("download", "updated_extension.json");
  download.click();
});


download_yaml.addEventListener("click", function () {
  // download_yaml.preventDefault();
  holder = JSONtoYAML(editor.getValue());
  console.log("downloading YAML..." + "\n" + holder);
  let data =
    "data:text/yaml;charset=utf-8," +
    encodeURIComponent(holder);
  download.setAttribute("href", data);
  download.setAttribute("download", "updated_extension.yaml");
  download.click();
});


/* HELPER FUNCTIONS */

// yaml.js / JSON TO YAML converter library >> available under ../lib/yaml.js
// https://github.com/jeremyfa/yaml.js
// https://www.quora.com/How-can-I-convert-YAML-into-JSON-in-JavaScript-frontend-code-not-Node
// json to yaml
function JSONtoYAML(json) {
  let obj = null;
  if (typeof json === "object") {
    obj = json;
  } else {
    obj = JSON.parse(json);
  }
  let yamlString = YAML.stringify(obj,Infinity,4);
  return yamlString;
}
// yaml to json
function YAMLtoJSON(yamlString) {
  let obj = YAML.parse(yamlString);
  let jsonString = JSON.stringify(obj);
  let json = JSON.parse(jsonString);
  return json;
}
