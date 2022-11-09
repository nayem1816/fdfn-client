import React from 'react';

const DashboardHome = () => {
    const [totalPackages, setTotalPackages] = React.useState(0);
    const [totalProducts, setTotalProducts] = React.useState(0);
    const [totalTeamMembers, setTotalTotalMembers] = React.useState(0);
    const [totalFtpServer, setTotalFtpServer] = React.useState(0);
    const [totalTvServer, setTotalTvServer] = React.useState(0);
    const [totalRegistrationUser, setTotalRegistrationUser] = React.useState(0);
    const [totalBuyProduct, setTotalBuyProduct] = React.useState(0);
    React.useEffect(() => {
        fetch(`https://fdfn-server-v2.vercel.app/api/v1/readPackages`)
            .then((res) => res.json())
            .then((data) => setTotalPackages(data.data.length));
        fetch(`https://fdfn-server-v2.vercel.app/api/v1/readProducts`)
            .then((res) => res.json())
            .then((data) => setTotalProducts(data.data.length));
        fetch(`https://fdfn-server-v2.vercel.app/api/v1/readMembers`)
            .then((res) => res.json())
            .then((data) => setTotalTotalMembers(data.data.length));
        fetch(`https://fdfn-server-v2.vercel.app/api/v1/readFtp`)
            .then((res) => res.json())
            .then((data) => setTotalFtpServer(data.data.length));
        fetch(`https://fdfn-server-v2.vercel.app/api/v1/readTv`)
            .then((res) => res.json())
            .then((data) => setTotalTvServer(data.data.length));
        fetch(`https://fdfn-server-v2.vercel.app/api/v1/readRegPackage`)
            .then((res) => res.json())
            .then((data) => setTotalRegistrationUser(data.data.length));
        fetch(`https://fdfn-server-v2.vercel.app/api/v1/readProductBill`)
            .then((res) => res.json())
            .then((data) => setTotalBuyProduct(data.data.length));
    }, []);

    console.log('Total Packages', totalPackages);
    console.log('Total Products', totalProducts);
    console.log('Total Team Members', totalTeamMembers);
    console.log('Total Ftp Server', totalFtpServer);

    console.log('Total Tv Server', totalTvServer);
    console.log('Total Registration User', totalRegistrationUser);
    console.log('Total Buy Product', totalBuyProduct);

    return (
        <>
            <h2>Dashboard</h2>
        </>
    );
};

export default DashboardHome;
