import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center mt-44 ">
            <div className="lg:w-40 lg:h-40 w-15 h-15 md:w-30 md:h-30 border-t-4 border-b-4 border-secondary rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;