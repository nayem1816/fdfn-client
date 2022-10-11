import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Skeleton1 from './view/components/Common/Skeleton/Skeleton1';
import PaymentReg from './view/pages/Registration/PaymentReg';

const Main = React.lazy(() => import('./view/pages/Main'));
const Home = React.lazy(() => import('./view/pages/Home/Home'));
const PayBill = React.lazy(() => import('./view/pages/PayBill/PayBill'));
const Packages = React.lazy(() => import('./view/pages/Packages/Packages'));
const FtpSite = React.lazy(() => import('./view/pages/FtpSite/FtpSite'));
const LiveTv = React.lazy(() => import('./view/pages/LiveTv/LiveTv'));
const About = React.lazy(() => import('./view/pages/About/About'));
const Contact = React.lazy(() => import('./view/pages/Contact/Contact'));
const Coverage = React.lazy(() => import('./view/pages/Coverage/Coverage'));
const Login = React.lazy(() => import('./view/pages/Login/Login'));
const Signup = React.lazy(() => import('./view/pages/Login/Signup'));
const Reset = React.lazy(() => import('./view/pages/Login/Reset'));
const ProductDetails = React.lazy(() =>
    import('./view/components/Products/ProductDetails')
);
const Dashboard = React.lazy(() => import('./view/pages/Dashboard'));
const DashboardHome = React.lazy(() =>
    import('./view/components/Dashboard/DashboardHome/DashboardHome')
);
const Order = React.lazy(() =>
    import('./view/components/Dashboard/Order/Order')
);
const Protected = React.lazy(() => import('./view/pages/Login/Protected'));
const AddProducts = React.lazy(() =>
    import('./view/components/Dashboard/Products/AddProducts')
);
const BillList = React.lazy(() =>
    import('./view/components/Dashboard/BillList/BillList')
);
const Admin = React.lazy(() =>
    import('./view/components/Dashboard/Admin/Admin')
);
const ManagePackage = React.lazy(() =>
    import('./view/components/Dashboard/Packages/ManagePackage')
);
const ManageProducts = React.lazy(() =>
    import('./view/components/Dashboard/Products/ManageProducts')
);
const AddTeamMembers = React.lazy(() =>
    import('./view/components/Dashboard/TeamMembers/AddTeamMembers')
);
const ManageTeamMembers = React.lazy(() =>
    import('./view/components/Dashboard/TeamMembers/ManageTeamMembers')
);
const AddFtp = React.lazy(() =>
    import('./view/components/Dashboard/Ftp/AddFtp')
);
const ManageFtp = React.lazy(() =>
    import('./view/components/Dashboard/Ftp/ManageFtp')
);
const AddTv = React.lazy(() =>
    import('./view/components/Dashboard/LiveTv/AddTv')
);
const ManageTv = React.lazy(() =>
    import('./view/components/Dashboard/LiveTv/ManageTv')
);
const AddCoverage = React.lazy(() =>
    import('./view/components/Dashboard/Coverage/AddCoverage')
);
const ManageCoverage = React.lazy(() =>
    import('./view/components/Dashboard/Coverage/ManageCoverage')
);
const AddPackage = React.lazy(() =>
    import('./view/components/Dashboard/Packages/AddPackage')
);
const Registration = React.lazy(() =>
    import('./view/pages/Registration/Registration')
);
const ProductPayment = React.lazy(() =>
    import('./view/pages/Payment/ProductPayment')
);
const Registrations = React.lazy(() =>
    import('./view/components/Dashboard/Registrations/Registrations')
);
const Notification = React.lazy(() =>
    import('./view/components/Dashboard/CreateNotification/Notification')
);
const MyOrder = React.lazy(() => import('./view/pages/MyOrder/MyOrder'));
const MyRegistration = React.lazy(() =>
    import('./view/pages/MyRegistration/MyRegistration')
);

function App() {
    return (
        <div>
            <ToastContainer />
            <Suspense
                fallback={
                    <div>
                        <Skeleton1 />
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route path="" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/payBill" element={<PayBill />} />
                        <Route path="/packages" element={<Packages />} />
                        <Route
                            path="/registration/:id"
                            element={<Registration />}
                        />
                        <Route
                            path="/registration/paymentRegistration/:id"
                            element={<PaymentReg />}
                        />
                        <Route path="/my-orders" element={<MyOrder />} />
                        <Route
                            path="/my-registration"
                            element={<MyRegistration />}
                        />
                        <Route path="/ftpSite" element={<FtpSite />} />
                        <Route path="/liveTv" element={<LiveTv />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/coverage" element={<Coverage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/reset" element={<Reset />} />
                        <Route
                            path="/product/:id"
                            element={
                                <Protected>
                                    <ProductDetails />
                                </Protected>
                            }
                        />
                        <Route
                            path="/product/productPayment/:id"
                            element={
                                <Protected>
                                    <ProductPayment />
                                </Protected>
                            }
                        />
                        <Route path="*" element={<h2>Not Found</h2>} />
                    </Route>
                    <Route
                        path="/dashboard"
                        element={
                            <Protected>
                                {/* <AdminProtected> */}
                                <Dashboard />
                                {/* </AdminProtected> */}
                            </Protected>
                        }
                    >
                        <Route
                            path="/dashboard"
                            element={
                                <Protected>
                                    {/* <AdminProtected> */}
                                    <DashboardHome />
                                    {/* </AdminProtected> */}
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/bills"
                            element={
                                <Protected>
                                    <BillList />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/admin"
                            element={
                                <Protected>
                                    <Admin />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/orders"
                            element={
                                <Protected>
                                    <Order />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/registrations"
                            element={
                                <Protected>
                                    <Registrations />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/addPackage"
                            element={
                                <Protected>
                                    <AddPackage />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/managePackage"
                            element={
                                <Protected>
                                    <ManagePackage />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/addProduct"
                            element={
                                <Protected>
                                    <AddProducts />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/manageProduct"
                            element={
                                <Protected>
                                    <ManageProducts />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/addMember"
                            element={
                                <Protected>
                                    <AddTeamMembers />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/manageMember"
                            element={
                                <Protected>
                                    <ManageTeamMembers />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/addFtp"
                            element={
                                <Protected>
                                    <AddFtp />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/manageFtp"
                            element={
                                <Protected>
                                    <ManageFtp />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/addTv"
                            element={
                                <Protected>
                                    <AddTv />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/manageTv"
                            element={
                                <Protected>
                                    <ManageTv />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/addCoverage"
                            element={
                                <Protected>
                                    <AddCoverage />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/manageCoverage"
                            element={
                                <Protected>
                                    <ManageCoverage />
                                </Protected>
                            }
                        />
                        <Route
                            path="/dashboard/notification"
                            element={
                                <Protected>
                                    <Notification />
                                </Protected>
                            }
                        />
                    </Route>
                    <Route path="*" element={<h2>Not Found</h2>} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
