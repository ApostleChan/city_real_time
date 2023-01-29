import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

// 加载fbx模型
const fbxLoader = new FBXLoader()
export const loadFBX = (url) => {
    return new Promise(((resolve, reject) => {
        fbxLoader.load(url, (object) => {
            resolve(object)
        }, () => {}, (error) => {
            reject(error)
        })
    })).catch((e)=>{})
}
