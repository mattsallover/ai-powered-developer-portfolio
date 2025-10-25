
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 mt-20">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
