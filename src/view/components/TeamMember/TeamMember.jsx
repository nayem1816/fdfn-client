import React from 'react';
import MemberCard from './MemberCard';
import { Typography } from '@mui/material';

const membersData = [1, 2, 3, 4, 5, 6];

const TeamMember = () => {
    return (
        <div className="container mx-auto">
            <div className="px-10">
                <Typography variant="h6">Our Team Members</Typography>
            </div>
            <div className="flex justify-center m-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 ">
                    {membersData.map((member) => (
                        <MemberCard key={member} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
