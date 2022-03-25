const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    userList.appendChild(li);

    nameInput.value = "";
    emailInput.value = "";
  }
}

/////////

const box = document.getElementById("box");
const output = document.getElementById("output");

box.addEventListener("mousemove", runEvent);

function runEvent(e) {
  // console.log(`event type: ${e.type}`);
  let a = `${e.offsetX}`;
  let b = `${e.offsetY}`;

  output.innerHTML = `<h3>offsetX: ${e.offsetX}</h3> <h3>offsetY: ${e.offsetY}</h3>`;

  console.log(a, b);
  box.style.backgroundColor = "rgb(a, b, 40)"; // 이거 왜 안되는지 알아보기
}
