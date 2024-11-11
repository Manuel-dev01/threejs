import * as THREE from "three.js"

const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1,1,1)

const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial
)