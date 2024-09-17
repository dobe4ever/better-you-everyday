// src/components/todos/AddToDoBox.js
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import IconButton from '../common/IconButton';
import { Input } from "../common/input.jsx";

const AddToDoBox = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddClick = () => {
    if (inputValue.trim()) {
      onAdd(inputValue.trim());
      setInputValue("");
    }
  };
  return (
    <div className="justify-center fixed bottom-4 right-12">
      <div className="relative flex items-center w-full">
        <Input
          type="text"
          placeholder="Add New To-Do"
          // required
          className="w-full"
        />
        <IconButton
          className="absolute right-2 rounded-full flex items-center justify-center cursor-pointer bg-orange-main text-white"
          icon={Plus}
          size={24}
          onClick={handleAddClick}
        />
    </div>
  </div>
  );
};

export default AddToDoBox;