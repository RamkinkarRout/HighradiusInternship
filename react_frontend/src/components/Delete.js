import {
  Button,
  Container,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
} from "react";
import { useAlert } from "react-alert";
import { LinkContext } from "../LinkCoontext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#182933",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  color: "white",
};

const Delete = ({ deleteOpen, handleDeleteClose }) => {
  //getting sl_no array from context then maoping it to delete array

  const { sl_no, setSl_no, setLink, link } =
    useContext(LinkContext);

  const alert = useAlert();

  //using callback

  const changingLink = useCallback(async () => {
    setLink(
      "http://localhost:8080/highradius_project/data"
    );

    //refreshing page after deleting data in 1 seconds
    setTimeout(() => {
      window.location.reload();
    }, 2000);

    // console.log(link);
  }, [setLink]);

  const deleteData = useCallback(
    async (e, sl_no, setSl_no, setLink) => {
      //getting item from sl_no array and delting by calling axios
      e.preventDefault();

      if (sl_no.length > 0) {
        for (let i = 0; i < sl_no.length; i++) {
          const { data } = await axios.post(
            `http://localhost:8080/highradius_project/delete?item=${sl_no[i]}`
          );
          alert.success(data);
        }
      } else {
        alert.error("Please select atleast one item");
      }

      changingLink(setLink);

      //after deleting the item from sl_no array then setting it to empty array

      setSl_no([]);
      handleDeleteClose();
    },
    [changingLink, handleDeleteClose, alert]
  );

  return (
    <Fragment>
      <Container maxWidth={"sm"}>
        <Modal
          open={deleteOpen}
          onClose={handleDeleteClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography
              variant='h6'
              id='modal-modal-title'
              style={{
                marginBottom: "20px",
                paddingBottom: "20px",
              }}
            >
              Delete Records ?
            </Typography>

            <Typography
              variant='body1'
              id='modal-modal-description'
              style={{ paddingBottom: "20px" }}
            >
              Are you sure you want to delete the selected
              records?
            </Typography>

            <div className='advFlexbtn'>
              <Button
                variant={
                  sl_no.length > 0 ? "outlined" : "disabled"
                }
                className='muiBtn'
                style={{ marginRight: "5px" }}
                onClick={(e) => {
                  deleteData(
                    e,
                    sl_no,
                    setSl_no,
                    link,
                    setLink
                  );
                }}
              >
                Delete
              </Button>
              <Button
                className='muiBtn'
                variant='outlined'
                onClick={handleDeleteClose}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default Delete;
