import React from "react";
import { Chat } from "../components/chat";
import Drawer from "../components/drawer";
import { Category, Conversation } from "@aimpact/airooms/models";
import FormModal from "../components/modal";

type Modal = "none" | "category" | "conversation";

export /*bundle*/
function View({ store }): JSX.Element {
  const [modal, setModal] = React.useState("none");
  const options = [
    {
      label: "Create category",
      icon: "iconamoon:category-bold",
      handler: () => setModal("category"),
    },
    {
      label: "Create new chat",
      icon: "material-symbols:new-window",
      handler: () => setModal("conversation"),
    },
  ];
  return (
    <>
      <Chat store={store} /> <Drawer options={options} />
      {/*  <FormModal /> */}
    </>
  );
}
