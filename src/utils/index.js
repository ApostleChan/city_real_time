import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

const fbxLoader = new FBXLoader()
export const loadFBX = async (url) => {
    try {
        return await new Promise((resolve, reject) => {
            fbxLoader.load(url, (object) => {
                resolve(object)
            }, () => { }, (error) => {
                reject(error)
            })
        })
    } catch (e) { }
}