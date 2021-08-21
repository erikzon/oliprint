import { onAuthStateChanged } from "firebase/auth"
import { ref } from "vue"
import { auth } from '../firebase/config'

const user = ref(auth.currentUser)

onAuthStateChanged(auth, _user => {
    console.log('User state change. current user is:', _user);
    user.value = _user
})

const getUser = () => {
    return { user }
}

export default getUser