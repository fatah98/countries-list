import React from "react";

const Footer = () => {
  return (
    <footer className="p-5 text-center text-LightModeText dark:text-DarkModeText border-t border-teal-50/40">
      <p>
        Copyright &copy; {new Date().getFullYear()}, Countries Info App. Created
        by Abdulfatai
      </p>
    </footer>
  );
};

export default Footer;
