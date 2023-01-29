import * as THREE from 'three';
import '../base/index.css';
import {City} from './city'

export const initCity = () => {
    // 获取canvas 元素
    const canvas = document.getElementById('webgl');
    // 创建场景
    const scene = new THREE.Scene();
    // 创建相机
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100000);
    camera.position.set(0, 0, 100);
    scene.add(camera);

    // 创建环境光
    scene.add(new THREE.AmbientLight(0xadadad));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 0);
    scene.add(directionalLight);

    const box = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshLambertMaterial({color:0xff0000});
    scene.add(new THREE.Mesh(box, material));


    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 设置像素比
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // 设置场景颜色
    renderer.setClearColor(new THREE.Color(0x000000), 1);

    // 加载城市模型
    const city = new City(scene);
    // 创建动画
    const start = ()=>{
        city.start();
         // 渲染场景
        renderer.render(scene, camera);

        requestAnimationFrame(start);
    }

   

    //// 窗口自适应
    window.addEventListener('resize', () => {
        // 更新宽高比
        camera.aspect = window.innerWidth / window.innerHeight;
        // 更新相机的投影矩阵
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 设置像素比
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

};