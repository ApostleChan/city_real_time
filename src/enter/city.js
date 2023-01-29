import { loadFBX } from '../utils'
import * as THREE from 'three'

export class City {
    constructor(scene) {
        this.scene = scene;
        this.loadCity();
    }

    loadCity() {
        // 加载模型并且渲染到页面上
        // 加载模型，并且渲染到画布上
        loadFBX("/src/model/beijing.fbx").then(object => {
            object.traverse((child)=>{ // traverse得到object所有的对象
                if (child.isMesh){
                    const material = new THREE.ShaderMaterial({
                        vertexShader:`
                            void main(){
                                gl_Postion = pr
                            }
                        `
                    })
                    const mesh = new THREE.Mesh(child.geometry, material)

                    // 让mesh继承child的旋转、缩放、平移
                    mesh.position.copy(child.position)
                    mesh.scale.copy(child.scale)
                    mesh.rotation.copy(child.rotation)

                    this.scene.add(mesh)
                }
            })
            // console.log(object)
            // this.scene.add(object)
        })
    }

    start() {
        // 保留
    }
}