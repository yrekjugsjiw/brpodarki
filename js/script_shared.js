function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
$(document).ready(function () {
  let promo = localStorage.getItem("promo");
  if (promo) {
    $("#current_promo").text("Promo: " + promo);
    $("#second_promo").hide();
  }

  $("#promo-text").on("input", function () {
    if ($(this).val().length > 0) {
      $("#error_promo").hide();
    }
  });
  $("#promo-text").on("keypress", function (event) {
    if (event.key === "Enter") {
      validatePromo();
    }
  });
});

const pxValue = window.location.search.substring(1).split("=")[1];
localStorage.setItem("px", pxValue);

const cells = 31;

const bestitems_knives = [
  {
    name: "Champions 2022 Butterfly",
    img: "public/land_6/assets/img/drops/knives/champ_butterfly.png",
    win_img: "public/land_6/assets/img/drops/knives/champ_butterfly_win.png",
  },

  {
    name: "VCT LOCK//IN Misericórdia",
    img: "public/land_6/assets/img/drops/knives/miseri.png",
    win_img: "public/land_6/assets/img/drops/knives/miseri_win.png",
  },
  {
    name: 'KUNAI "CHAMPIONS 2023"',
    img: "public/land_6/assets/img/drops/knives/kunai_champs.png",
    win_img: "public/land_6/assets/img/drops/knives/kunai_champs_win.png",
  },
  {
    name: "Kuronami no Yaiba",
    img: "public/land_6/assets/img/drops/knives/Kuronami no Yaiba.png",
    win_img: "public/land_6/assets/img/drops/knives/kuronami_win.png",
  },
  {
    name: "XERØFANG Knife",
    img: "public/land_6/assets/img/drops/knives/xerofang.png",
    win_img: "public/land_6/assets/img/drops/knives/xerofang_win.png",
  },
];

const bestitems_pistols = [
  {
    name: "Arcane Sheriff",
    img: "public/land_6/assets/img/drops/pistols/arcane.png",
    win_img: "public/land_6/assets/img/drops/pistols/arcane_win.png",
  },

  {
    name: "Kuronami Sheriff",
    img: "public/land_6/assets/img/drops/pistols/kuronami_sheriff.png",
    win_img: "public/land_6/assets/img/drops/pistols/kuronami_sheriff_win.png",
  },
  {
    name: "XERØFANG Ghost",
    img: "public/land_6/assets/img/drops/pistols/xerofang_ghost.png",
    win_img: "public/land_6/assets/img/drops/pistols/xerofang_ghost_win.png",
  },
  {
    name: "Reaver, EP 5 Ghost",
    img: "public/land_6/assets/img/drops/pistols/reaver_ghost.png",
    win_img: "public/land_6/assets/img/drops/pistols/reaver_ghost_win.png",
  },
  {
    name: "Neo Frontier Sheriff",
    img: "public/land_6/assets/img/drops/pistols/frontier_sheriff.png",
    win_img: "public/land_6/assets/img/drops/pistols/frontier_sheriff_win.png",
  },
];

const bestitems_vandals = [
  {
    name: "Elderflame Vandal",
    img: "public/land_6/assets/img/drops/vandals/ancient_flame.png",
    win_img: "public/land_6/assets/img/drops/vandals/ancient_flame_win.png",
  },

  {
    name: 'Vandal "Champions 2023"',
    img: "public/land_6/assets/img/drops/vandals/champ_2023.png",
    win_img: "public/land_6/assets/img/drops/vandals/champ_2023_win.png",
  },
  {
    name: "Araxys Vandal",
    img: "public/land_6/assets/img/drops/vandals/araxis.png",
    win_img: "public/land_6/assets/img/drops/vandals/araxis_win.png",
  },
  {
    name: "Champions 2021 Vandal",
    img: "public/land_6/assets/img/drops/vandals/champ_2021.png",
    win_img: "public/land_6/assets/img/drops/vandals/champ_2021_win.png",
  },
  {
    name: "XERØFANG Vandal",
    img: "public/land_6/assets/img/drops/vandals/xerofang.png",
    win_img: "public/land_6/assets/img/drops/vandals/xerofang_win.png",
  },
];

