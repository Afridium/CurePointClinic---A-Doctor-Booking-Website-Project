import React from 'react';

const Contact = () => {
  return (
    <div className="w-full p-4 mb-8">
      {/* Centered content */}
      <div className="flex flex-col justify-center items-center h-full text-center gap-4 lg:w-1/2 mx-auto p-12 border-4 border-white rounded-3xl shadow-2xl mb-16">
        <h1 className="font-black text-4xl mb-3">Contact Us</h1>
        <p className="text-xl opacity-80">Phone: 01234567890</p>
        <p className="text-xl opacity-80">Telephone: 096234832</p>
        <p className="text-xl opacity-80">Email: curepoint@curepoint.com</p>
      </div>

      {/* Footer */}
      <div>
        <h1 className="text-center opacity-80 mt-4">CurePoint Clinic Ltd.</h1>
      </div>
    </div>
  );
};

export default Contact;
