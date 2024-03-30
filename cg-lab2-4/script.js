// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 3;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const geometry = new THREE.ConeGeometry(0.8, 2.5, 4);

const colors = {
    'red': 0xff0000,
    'green': 0x00ff00,
    'blue': 0x0000ff,
    'yellow': 0xffff00,
    'magenta': 0xff00ff,
    'cyan': 0x00ffff
}
const materials = [
    new THREE.MeshBasicMaterial({ color: colors.cyan }),
    new THREE.MeshBasicMaterial({ color: colors.magenta }),
    new THREE.MeshBasicMaterial({ color: colors.magenta }),
];

// const pyramid = new THREE.Mesh(geometry, materials);
// scene.add(pyramid);

// pyramid.material.forEach(material => {
//     material.wireframe = true;
//     material.transparent = true;
//     material.opacity = 0.2;
// });

const pointSize = 0.05;
const pointMaterial = new THREE.PointsMaterial({ color: colors.green, size: pointSize });
const pyramid = new THREE.Points(geometry, pointMaterial);
// pyramid.add(points);
scene.add(pyramid);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderScene();
});

const renderScene = () => {
    renderer.render(scene, camera);
}

const animate = () => {
    requestAnimationFrame(animate);
    pyramid.rotation.x += 0.01;
    pyramid.rotation.y += 0.01;
    renderScene();
}
animate();
