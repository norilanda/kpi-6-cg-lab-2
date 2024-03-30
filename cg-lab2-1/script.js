// Create a scene
const cubeScene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.BoxGeometry();

const colors = {
    'red': 0xff0000,
    'green': 0x00ff00,
    'blue': 0x0000ff,
    'yellow': 0xffff00,
    'magenta': 0xff00ff,
    'cyan': 0x00ffff
}
const materials = [
    new THREE.MeshBasicMaterial({ color: colors.blue }), // right
    new THREE.MeshBasicMaterial({ color: colors.yellow }), // left
    new THREE.MeshBasicMaterial({ color: colors.cyan }), // top
    new THREE.MeshBasicMaterial({ color: colors.magenta }), // bottom
    new THREE.MeshBasicMaterial({ color: colors.red }), // front
    new THREE.MeshBasicMaterial({ color: colors.green })  // back
];

const cube = new THREE.Mesh(geometry, materials);
cubeScene.add(cube);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderScene();
});

const renderScene = () => {
    renderer.render(cubeScene, camera);
}

const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderScene();
}
animate();
