const gameCont = document.createElement("div");
document.getElementById("container").appendChild(gameCont);
gameCont.classList.add("gameCont");

//Start button
const start = document.createElement("button");
document.getElementById("container").appendChild(start);
start.classList.add("startButton");
start.innerHTML = "Start";
start.addEventListener("click", gameStart);

//Start
function gameStart() {
  start.style.display = "none";

  //Fruits
  const apple = document.createElement("div");
  gameCont.appendChild(apple);
  apple.classList.add("fruit");
  apple.classList.add("apple");
  apple.classList.add("hidden");

  const strawberry = document.createElement("div");
  gameCont.appendChild(strawberry);
  strawberry.classList.add("fruit");
  strawberry.classList.add("strawberry");
  strawberry.classList.add("hidden");

  const banana = document.createElement("div");
  gameCont.appendChild(banana);
  banana.classList.add("fruit");
  banana.classList.add("banana");
  banana.classList.add("hidden");

  const cherry = document.createElement("div");
  gameCont.appendChild(cherry);
  cherry.classList.add("fruit");
  cherry.classList.add("cherry");
  cherry.classList.add("hidden");
  const fruit = document.getElementsByClassName("fruit");

  let random = Math.floor(Math.random() * 950);
  let i = 0;
  fruit[0].style.left = random + "px";

  setInterval(fruitFall, 2000);

  function fruitFall() {
    fruit[i].classList.remove("animate");
    fruit[i].classList.add("hidden");
    i = Math.floor(Math.random() * 4);
    let random = Math.floor(Math.random() * 950);
    fruit[i].classList.add("animate");
    fruit[i].classList.remove("hidden");
    fruit[i].style.left = random + "px";
  }

  //Basket
  let modifier = 100;

  let position = { left: 450 };

  const basket = document.createElement("div");
  basket.innerHTML = `<img src="basket.png" alt="Basket">`;
  gameCont.appendChild(basket);
  basket.classList.add("basket");

  basket.style.left = position.left + "px";

  const containerWidth = gameCont.offsetWidth;

  function moveBasket(event) {
    const basketWidth = basket.offsetWidth;

    switch (event.key) {
      case "ArrowLeft":
        position.left = Math.max(0, position.left - modifier);
        console.log("left");
        break;
      case "ArrowRight":
        position.left = Math.min(
          containerWidth - basketWidth,
          position.left + modifier
        );
        break;
    }

    basket.style.left = position.left + "px";
  }

  document.addEventListener("keydown", moveBasket);
}
