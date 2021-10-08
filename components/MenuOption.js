import { useState } from "react";

function MenuOption({ active, title, isRed, selected, ...props }) {
  return (
    <div onClick={props.onClick} className="p-2 bounce">
      <p
        style={{ fontFamily: "Gluten" }}
        className={`cursor-pointer hover:text-red-400 text-white-300 text-lg  uppercase font-semibold font-mono border-b-2 border-green-400 ${
          active && "text-red-500"
        }`}
      >
        {title}
      </p>
    </div>
  );
}

export default MenuOption;
