
import { useState, useEffect } from 'react'
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { SIGNIN_USER, SAVE_TOKEN, LOGOUT } from '../Redux/userSlice';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { useQuery, useMutation } from 'react-query';




// WebBrowser.maybeCompleteAuthSession();
const useLogin = () => {
    GoogleSignin.configure({
    webClientId:
      "376331575913-tlpvfh7etmo5m57dto6e1bm6p7dear16.apps.googleusercontent.com",
  });
 
  const [initializing, setInitializing] = useState(false);
  const [user, setUser] = useState<any>({});
  const dispatch = useAppDispatch();


  const submitLogin = async()=> {
    try {
      setInitializing(true);
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken } = await GoogleSignin.signIn();
      dispatch(SAVE_TOKEN(idToken))
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
    finally {
      setInitializing(false);
    }
  }

  const onAuthStateChanged=(user:any)=> {
    if (user) {
    dispatch(SIGNIN_USER({displayName: user.displayName,  email: user.email, photoURL: user.photoURL}))
    }
    if (initializing) setInitializing(true);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleLogout = async () => {
      try {
        dispatch(LOGOUT());
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        await auth().signOut();
        console.log("User signed out!");
      
      
      } catch (error) {
        console.log(error);
      }
    }
return {submitLogin,initializing, handleLogout, }
}

export default useLogin

