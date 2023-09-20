import { auth } from "../Utility/FirebaseConfig";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ROOT } from "../Utility/Routers";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const [user, loading, error] = useAuthState(auth);

  return [user, loading, error];
};

export const useLogin = () => {
  // Loading state
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async ({ email, password, redirectTo = ROOT }) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      navigate(redirectTo);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
      return false; //Return false if login failed
    }
    setLoading(false);
    return true;
  };
  return [login, isLoading];
};

export const useSignup = () => {
  const [isLoading, setLoading] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

  const signup = async ({ email, password, redirectTo = ROOT }) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(email, password);
      toast.success("Signup Successful")
      navigate(redirectTo)
    } catch (error) {
      toast.error(error.message)
      return false;
    }
    setLoading(false)
    return true;
  };

  return [signup, user, loading, error];
};
