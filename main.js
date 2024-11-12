import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 1, 32, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const esfera1 = new THREE.Mesh( geometry, material );
scene.add( esfera1 );
esfera1.position.x = 0;

const geometry2 = new THREE.SphereGeometry( 1, 32, 10 );
const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const esfera2 = new THREE.Mesh( geometry2, material2 );
scene.add( esfera2 );
esfera2.position.x = -2

const geometry3 = new THREE.SphereGeometry( 0.1, 32, 10 );
const material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const esfera3 = new THREE.Mesh( geometry3, material3 );
scene.add( esfera3 );
esfera3.position.x = -2

var angulo = 0

camera.position.z = 5;

function animate() {
	renderer.render( scene, camera );

    angulo += 3;
    //cube.position.x =  scrollY * 0.002;
    esfera2.position.x = esfera1.position.x + 5*Math.sin (angulo * 0.005);
    esfera2.position.y = esfera1.position.y + 5*Math.cos (angulo * 0.005);
    esfera3.position.x = esfera2.position.x + 2.5*Math.sin (angulo * 0.05);
    esfera3.position.y = esfera2.position.y + 2.5*Math.cos (angulo * 0.05);


}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
    
})

window.addEventListener('scroll',()=>{
    animate();
});

animate()