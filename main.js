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
    name: "Drzac za tel",
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
    name: "Drzac za tel",
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
    2: 0.08,
    3: 0.17,
    4: 0.17,
    5: 0.08,
    6: 0.08,
    7: 0.17,
    8: 0.17,
    9: 0.04,
  });
  let reward = rewards[rewardNumber];
  let rewardRange = reward.end - reward.start;
  deg = Math.floor(3600 + reward.start + Math.random() * rewardRange);
  wheel.style.transition = "all 5s ease-out";
  wheel.style.transform = `rotate(${deg}deg)`;
});

wheel.addEventListener("transitionend", () => {
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
