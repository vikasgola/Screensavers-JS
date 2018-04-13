
// -------------------------------------------initalizing---------------------------------------
// setting scene and camera
var scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 0.015, 100);
scene.overrideMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight , 0.1 , 1000);
camera.position.z = 1000;
camera.position.x = 0;
camera.position.y = 20;
camera.near = 0.015;
camera.far = 100;
camera.lookAt(scene.position);
camera.updateProjectionMatrix();
//var stats = initStats();



//----------------------------------------------- rendering----------------------------------------
var renderer = new THREE.WebGLRenderer({}); 
renderer.setSize(window.innerWidth - 4 , window.innerHeight - 4);
document.body.appendChild(renderer.domElement);


// --------------------------------------------------lighting--------------------------------------
var ambientLight = new THREE.AmbientLight(0xffffff , 0.1);
scene.add(ambientLight);    

var pointColor = "#ffffff";
var spotLight = new THREE.SpotLight(pointColor);
spotLight.position.set(0, 10000, 10000);
scene.add(spotLight);


addCube = function() {
        var cubeSize = Math.ceil((Math.random())*10);
        var cubeGeometry = new
        THREE.CubeGeometry(cubeSize,cubeSize,cubeSize);
        var cubeMaterial = new THREE.MeshPhongMaterial();
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.name = "cube-" + scene.children.length;
        cube.position.x= Math.round((Math.random() -0.5) * 200);
        cube.position.y= cubeSize/2 + Math.round((Math.random() * 5));
        cube.position.z= Math.round((Math.random() -0.5) *10000);
        scene.add(cube);
};
    



// -------------------------------------------------stats for game------------------------------------

for(var i=0;i<10000;i++){
    addCube();
}

function initStats() {
    var stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    //document.getElementById("#Stats-output").child =  stats.domElement;
    return stats;
}

// on resizing the window
function onWindowResize() {
	//resize & align
	sceneHeight = window.innerHeight;
	sceneWidth = window.innerWidth;
	renderer.setSize(sceneWidth, sceneHeight);
	camera.aspect = sceneWidth/sceneHeight;
	camera.updateProjectionMatrix();
}


// --------------------------------------------update function------------------------------------------
function update(){
    window.addEventListener('resize', onWindowResize, false);//resize callback
    camera.position.z -= 1;
    //stats.update(); 
}
// main loop
function animate(){
    requestAnimationFrame(animate);
    update();
    renderer.render(scene , camera);
}

animate();
