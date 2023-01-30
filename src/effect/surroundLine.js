import * as THREE from "three";

export class SurroundLine {
    constructor(scene, child) {
        this.scene = scene;
        this.child = child;
        this.render();
    }
    render() {
        // 使用着色器材质
        const material = new THREE.ShaderMaterial({
            uniforms: {
                city_color: {
                    value: new THREE.Color('#1B3045')
                },
            },
            vertexShader: `
                            void main(){
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                            }
                        `,
            fragmentShader: `
                            uniform vec3 city_color;
                            void main(){
                                gl_FragColor = vec4(city_color, 1.0);
                            }
                        `
        })
        const mesh = new THREE.Mesh(this.child.geometry, material)

        // 让mesh继承child的旋转、缩放、平移
        mesh.position.copy(this.child.position)
        mesh.scale.copy(this.child.scale)
        mesh.rotation.copy(this.child.rotation)

        this.scene.add(mesh)

    }
}