import React from 'react';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-center">Welcome to My Website</h1>
            <p className="mt-4 text-lg text-center">
                This is the home page of your React application using Tailwind CSS and TypeScript.
            </p>
        </div>
    );
};

export default Home;