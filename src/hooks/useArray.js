import { useCallback, useState } from "react";
// below line could alternatively be "export function useArray(initialValue{}"
export const useArray = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    add: useCallback((toAdd) => setValue((value) => [...value, toAdd])),
    clear: useCallback(() => setValue([])),
    delete: useCallback((id) =>
      setValue((arr) => arr.filter((v) => v && v.id !== id))
    ),
    changeComplete: useCallback((id) =>
      setValue((arr) => {
        let newArr = arr.map((val) => {
          if (id === val.id) {
            return { ...val, completed: !val.completed };
          }
          return val;
        });
        return newArr;
      })
    ),
  };
};