const items_knives = [
  {
    name: "Champions 2022 Butterfly",
    img: "public/land_6/assets/img/drops/knives/champ_butterfly.png",
    chance: 2,
  },
  {
    name: "VCT LOCK//IN Misericórdia",
    img: "public/land_6/assets/img/drops/knives/miseri.png",
    chance: 2,
  },
  {
    name: 'Firefly "RGX 11z Pro"',
    img: "public/riot/images/FireflyRGX11zPro.png",
    chance: 8,
  },
  {
    name: "Blade of Chaos",
    img: "public/riot/images/BladeofChaos.png",
    chance: 9,
  },
  {
    name: "Eternal Sovereign",
    img: "public/land_6/assets/img/drops/knives/Eternal Sovereign.png",
    chance: 10,
  },
  {
    name: "Blades of Primordia",
    img: "public/land_6/assets/img/drops/knives/Blades of Primordia.png",
    chance: 11,
  },
  {
    name: "Kuronami no Yaiba",
    img: "public/land_6/assets/img/drops/knives/Kuronami no Yaiba.png",
    chance: 12,
  },
  {
    name: "Intergrade Blade",
    img: "public/land_6/assets/img/drops/knives/Intergrade Blade.png",
    chance: 13,
  },
  {
    name: "Gaia's Fury",
    img: "public/land_6/assets/img/drops/knives/gaia.png",
    chance: 14,
  },
  {
    name: "Ruyi Staff",
    img: "public/land_6/assets/img/drops/knives/Ruyi Staff.png",
    chance: 17,
  },
  {
    name: "Relic Stone Daggers",
    img: "public/land_6/assets/img/drops/knives/relic.png",
    chance: 16,
  },
  {
    name: "Blades of Imperium",
    img: "public/land_6/assets/img/drops/knives/Blades of Imperium.png",
    chance: 17,
  },
  {
    name: 'KUNAI "CHAMPIONS 2023"',
    img: "public/land_6/assets/img/drops/knives/kunai_champs.png",
    chance: 18,
  },
];

const items_pistols = [
  {
    name: "Arcane Sheriff",
    img: "public/land_6/assets/img/drops/pistols/arcane.png",
    chance: 1,
  },
  {
    name: "XERØFANG Ghost",
    img: "public/land_6/assets/img/drops/pistols/xerofang_ghost.png",
    chance: 2,
  },
  {
    name: "Valiant Hero Ghost",
    img: "public/land_6/assets/img/drops/pistols/Valiant Hero Ghost.png",
    chance: 2,
  },
  {
    name: "Radiant Entertainment System Ghost",
    img: "public/land_6/assets/img/drops/pistols/ent_sys_ghost.png",
    chance: 8,
  },
  {
    name: "Reaver, EP 5 Ghost",
    img: "public/land_6/assets/img/drops/pistols/reaver_ghost.png",
    chance: 9,
  },
  {
    name: "Gaia's Vengeance Ghost",
    img: "public/land_6/assets/img/drops/pistols/gaia_ghost.png",
    chance: 10,
  },
  {
    name: "RGX 11z Pro Classic",
    img: "public/land_6/assets/img/drops/pistols/rgx_classic.png",
    chance: 11,
  },
  {
    name: "Spectrum Classic",
    img: "public/land_6/assets/img/drops/pistols/spectrum_classic.png",
    chance: 12,
  },
  {
    name: "Glitchpop Classic",
    img: "public/land_6/assets/img/drops/pistols/glitchpop_classic.png",
    chance: 13,
  },
  {
    name: "Gravitational Uranium Neuroblaster Classicy",
    img: "public/land_6/assets/img/drops/pistols/gravi_classic.png",
    chance: 14,
  },
  {
    name: "Kuronami Sheriff",
    img: "public/land_6/assets/img/drops/pistols/kuronami_sheriff.png",
    chance: 17,
  },
  {
    name: "Neo Frontier Sheriff",
    img: "public/land_6/assets/img/drops/pistols/frontier_sheriff.png",
    chance: 16,
  },
  {
    name: "Protocol 781-A Sheriff",
    img: "public/land_6/assets/img/drops/pistols/protocol_sheriff.png",
    chance: 17,
  },
  {
    name: "Magepunk Sheriff",
    img: "public/land_6/assets/img/drops/pistols/magepunk_sheriff.png",
    chance: 18,
  },
];

const items_vandals = [
  {
    name: "Elderflame Vandal",
    img: "public/land_6/assets/img/drops/vandals/ancient_flame.png",
    chance: 1,
  },
  {
    name: 'Vandal "Champions 2023"',
    img: "public/land_6/assets/img/drops/vandals/champ_2023.png",
    chance: 2,
  },
  {
    name: "Araxys Vandal",
    img: "public/land_6/assets/img/drops/vandals/araxis.png",
    chance: 2,
  },
  {
    name: "Gaias Vengeance Vandal",
    img: "public/land_6/assets/img/drops/vandals/gaias.png",
    chance: 8,
  },
  {
    name: "ChronoVoid Vandal",
    img: "public/land_6/assets/img/drops/vandals/chronovoid.png",
    chance: 9,
  },
  {
    name: "Neptune Vandal",
    img: "public/land_6/assets/img/drops/vandals/neptune.png",
    chance: 10,
  },
  {
    name: "Champions 2021 Vandal",
    img: "public/land_6/assets/img/drops/vandals/champ_2021.png",
    chance: 11,
  },
  {
    name: "RGX 11z Pro Vandal",
    img: "public/land_6/assets/img/drops/vandals/rgx.png",
    chance: 12,
  },
  {
    name: "Glitchpop Vandal",
    img: "public/land_6/assets/img/drops/vandals/glitchpop.png",
    chance: 13,
  },
  {
    name: "XERØFANG Vandal",
    img: "public/land_6/assets/img/drops/vandals/xerofang.png",
    chance: 14,
  },
  {
    name: "Magepunk Vandal",
    img: "public/land_6/assets/img/drops/vandals/magepunk.png",
    chance: 17,
  },
  {
    name: "NO LIMITS Vandal",
    img: "public/land_6/assets/img/drops/vandals/nolimits.png",
    chance: 16,
  },
  {
    name: "Valiant Hero Vandal",
    img: "public/land_6/assets/img/drops/vandals/valiant.png",
    chance: 17,
  },
  {
    name: "Oni Vandal",
    img: "public/land_6/assets/img/drops/vandals/oni.png",
    chance: 18,
  },
];

