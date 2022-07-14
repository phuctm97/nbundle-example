import { useCallback } from "react";
import { TopbarMenuItem } from "@nbundle/react";
import { AiOutlineStar } from "react-icons/ai";

export default function App() {
  const handleClickMenuItem = useCallback(() => {
    console.log("Menu item clicked");
  }, []);
  return (
    <>
      <TopbarMenuItem
        type="button"
        text="This is a menu item"
        icon={AiOutlineStar}
        onClick={handleClickMenuItem}
      />
    </>
  );
}
