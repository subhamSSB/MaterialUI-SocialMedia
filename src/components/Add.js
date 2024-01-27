import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import React from "react";
import styled from "@emotion/styled";
import {
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "5px",
});

const Add = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% -25px)", md: 30 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyleModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} borderRadius={5}  bgcolor={"background.default"} color={"text.primary"}>
          <Typography color="gray" textAlign="center" variant="h6">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Travis Howard"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
            <Typography fontWeight={500} variant="span">
              Subham Gope
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            multiline
            rows={2}
            placeholder="Post"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary"></EmojiEmotions>
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
          fullWidth

            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>
            
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;


