import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-180 rounded-lg shadow dark:bg-gray-900 absolute bottom-0 w-full">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            sagemcom
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
