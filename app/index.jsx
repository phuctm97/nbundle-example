import { useCallback, useEffect, useState } from "react";
import { TopbarMenuButtonItem, TopbarMenuToggleItem } from "@nbundle/react";

export default function App() {
  const showTwitterPreview = useCallback(() => {
    console.log("Show Twitter preview");
  });
  const [enableCustomTheme, setEnableCustomTheme] = useState(false);
  useEffect(() => {
    console.log("Custom theme: ", enableCustomTheme ? "Enabled" : "Disabled");
  }, [enableCustomTheme]);
  return (
    <>
      <TopbarMenuButtonItem
        text="Show Twitter preview"
        onClick={showTwitterPreview}
      />
      <TopbarMenuToggleItem
        text="Custom theme"
        value={enableCustomTheme}
        onChange={setEnableCustomTheme}
      />
    </>
  );
}
