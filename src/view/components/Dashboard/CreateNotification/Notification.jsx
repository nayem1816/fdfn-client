import React from 'react';
import CreateNotification from './CreateNotification';
import ManageNotification from './ManageNotification';

const Notification = () => {
    return (
        <div>
            <h2 className="text-4xl">Notification</h2>
            <div className="form-panel my-16 ml-5">
                <h2 className="text-2xl">Create Notification</h2>
                <CreateNotification />
            </div>
            <div className="admin-list-panel my-16 ml-5">
                <h2 className="text-2xl mb-5">Notification List</h2>
                <ManageNotification />
            </div>
        </div>
    );
};

export default Notification;
