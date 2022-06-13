import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("nbundle example: loaded");
    return () => console.log("nbundle example: unloaded");
  }, []);
  return <></>;
}
