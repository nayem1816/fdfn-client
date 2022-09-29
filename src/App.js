import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Skeleton1 from './view/components/Common/Skeleton/Skeleton1';
import Main from './view/pages/Main';
import Home from './view/pages/Home/Home';
import PayBill from './view/pages/PayBill/PayBill';
import Packages from './view/pages/Packages/Packages';
import FtpSite from './view/pages/FtpSite/FtpSite';
import LiveTv from './view/pages/LiveTv/LiveTv';
import About from './view/pages/About/About';
import Contact from './view/pages/Contact/Contact';
import Coverage from './view/pages/Coverage/Coverage';
import Login from './view/pages/Login/Login';
import Signup from './view/pages/Login/Signup';
import Reset from './view/pages/Login/Reset';
import ProductDetails from './view/components/Products/ProductDetails';
import Dashboard from './view/pages/Dashboard';
import DashboardHome from './view/components/Dashboard/DashboardHome/DashboardHome';
import Order from './view/components/Dashboard/Order/Order';
import Inbox from './view/components/Dashboard/Inbox/Inbox';
import DashboardProfile from './view/components/Dashboard/DashboardProfile/DashboardProfile';
import Products from './view/components/Dashboard/Products/Products';
import Protected from './view/pages/Login/Protected';
// const Home = React.lazy(() => import('./components/Home/Home'));

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
                        <Route path="home" element={<Home />} />
                        <Route path="payBill" element={<PayBill />} />
                        <Route path="packages" element={<Packages />} />
                        <Route path="ftpSite" element={<FtpSite />} />
                        <Route path="liveTv" element={<LiveTv />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="coverage" element={<Coverage />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="reset" element={<Reset />} />
                        <Route
                            path="product/:id"
                            element={
                                <Protected>
                                    <ProductDetails />
                                </Protected>
                            }
                        />
                        <Route path="*" element={<h2>Not Found</h2>} />
                    </Route>
                    <Route
                        path="/dashboard"
                        element={
                            <Protected>
                                <Dashboard />
                            </Protected>
                        }
                    >
                        <Route
                            path=""
                            element={
                                <Protected>
                                    <DashboardHome />
                                </Protected>
                            }
                        />
                        <Route
                            path="orders"
                            element={
                                <Protected>
                                    <Order />
                                </Protected>
                            }
                        />
                        <Route
                            path="inbox"
                            element={
                                <Protected>
                                    <Inbox />
                                </Protected>
                            }
                        />
                        <Route
                            path="profile"
                            element={
                                <Protected>
                                    <DashboardProfile />
                                </Protected>
                            }
                        />
                        <Route
                            path="products"
                            element={
                                <Protected>
                                    <Products />
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
