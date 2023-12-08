import { Drawer } from "antd";
import { BsList } from "react-icons/bs";

export default function NavDrawer({
  children,
  drawerIsOpen,
  showDrawer,
  onClose,
}) {
  return (
    <>
      <BsList onClick={showDrawer} style={{ fontSize: "2rem" }} />
      <Drawer
        title="Navigate"
        placement="top"
        onClose={onClose}
        open={drawerIsOpen}
        style={{
          backgroundColor: "#45a29e",
          color: "#242424",
          fontSize: "1rem",
        }}
      >
        {children}
      </Drawer>
    </>
  );
}
