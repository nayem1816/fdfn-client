// import React, { useEffect } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Navigate, useLocation } from 'react-router-dom';
// import auth from './../../../firebase.config';

// const AdminProtected = ({ children }) => {
//     const [isAdmin, setIsAdmin] = React.useState(false);
//     const [isModerator, setIsModerator] = React.useState(false);
//     const [user, loading] = useAuthState(auth);

//     const location = useLocation();

//     useEffect(() => {
//         if (user) {
//             const email = user.email;
//             const url = `http://localhost:5000/api/v1/isAdmin/?email=${email}`;
//             fetch(url)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     if (data.isAdmin) {
//                         setIsAdmin(true);
//                         return children;
//                     }
//                 });
//         }
//     }, [user, location, children]);

//     // fetch(`http://localhost:5000/api/v1/isAdmin/?email=${user?.email}`)
//     //     .then((res) => res.json())
//     //     .then((data) => {
//     //         console.log('Admin Protected', data);
//     //         if (data?.data?.adminEmail === user?.email) {
//     //             console.log(data?.data?.adminEmail);
//     //             return children;
//     //         }
//     //     });

//     // fetch(`http://localhost:5000/api/v1/isModerator/?email=${user?.email}`)
//     //     .then((res) => res.json())
//     //     .then((data) => {
//     //         console.log(data);
//     //         if (data?.data?.adminEmail === user?.email) {
//     //             console.log(data?.data?.adminEmail);
//     //             return children;
//     //         }
//     //     });
//     // }, [user, location, children]);

//     if (loading) {
//         return null;
//     }

//     if (isAdmin === false) {
//         return <Navigate to="/" />;
//     }
//     // return <Navigate to="/" state={{ from: location }} />;
// };

// export default AdminProtected;