function getItem(type) {
  let item;

  let items;
  if (type === "knives") {
    items = items_knives;
  } else if (type === "pistols") {
    items = items_pistols;
  } else if (type === "vandals") {
    items = items_vandals;
  }

  while (!item) {
    const chance = Math.floor(Math.random() * 100000);

    items.forEach((elm) => {
      if (chance < elm.chance && !item) item = elm;
    });
  }

  return item;
}

function getRandom(type) {
  let item;

  let bestitems;
  if (type === "knives") {
    bestitems = bestitems_knives;
  } else if (type === "pistols") {
    bestitems = bestitems_pistols;
  } else if (type === "vandals") {
    bestitems = bestitems_vandals;
  }
  let index = Math.floor(Math.random() * bestitems.length);

  item = bestitems.at(index);
  return item;
}

function generateItems(type) {
  document.querySelector(".list").remove();
  document.querySelector(".scope").innerHTML = `
                  <ul class="list"></ul>
              `;

  const list = document.querySelector(".list");

  for (let i = 0; i < cells; i++) {
    let item = getItem(type);

    if (i == 15) {
      item = getRandom(type);
      const li = document.createElement("li");
      li.setAttribute("data-item", JSON.stringify(item));
      li.classList.add("list__item");
      li.innerHTML = `
                          <img src="${item.img}" alt="" />
                          <p class="spin-item-text">${item.name}</p>
                      `;

      list.append(li);
      continue;
    }

    const li = document.createElement("li");
    li.setAttribute("data-item", JSON.stringify(item));
    li.classList.add("list__item");
    li.innerHTML = `
                      <img src="${item.img}" alt="" />
                      <p class="spin-item-text">${item.name}</p>
                  `;

    list.append(li);
  }
}

function enterPromo() {
  promo = localStorage.getItem("promo");
  if (!promo) {
    viewPromo();
    return true;
  }
  return false;
}

function validatePromo() {
  let currentpromo = localStorage.getItem("promo");
  if (!currentpromo) {
    let promo = $("#promo-text").val();
    $.ajax({
      url: "/api/promo",
      type: "POST",
      data: JSON.stringify({ promo }),
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
      },
      success: function (response) {
        if (response.ok === "true") {
          localStorage.setItem("promo", promo);
          $("#current_promo").text("Promo: " + promo);
          $("#second_promo").hide();
          hidePromo();
          hideDiv();
        } else if (response.ok === "false") {
          $("#error_promo").show();
        }
      },
      error: function () {
        $("#error_promo").show();
      },
    });
  } else {
    hidePromo();
    hideDiv();
  }
}

let isStarted = false;
let isFirstStart = true;

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

function viewDiv(type) {
  if (enterPromo()) return;
  $("#takes").fadeIn(350);
  if (checkAlreadyGot()) return;
  if (!type) return;
  generateItems(type);
  $("#roulette").fadeIn(350);
  //document.getElementById("takes").style.display = "block";
}

function hideDiv() {
  $("#takes").fadeOut(350);
  //document.getElementById("takes").style.display = "none";
}

function viewPromo() {
  $("#takes").fadeIn(350);
  $("#promo").fadeIn(350);
}

function hidePromo() {
  $("#promo").fadeOut(350);
  //document.getElementById("takes").style.display = "none";
}

function viewPrize() {
  let item = localStorage.getItem("drop");
  if (item) {
    const data = JSON.parse(item);
    const nameContainer = document.getElementById("prize-name");
    const imageContainer = document.getElementById("image");
    nameContainer.innerHTML = data.name;
    imageContainer.src = data.win_img;
    $("#roulette").fadeOut(350);
    $("#prize").fadeIn(350);
  }
}

function hidePrize() {
  $("#prize").fadeOut(350);
  //document.getElementById("takes").style.display = "none";
}

function checkAlreadyGot() {
  let item = localStorage.getItem("drop");

  if (item) {
    viewPrize();
    return true;
  }
  return false;
}

function start(type) {
  if (isStarted) return;
  else isStarted = true;

  if (!isFirstStart) generateItems(type);
  else isFirstStart = false;
  const list = document.querySelector(".list");

  setTimeout(() => {
    list.style.left = "50%";
    list.style.transform = "translate3d(-50%, 0, 0)";
  }, 0);

  const item = list.querySelectorAll("li")[15];

  list.addEventListener(
    "transitionend",
    () => {
      isStarted = false;
      const data = JSON.parse(item.getAttribute("data-item"));
      data.img = "public/land_6/assets/img/image 2.png";
      localStorage.setItem("drop", JSON.stringify(data));

      viewPrize();
    },
    { once: true }
  );
}
