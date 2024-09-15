import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            <img src="/images/P logo.png" alt="" style={{ width: '40px', height: '40px', }} />
            <span class="ml-3 text-xl" style={{cursor:"pointer"}}>Piyush Karn</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 — Designed By
            <a
              href="https://www.linkedin.com/in/alwin-bhandari-5430262b0/"
              class="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @AlwinBhandari
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
