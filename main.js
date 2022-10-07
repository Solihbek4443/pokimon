"use strict";

// {
//     "id": 1,
//     "num": "001",
//     "name": "Bulbasaur",
//     "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
//     "type": [
//     "Grass",
//     "Poison"
//     ],
//     "height": "0.71 m",
//     "weight": "6.9 kg",
//     "candy": "Bulbasaur Candy",
//     "candy_count": 25,
//     "egg": "2 km",
//     "spawn_chance": 0.69,
//     "avg_spawns": 69,
//     "spawn_time": "20:00",
//     "multipliers": [
//     1.58
//     ],
//     "weaknesses": [
//     "Fire",
//     "Ice",
//     "Flying",
//     "Psychic"
//     ],
//     "next_evolution": [
//     {
//         "num": "002",
//         "name": "Ivysaur"
//     },
//     {
//         "num": "003",
//         "name": "Venusaur"
//     }
//     ]
// },

const data = pokemons.splice(0, 8),
  dinamicSelect = document.querySelector(".form-select");
const newData = data.map((item, index, array) => {
  return {
    title: item.name,
    type: item.type,
    weight: item.weight,
    age: item.avg_spawns,
    image: item.img,
  };
});

console.log(newData);

const categories = [];

function type() {
  newData.forEach((item) => {
    item.type.forEach((e) => {
      if (!categories.includes(e)) {
        categories.push(e);
      }
    });
  });
}

type();

console.log(categories);

categories.forEach((e) => {
  const option = createElement("option", "option-item", e);
  $("#type").appendChild(option);
});

// renderData()

dinamicSelect.addEventListener("change", (e) => {
  renderData(e.target.value.toLoweCase);
});

renderData();

function renderData(a) {
  const filtirNewData = newData.filter((e) => {
    return e.type.toLoweCase == a;
  });

  console.log(filtirNewData);

  newData.forEach((e) => {
    const card = createElement(
      "div",
      "card shadow box",
      `
    <img src="${e.image}" alt="${e.name}" class="card-top-img">
    <div class="card-body">
    <h3>${e.title}</h3>
    <ul>
    <li>${e.type}</li>
    <li>
    <ul class="list-item">
    <li>${e.weight}</li>
    <li>${e.age} age</li>
    </ul>
    </li>
    </ul>
    </div>
    `
    );
    $(".wropper").appendChild(card);
  });
}

// console.log(type);

// console.log(newData);

// newData.forEach((e) => {
//   const card = createElement('div','card shadow box',
//     `
//      <img src="${e.img}" alt="${e.name}" class="card-top-img">

//      <div class="card-body">
//      <h3>${e.name}</h3>
//      <ul>
//      <li>${e.candy}</li>
//      <li>${e.weight}</li>
//      <li>${e.avg_spawns}</li>
//      <li>${e.type}</li>
//      </ul>
//      </div>
//         `)

//   $('.wropper').appendChild(card);
// });

// //gey types
// function getType(array) {
//   let newArray = []
//   array.forEach(item => {
//     let type = item.type;

//     type.forEach(item1 => {
//       if (!newArray.includes(item1)) {
//         newArray.push(item1)
//       }
//     });
//   })
//   return newArray

// };

// // getType(pokemonArray)
// // let types = (getType(pokemonArray));

// //render types
// function getTypes(array, wrapper) {
//   let fragment = document.createDocumentFragment();

//   for (const item of array) {
//     let newOption = document.createElement("option");
//     newOption.textContent = item;
//     newOption.value = item;
//     fragment.appendChild(newOption);
//   }
//   wrapper.appendChild(fragment)
// }

// // getTypes(types, elInputType)

// // const categories=[];
// // function type(){
// //     newData.forEach((item)=>{
// //       item.type.forEach((e)=>{
// //         categories.push
// //       })
// //     })

// // }

// // type ()
