import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue"
import { fireStore } from '../firebase/config'

const useCollection = (collectionName) => {
    const isPending = ref(false)
    const error = ref(false);

    const addDocu = async (doc) => {
        error.value = null
        isPending.value = true
        try {
            const collectionRef = await collection(fireStore, collectionName)
            const res = await addDoc(collectionRef, doc)
            isPending.value = false
            error.value = null
            return res
        } catch (err) {
            console.log(err.message);
            error.value = 'could not send the message'
            isPending.value = false
        }
    }
    return { error, addDocu }
}

export default useCollection