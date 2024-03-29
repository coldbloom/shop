import React from 'react';
import AdminLogin from "@/components/admin/login";
import AdminHome from "@/components/admin/home";
import {useSelector, useDispatch} from "react-redux";
import {IRootState} from "@/store";
import { getProfile } from "@/store/features/auth/actionCreators";
import EmptyLayout from "@/components/layout/components/emptyLayout";

const Admin = () => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector(
        (state: IRootState) => !!state.auth.authData.accessToken
    )

    React.useEffect(() => {
        // @ts-ignore
        dispatch(getProfile())
    }, [dispatch])

    return (
        <>
            {isLoggedIn
                ? <AdminHome />
                : <AdminLogin />}
        </>
    );
};

Admin.layout = EmptyLayout;
export default Admin;