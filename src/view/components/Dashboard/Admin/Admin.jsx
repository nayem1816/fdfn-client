import React from 'react';
import AddAdmin from './AddAdmin';
import AdminList from './AdminList';

const Admin = () => {
    return (
        <div>
            <h2 className="text-4xl">Admin</h2>
            <div className="form-panel my-16 ml-5">
                <h2 className="text-2xl">Make an Admin</h2>
                <AddAdmin />
            </div>
            <div className="admin-list-panel my-16 ml-5">
                <h2 className="text-2xl mb-5">Admin List</h2>
                <AdminList />
            </div>
        </div>
    );
};

export default Admin;
