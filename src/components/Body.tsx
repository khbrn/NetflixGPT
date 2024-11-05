import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from "../redux/userSlice";
import { auth } from '../../firebase';

import Login from "./Login";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, displayName, uid } = user;
                dispatch(addUser({ id: uid, email, displayName }));
                navigate('/browse');
        } else {
                dispatch(removeUser());
                navigate('/');
        }
        });
    }, [dispatch, navigate]);

    return (
        <Login />
    )
}

export default Body;
