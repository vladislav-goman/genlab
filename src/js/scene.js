import * as THREE from 'three';
import Rainbow from './rainbow';

const container = document.querySelector('.main-scene--inner');

var rainbow = new Rainbow();
rainbow.setNumberRange(1, 80);
rainbow.setSpectrum('#dd76c4', '#82daf0');

let directionFlag = false;

function createSquare(scene, index) {
  const layer = index - 40;
  const points = [];
  points.push(new THREE.Vector3(-5, layer, -5));
  points.push(new THREE.Vector3(-5, layer, 5));
  points.push(new THREE.Vector3(5, layer, 5));
  points.push(new THREE.Vector3(5, layer, -5));
  points.push(new THREE.Vector3(-5, layer, -5));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const hexColour = rainbow.colourAt(index);
  const material = new THREE.LineBasicMaterial({ color: `#${hexColour}` });
  const line = new THREE.Line(geometry, material);
  line.rotation.x = 0.25;
  line.rotation.y = index / 10;
  scene.add(line);
  return line;
}

function main() {
  const canvas = document.querySelector('#js-main-scene');
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor('#232323', 1);
  const squareArray = [];

  const fov = 75;
  const aspect = container.clientWidth / 2 / container.clientHeight;
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 30;

  const scene = new THREE.Scene();

  for (let i = 0; i < 80; i++) {
    squareArray.push(createSquare(scene, i));
  }

  renderer.render(scene, camera);

  function animate() {
    squareArray.forEach((square, index) => {
      square.rotation.y += 0.005;
    //   if (directionFlag) {
    //     square.position.x -= 0.005;
    //     if (square.position.x < -1) {
    //       directionFlag = !directionFlag;
    //     }
    //   } else {
    //     square.position.x += 0.005;
    //     if (square.position.x > 1) {
    //       directionFlag = !directionFlag;
    //     }
    //   }
    });
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}

main();
