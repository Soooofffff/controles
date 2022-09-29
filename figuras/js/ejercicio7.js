const scene = new THREE.Scene();

scene.background = new THREE.Color(0xFFF280);

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.RingGeometry( 1, 5, 10 );
const material = new THREE.MeshStandardMaterial({color: 0xF280FF});
const mesh = new THREE.Mesh( geometry, material );
material.metalness = 0.3;
material.roughness = 0.7;
const directionalLight = new THREE.DirectionalLight(0x80FFEC, 1);
scene.add (directionalLight);
scene.add (mesh)

const geometry1 = new THREE.RingGeometry( 1, 5, 10 );
const material1 = new THREE.MeshStandardMaterial({color: 0xF280FF});
const mesh1 = new THREE.Mesh( geometry1, material1 );
material.metalness = 0.3;
material.roughness = 0.7;
const directionalLight1 = new THREE.DirectionalLight(0x80FFEC, 1);
scene.add (directionalLight);
scene.add (mesh1)

const geometry2 = new THREE.RingGeometry( 1, 5, 10 );
const material2 = new THREE.MeshStandardMaterial({color: 0xF280FF});
const mesh2 = new THREE.Mesh( geometry2, material2 );
material.metalness = 0.3;
material.roughness = 0.7;
const directionalLight2 = new THREE.DirectionalLight(0x80FFEC, 1);
scene.add (directionalLight);
scene.add (mesh2)

const geometry3 = new THREE.RingGeometry( 1, 5, 10 );
const material3 = new THREE.MeshStandardMaterial({color: 0xF280FF});
const mesh3 = new THREE.Mesh( geometry3, material3 );
material.metalness = 0.3;
material.roughness = 0.7;
const directionalLight3 = new THREE.DirectionalLight(0x80FFEC, 1);
scene.add (directionalLight);
scene.add (mesh3)

scene.add (geometry, geometry1, geometry2, geometry3)


var controls = new THREE.DragControls([mesh, mesh1, mesh2, mesh3], camera,renderer.domElement)
const objets = [ mesh, mesh1, mesh2, mesh3 ];

camera.position.z = 50;
camera.position.x = 1;



mesh.position.x = 10;
mesh1.position.y = 10;
mesh2.position.x = -10;
mesh3.position.y = -10;

/*const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) );
scene.add( line );*/

/* const control  = new THREE.PointerLockControls ( camera, renderer.domElement );
document.getElementById('butonplay').onclick = () => {
    control.lock();
}
 */
/* const control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 10;
control.maxDistance = 20; */

function animate() {
	requestAnimationFrame( animate );
    renderer.render( scene, camera );
    mesh.rotation.x += 0.02;
    mesh.rotation.y += 0.02;
    mesh1.rotation.x += 0.02;
    mesh1.rotation.y += 0.02;
    mesh2.rotation.x += 0.02;
    mesh2.rotation.y += 0.02;
    mesh3.rotation.x += 0.02;
    mesh.rotation.y += 0.02;
    renderer.render( scene, camera );
};


animate();