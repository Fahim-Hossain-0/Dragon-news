import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='container mx-auto py-12'>
            <Marquee className='text-lg'>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;