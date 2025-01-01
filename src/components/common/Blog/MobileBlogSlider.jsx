import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useState } from "react";
import { RiMenuUnfold4Line, RiMenuUnfoldLine } from "react-icons/ri";
import BlogSlider from "../BlogSlider";

const MobileBlogSlider = ({blogs}) => {
  
  const [open, setOpen] = useState(false);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setOpen(!open)}>
      <List>
        <BlogSlider blogs={blogs} />
      </List>
    </Box>
  );

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <RiMenuUnfold4Line size={30} className="text-primary" />
        ) : (
          <RiMenuUnfoldLine size={30} className="texthover" />
        )}
      </button>
      <Drawer open={open} onClick={() => setOpen(!open)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default MobileBlogSlider;