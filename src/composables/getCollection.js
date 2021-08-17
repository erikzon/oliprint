import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { fireStore } from "../firebase/config";

const getDocuments = (collectionName) => {
    const docs = ref([])
    const error = ref(null)

    const load = async (collectionName) => {
        try {
            const collectionRef = collection(fireStore, collectionName)
            //const collectionRef = collection(fireStore, "test")
            const res = await getDocs(collectionRef);
            docs.value = res.docs.map(doc => {
                return doc.data()
            });
            // asi accedi hasta el string
            //console.log("el res.docs es", docs.value[0].mocoso);
        } catch (err) {
            error.value = err.message;
            console.log('error en composable getCollection', error.value);
        }
    }
    return { docs, error, load }
}
export default getDocuments