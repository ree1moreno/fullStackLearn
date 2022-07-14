document
  .querySelector("select[name=select-option]")
  .addEventListener("change", function () {
    alert(event.target.value);
  });

const sampleInput = document.querySelector("input[name='sample-input']");

function doChange() {
  alert(event.target.value);
}

sampleInput.addEventListener("change", doChange);
// sampleInput.removeEventListener("change", doChange);
