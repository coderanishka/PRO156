AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 10; i++) {
        const id = `coin${i}`;
        const posX = Math.random() * 100 + -50;
        const posY = Math.random() * 5 + 5;
        const posZ = Math.random() * 60 + -40;

        const position = { x: posX, y: posY, z: posZ };
        this.createCoins(id, position);
      }
    },
    createCoins: function (id, position) {
      const treasureEntity = document.querySelector("#treasureCoins");
      var coin = document.createElement("a-entity");
      coin.setAttribute("id", id);
      coin.setAttribute("position", position);
      coin.setAttribute("material", "color", "#ff9100");
      coin.setAttribute('gltf-model', src = './models/coin/scene.gltf')
      coin.setAttribute('scale',)
      coin.setAttribute("geometry",{ primitive: "circle",radius: 1 });
      coin.setAttribute("animation", {
        property: "rotation",
        to: "0 360 0",
        loop: "true",
        dur: 1000,
      });  
      
      coin.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2
      });
      coin.setAttribute("game-play", {
        elementId: `#${id}`,
      });
      treasureEntity.appendChild(coin);
    }
  });
  