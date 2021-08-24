import { ref as vueRef } from "vue";
import { storage } from "../firebase/config";
import { deleteObject, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const useStorage = () => {
    const error = vueRef(null)
    const url = vueRef(null)
    const filePath = vueRef(null)

    const uploadImage = async (file) => {
        filePath.value = `productos/${file.name}`
        //const storageRef = projectStorage.ref(filePath.value)
        const storageRef = await ref(storage, filePath.value)
        //const storageRef = StorageReference(storage, filePath)
        try {
            const res = await uploadBytes(storageRef, file)
            url.value = await getDownloadURL(storageRef)
            console.log(url.value);
        } catch (err) {
            console.log(err.message);
            error.value = err.message
        }
    }

    const deleteImage = async (path) => {
        //const storageRef = projectStorage.ref(path)
        const storageRef = await ref(storage, path)
        //const storageRef = storageRef(storage, filePath)
        try {
            await deleteObject(storageRef)
            //await storageRef.delete()
        } catch (err) {
            console.log(err.message);
            error.value = err.message
        }
    }

    return { url, filePath, error, uploadImage, deleteImage }
}

export default useStorage