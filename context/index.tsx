import {
  createContext,
  useContext,
  useReducer,
  useState,
  ReactNode,
  JSX,
  Dispatch,
  SetStateAction,
  ReactElement,
  cloneElement,
  Children,
} from "react";

type Reducer<S, A> = (state: S, action: A) => S;
type StateSetter<S, A> = Dispatch<SetStateAction<S>> | Dispatch<A>;
type GenerateContextProps<S, A> = [
  () => S,
  () => StateSetter<S, A>,
  ({ children }: { children: ReactNode }) => JSX.Element
];

function validateConsumer<T>(consumer: T | null) {
  if (consumer === null) {
    throw new Error("consumer must be used within a StoreProvider");
  }

  return consumer;
}

export default function generateContext<S, A>(
  initialData: S,
  reducer?: Reducer<S, A>
): GenerateContextProps<S, A> {
  const Data = createContext<S | null>(null);
  const SetData = createContext<StateSetter<S, A> | null>(null);

  return [
    () => validateConsumer(useContext(Data)),
    () => validateConsumer(useContext(SetData)),
    ({ children }) => {
      const [data, setData] = reducer
        ? useReducer<Reducer<S, A>>(reducer, initialData)
        : useState<S>(initialData);

      return (
        <Data.Provider value={data}>
          <SetData.Provider value={setData}>{children}</SetData.Provider>
        </Data.Provider>
      );
    },
  ];
}

export function ContextSliceWrapper<T extends Partial<any>>({
  children,
  contextSlice,
}: {
  children: ReactElement;
  contextSlice: () => T;
}) {
  const contextSliceProps = contextSlice();

  const modifiedChildren = Children.map(children, (child: ReactElement) => {
    return cloneElement(child, contextSliceProps);
  });

  return <>{modifiedChildren}</>;
}
