import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getLocalStorageItem } from "../utils/services";

interface Props {
    component: React.ComponentType
    isAuth?: boolean;
}

export const ProtectedRoute = ({ component: RouteComponent, isAuth }: Props) => {

    if (isAuth) {
        return <RouteComponent />
    }
    else {
        return <Navigate to="/" />
    }
}