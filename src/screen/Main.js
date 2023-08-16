import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { setLoginData } from "../app/store.js"

function MainPage() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { id } = useParams();
    let params = id.split('$');
    let datas = {
        'accessToken': params[0],
        'refreshToken': params[1],
        'userId': params[2],
    }
    useEffect(() => {
        dispatch(setLoginData(datas));
        //console.log('data:' + JSON.stringify(check, null, 2));
        navigate('/home')
    })


    return (
        <>
            <p>accessToken : {datas.accessToken}</p>
            <p>refreshToken : {datas.refreshToken}</p>
            <p>userId : {datas.userId}</p>
        </>
    )
}

export default MainPage;