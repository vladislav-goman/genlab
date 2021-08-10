import { Vector3, BufferGeometry, LineBasicMaterial, Line, WebGLRenderer, PerspectiveCamera, Scene } from 'three';
import Rainbow from './rainbow';

const container = document.querySelector('.main-scene--inner');

var rainbow = new Rainbow();
rainbow.setNumberRange(1, 80);
rainbow.setSpectrum('#dd76c4', '#82daf0');

function createSquare(scene, index) {
  const layer = (index + 1) / 4 - 11.2;
  const points = [];
  points.push(new Vector3(-1, layer, -1));
  points.push(new Vector3(-1, layer, 1));
  points.push(new Vector3(1, layer, 1));
  points.push(new Vector3(1, layer, -1));
  points.push(new Vector3(-1, layer, -1));
  const geometry = new BufferGeometry().setFromPoints(points);
  const hexColour = rainbow.colourAt(index);
  const material = new LineBasicMaterial({ color: `#${hexColour}` });
  const line = new Line(geometry, material);
  line.rotation.x = 0.25;
  line.rotation.y = index / 10;
  scene.add(line);
  return line;
}

function main() {
  const canvas = document.querySelector('#js-main-scene');
  const renderer = new WebGLRenderer({ canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor('#232323', 1);
  const squareArray = [];

  const fov = 75;
  const aspect = container.clientWidth / 2 / container.clientHeight;
  const near = 0.1;
  const far = 50;
  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 5;

  const scene = new Scene();

  for (let i = 0; i < 80; i++) {
    squareArray.push(createSquare(scene, i));
  }

  renderer.render(scene, camera);

  function animate() {
    squareArray.forEach((square, index) => {
      square.rotation.y += 0.005;
    });
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();
}

main();
