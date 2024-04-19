const counterEl = document.querySelector(".counter");

const increaseButtonEl = document.querySelector(".counter__button--increase");

const decreaseButtonEl = document.querySelector(".counter__button--decrease");

const resetButtonEl = document.querySelector(".counter__reset-button");

const counterValueEl = document.querySelector(".counter__value");

const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", () => {
  counterValueEl.textContent = 0;

  counterEl.classList.remove("counter--limit");

  counterTitleEl.textContent = "Fancy Counter";

  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
});

decreaseButtonEl.addEventListener("click", function () {
  const currentValue = counterValueEl.textContent;

  const currentValueAsNumber = +currentValue;

  let newValue = currentValueAsNumber - 1;

  //value less than 0

  if (newValue < 0) {
    newValue = 0;
  }

  counterValueEl.textContent = newValue;
});

function incrementCounter() {
  //   get current value of container

  const currentValue = counterValueEl.textContent;

  // convert value to number type

  const currentValueAsNumber = +currentValue;

  //increment by 1

  let newValue = currentValueAsNumber + 1;

  //set counter with new value
  if (newValue > 5) {
    newValue = 5;

    counterEl.classList.add("counter--limit");

    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for >5";

    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  counterValueEl.textContent = newValue;
}

increaseButtonEl.addEventListener("click", incrementCounter);

document.addEventListener("keydown", incrementCounter);
