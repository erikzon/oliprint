import { signInWithEmailAndPassword } from "firebase/auth"
import { ref } from "vue"
import { Auth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    error.value = null
    isPending.value = true;

    try {
        const LoginRef = await signInWithEmailAndPassword(Auth, email, password) 
        error.value = null
        isPending.value = false;
        return res
    } catch (err) {
        console.log(err.value);
        error.value = 'Incorrect login credentails'
        isPending.value = false;
    }
}

const useLogin = () => {
    return { error, login, isPending }
}

export default useLogin