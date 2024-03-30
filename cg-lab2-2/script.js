// Create a scene
const cubeScene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 4;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CylinderGeometry(1, 1, 2, 16);

const colors = {
    'red': 0xff0000,
    'green': 0x00ff00,
    'blue': 0x0000ff,
    'yellow': 0xffff00,
    'magenta': 0xff00ff,
    'cyan': 0x00ffff
}
const materials = [
    new THREE.MeshBasicMaterial({ color: colors.blue }), // side
    new THREE.MeshBasicMaterial({ color: colors.green }), // top/bottom
    new THREE.MeshBasicMaterial({ color: colors.magenta }), // top/bottom
];

const cylinder = new THREE.Mesh(geometry, materials);
cubeScene.add(cylinder);

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
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    renderScene();
}
animate();
