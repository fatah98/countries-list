import React from "react";

export const Loader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-LightModeElements/80 dark:bg-DarkModeElements/80 flex items-center justify-center backdrop-blur-[2px]">
      <div className="animate-pulse flex items-center justify-center flex-col">
        <div className="h-10 w-10 bg-red-300 rounded-full"></div>
        Loading
      </div>
    </div>
  );
};
