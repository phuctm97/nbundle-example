import { useCallback, useEffect, useState } from "react";
import { TopbarMenuItem } from "@nbundle/react";

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
      <TopbarMenuItem
        type="button"
        text="Show Twitter preview"
        onClick={showTwitterPreview}
      />
      <TopbarMenuItem
        type="toggle"
        text="Custom theme"
        value={enableCustomTheme}
        onChange={setEnableCustomTheme}
      />
    </>
  );
}
