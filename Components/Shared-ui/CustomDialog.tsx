import { colors } from "@/Constants/colors";
import { Dialog, DialogContent } from "@mui/material";
import type { JSX, ReactNode } from "react";
interface CustomDialogProps {
  handleClose: (value: string) => void;
  open:boolean;
  content:ReactNode;
}
export default function CustomDialog(props:CustomDialogProps): JSX.Element {
    const {handleClose, open, content} = props;
    return (
      <Dialog
        onClose={handleClose}
        open={open}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(37, 30, 109, 0.8)",
            },
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius:"32px",
            p:3,
            width:"100%",
            maxWidth:"35.8rem",
            backgroundColor:colors.gray1000
          },
        }}
      >
        <DialogContent>{content}</DialogContent>
      </Dialog>
    );
}