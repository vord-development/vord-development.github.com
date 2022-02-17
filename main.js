const wheel = document.querySelector(".wheel");
const button = document.querySelector(".button");
let deg = 0;

const rewards = {
  1: {
    name: "Iznenaduvanje",
    start: 0,
    end: 18,
  },
  2: {
    name: "Termos",
    start: 21,
    end: 63,
  },
  3: {
    name: "Drzac za gel",
    start: 66,
    end: 108,
  },
  4: {
    name: "Torba",
    start: 111,
    end: 153,
  },
  5: {
    name: "Termos",
    start: 156,
    end: 198,
  },
  6: {
    name: "Iznenaduvanje",
    start: 201,
    end: 243,
  },
  7: {
    name: "Torba",
    start: 246,
    end: 288,
  },
  8: {
    name: "Drzac za gel",
    start: 291,
    end: 333,
  },
  9: {
    name: "Iznenaduvanje",
    start: 336,
    end: 360,
  },
};

button.addEventListener("click", () => {
  button.style.pointerEvents = "none";
  let rewardNumber = randomReward({
    1: 0.04,
    2: 0.15,
    3: 0.08,
    4: 0.15,
    5: 0.15,
    6: 0.08,
    7: 0.15,
    8: 0.08,
    9: 0.08,
    10: 0.04,
  });
  let reward = rewards[rewardNumber];
  let rewardRange = reward.end - reward.start;
  deg = Math.floor(3600 + reward.start + Math.random() * rewardRange);
  wheel.style.transition = "all 7s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;
  wheel.classList.add("blur-animation");
});

wheel.addEventListener("transitionend", () => {
  wheel.classList.remove("blur-animation");
  wheel.style.transition = "none";
  wheel.style.transform = `rotate(${deg % 360}deg)`;
  button.style.pointerEvents = "auto";
});

function randomReward(rewards) {
  let i,
    sum = 0,
    r = Math.random();
  for (i in rewards) {
    sum += rewards[i];
    if (r <= sum) return i;
  }
}
