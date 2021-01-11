const PI = 3.14159;

const sphereVolume = function(r) {
  return (4 / 3) * PI * Math.pow(r, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function(r, h) {
  return PI * Math.pow(r, 2) * (h / 3);
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function(h, w, d) {
  return h * w * d;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function(solids) {
  let totalSum = 0;
  for (const solid of solids) {
    if (solid.type === 'sphere') {
      totalSum += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      totalSum += coneVolume(solid.radius, solid.height);
    } else if (solid.type === 'prism') {
      totalSum += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return totalSum;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
