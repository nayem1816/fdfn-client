import React, { useEffect } from 'react';
import AddAdmin from './AddAdmin';
import AdminList from './AdminList';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../../firebase.config';

const Admin = () => {
    const [user] = useAuthState(auth);
    const [isAdmin, setIsAdmin] = React.useState(false);

    useEffect(() => {
        fetch(
            `https://fdfn-server-v2.vercel.app/api/v1/isAdmin?email=${user.email}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.data?.adminEmail === user.email) {
                    setIsAdmin(true);
                }
            });
    }, [user.email]);
    return (
        <div>
            <h2 className="text-4xl">Admin</h2>
            {isAdmin === true && (
                <div className="form-panel my-16 ml-5">
                    <h2 className="text-2xl">Make an Admin</h2>
                    <AddAdmin />
                </div>
            )}
            <div className="admin-list-panel my-16 ml-5">
                <h2 className="text-2xl mb-5">Admin List</h2>
                <AdminList />
            </div>
        </div>
    );
};

export default Admin;
