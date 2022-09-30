import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useRoutes } from "react-router-dom";
import { AdminPanel, LandingPage, Login, ProfessorDetails, ProfessorsPage, RatingPage, RegisterPage, ResetPassword, UserProfile } from "../components/pages";
import { AccountDetails, DepartmentsTemplate, Professors, SavedProfessors, UserRatings } from "../components/templates";
import { SchoolsTemplate } from "../components/templates/Schools";
import { UsersTemplate } from "../components/templates/Users";
import { ProtectedRoute } from "./protectedRoute";

const Routing = () => {

    const user = useSelector(state => (state as any).user)
    useEffect(() => {
        console.log(user, 'user')
    }, [user])

    const routes = [
        {
            path: '*',
            element: <h1>Not found</h1>
        },
        {
            path: '',
            element: <LandingPage />,
        },
        {
            path: 'login',
            element: <Login />,
        },
        {
            path: 'register',
            element: <RegisterPage />
        },
        {
            path: 'professors',
            element: <ProfessorsPage />,
        },
        {
            path: 'professor-details/:id',
            element: <ProfessorDetails />
        },
        {
            path: 'rate/:id',
            element: <RatingPage />
        },
        {
            path: 'reset/:email',
            element: <ResetPassword />
        },
        {
            path: 'user-profile',
            element: <UserProfile />,
            children: [
                { path: '', element: <AccountDetails /> },
                { path: 'userRating', element: <UserRatings /> },
                { path: 'savedProfessors', element: <SavedProfessors /> }
            ]
        },
        {
            path: 'admin',
            element: <ProtectedRoute isAuth={user.userRoleName === "admin"} component={AdminPanel} />,
            children: [
                { path: '', element: <h1>Dashboard</h1> },
                { path: 'schools', element: <SchoolsTemplate /> },
                { path: 'professors', element: <Professors /> },
                { path: 'users', element: <UsersTemplate /> },
                { path: 'departments', element: <DepartmentsTemplate /> }
            ]
        }
    ]
    const routing = useRoutes(routes);
    return <>
        {routing}
        <Outlet />
    </>
}

export default Routing