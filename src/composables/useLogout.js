import { signOut } from "firebase/auth"
import { ref } from "vue"
import { auth } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const logout = async () => {
    error.value = null
    isPending.value = true;
    try {
        await signOut(auth)
        isPending.value = false;
        console.log('logged out');
    } catch (err) {
        console.log(err.message);
        error.value = err.message
        isPending.value = false;
    }
}

const useLogout = () => {
    return { logout, error, isPending }
}

export default useLogout