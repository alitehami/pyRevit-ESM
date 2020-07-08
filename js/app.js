let holder = null;
document.getElementById("inputfile").addEventListener("change", async function () {
    let fr = new FileReader();
    fr.onload = function () {
      document.getElementById("output").textContent = fr.result;
      let x = JSON.parse(fr.result);
      console.log(x);

      holder = x;


    };
  fr.readAsText(this.files[0]);
});


dlAnchorElem.addEventListener('click', function(){
    dlAnchorElem.preventDefault();
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(holder));
dlAnchorElem.setAttribute("href",     dataStr     );
dlAnchorElem.setAttribute("download", "scene.json");
})


