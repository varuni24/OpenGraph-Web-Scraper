import React from "react";

const FooterBar = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="mt-3">
              Made by Daniel, David, Dylan, Marcus, and Varuni
          </div>
          <div className="text-center text-sm">
            For any feedback, contact xyz@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
