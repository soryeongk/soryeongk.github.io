import { useState } from "react";

interface UseInputValue<T> {
  inputValue: T;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useInputValue = <T,>(initialValue: T) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return { inputValue, onChange: handleChange };
};

function Error() {
  const userName: UseInputValue<string> = useInputValue("");

  return (
    <form>
      <label>This is string</label>
      <input value={userName.inputValue} onChange={userName.onChange} />
    </form>
  );
}

export default Error;
