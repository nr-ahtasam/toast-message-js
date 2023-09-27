// project requirement:
//change the background color by generateing random hex color by clicking a button
//also display the hex code to a disable input field
// copy hexa code from the input field by clicking the copy button
//add a toast message when copyed

//global variavle

let div = null;

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
    if (div != null) {
      div.remove();
      div = null;
    }
    generateToastMessage(`${output.value} Copied Successfully`);
  });
}

// step 2 random color generator function
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

function generateToastMessage(msg) {
  div = document.createElement("div");
  div.innerText = msg;
  div.className = "toast-message toast-animation-in";
  document.body.appendChild(div);

  div.addEventListener("click", () => {
    div.classList.remove("toast-animation-in");
    div.classList.add("toast-animation-out");
    div.addEventListener("animationend", () => {
      div.remove();
      div = null;
    });
  });
}
// step 3 collect all necessary referances

//step 4 handle the change button click event

//step5 handle the copy button click event

// step6 activate toast message

// step 7 create dynamic toast message

// step 8 clear dynamic toast message
