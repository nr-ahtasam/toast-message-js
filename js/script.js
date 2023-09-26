// project requirement:
//change the background color by generateing random hex color by clicking a button
//also display the hex code to a disable input field
// copy hexa code from the input field by clicking the copy button

//step 1 create onload handler

window.onload = () => {
  main();
};
function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");
  changeBtn.addEventListener("click", () => {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);
  });
}

// step 2 random color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
// step 3 collect all necessary referances

//step 4 handle the change button click event

//step handle the copy button
