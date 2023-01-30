import { loadFBX } from '../utils'
import {SurroundLine} from '../effect/surroundLine'

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
                    new SurroundLine(this.scene, child);
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