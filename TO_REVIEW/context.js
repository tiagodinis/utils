import { createContext, useContext, useReducer, useState } from "react";

function validateConsumer(consumer) {
  if (consumer === undefined) {
    throw new Error("consumer must be used within a StoreProvider");
  }

  return consumer;
}

export default function generateContext(initialData, reducer) {
  const Data = createContext(null);
  const SetData = createContext(null);

  return [
    () => validateConsumer(useContext(Data)),
    () => validateConsumer(useContext(SetData)),
    ({ children }) => {
      const [data, setData] = reducer
        ? useReducer(reducer, initialData)
        : useState(initialData);

      return (
        <Data.Provider value={data}>
          <SetData.Provider value={setData}>{children}</SetData.Provider>
        </Data.Provider>
      );
    },
  ];
}
