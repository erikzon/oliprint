import { createUserWithEmailAndPassword } from "firebase/auth"
import { ref } from "vue"
import { auth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password) => {
    error.value = null

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        }
        error.value = null
        isPending.value = false
        return res
    } catch (err) {
        console.log(err.message);
        error.value = err;
        isPending.value = false;
    }
}

const useSignup = () => {
    return { error, signup, isPending }
}

export default useSignup