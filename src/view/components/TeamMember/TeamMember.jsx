import React, { useEffect } from 'react';
import MemberCard from './MemberCard';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMembers } from './../../../redux/features/membersSlice';

const TeamMember = () => {
    const { data, loading, error } = useSelector(
        (state) => state.membersReducer
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMembers('readMembers'));
    }, [dispatch]);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className="container mx-auto">
            <div className="px-10">
                <Typography variant="h6">Our Team Members</Typography>
            </div>
            <div className="flex justify-center m-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 ">
                    {data.data?.map((member) => (
                        <MemberCard key={member?._id} member={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
