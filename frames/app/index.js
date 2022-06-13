import nbundle from "@nbundle/core";

nbundle.addEventListener("after-navigate", (event) => {
  console.log(event);
  nbundle.showSidebar("inspector", { message: "Hello, world!" });
  nbundle.setMenuItems("page", {
    hello: {
      icon: "default",
      text: "Hello, world!",
      action: () => {
        console.log("Hello, world!");
      },
    },
  });
});
