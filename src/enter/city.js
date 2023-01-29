import { loadFBX } from '../utils'

export class City {
    constructor(scene) {
        this.scene = scene;
        this.loadCity();
    }

    loadCity() {
        // 加载模型并且渲染到页面上
        loadFBX('/src/models/beijing.fbx').then(object => {
            this.scene.add(object)
        })
    }

    start() {
        // 保留
    }
}