import {
  alpha,
  Button,
  InputBase,
  styled,
} from "@mui/material";
import { useDebounce } from "use-debounce";
import React, {
  Fragment,
  useContext,
  useEffect,
  useState,
} from "react";
import SearchIcon from "@mui/icons-material/Search";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RefreshIcon from "@mui/icons-material/Refresh";
import "./App.css";
import AdvanceSearch from "./AdvanceSearch";
import { LinkContext } from "../LinkCoontext";
import AddModal from "./AddModal";
import Delete from "./Delete";
import Edit from "./Edit";
import Analytics from "./Analytics";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(
      theme.palette.common.white,
      0.25
    ),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const ModalButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleAdvOpen = () => setOpen(true);
  const handleAdvClose = () => setOpen(false);

  const [addOpen, setAddOpen] = useState(false);
  const handleAddOpen = () => setAddOpen(true);
  const handleAddClose = () => setAddOpen(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const handleDeleteOpen = () => setDeleteOpen(true);
  const handleDeleteClose = () => setDeleteOpen(false);

  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const [analysisOpen, setAnalysisOpen] = useState(false);
  const handleAnalysisOpen = () => setAnalysisOpen(true);
  const handleAnalysisClose = () => setAnalysisOpen(false);

  let { link, setLink, invoice_id, sl_no } =
    useContext(LinkContext);
  const [text, setText] = useState("");
  const [value] = useDebounce(text, 300);
  // console.log("sl_no :", sl_no.length);
  console.log("invoice_id :", invoice_id);
  console.log("value :", value);

  const handleSubmit1 = (e, setLink) => {
    e.preventDefault();
    if (e.target.value !== "") {
      setText(e.target.value);
      console.log("text :", text);
    } else {
      setText("");
    }
  };

  const handleSubmit2 = (setLink, value) => {
    if (value === "") {
      // console.log("value is empty");
      setLink(
        "http://localhost:8080/highradius_project/data"
      );
    } else {
      // console.log(value);
      setLink(
        `http://localhost:8080/highradius_project/searchData?doc_id=${value}&cust_number=${value}&invoice_id=${value}&buisness_year=${value}`
      );
    }
  };

  const handelRefresh = (e, link, setLink) => {
    e.preventDefault();
    setLink(
      "http://localhost:8080/highradius_project/data"
    );
    // console.log(link);
  };

  useEffect(() => {
    handleSubmit2(setLink, value);
  }, [value]);

  return (
    <Fragment>
      {/* predict, annalysis, advanceserch */}

      <div className='headerButtonContainer'>
        <div className='headerButtonDiv'>
          <Button variant='contained'>
            <OnlinePredictionIcon
              style={{
                margin: "0",
                textAlign: "center",
              }}
            />
            PREDICT
          </Button>
          <Button
            variant='outlined'
            onClick={handleAnalysisOpen}
          >
            <AnalyticsIcon
              style={{ margin: "0", textAlign: "center" }}
            />
            ANALYTICS VIEW
          </Button>
          <Button
            variant='outlined'
            onClick={handleAdvOpen}
          >
            <SavedSearchIcon
              style={{ margin: "0", textAlign: "center" }}
            />
            ADVANCE SEARCH
          </Button>
        </div>

        {/* search */}

        <div
          className='headerButtonDiv'
          style={{ justifyContent: "center" }}
        >
          <Button
            variant='outlined'
            onClick={(e) => {
              handelRefresh(e, link, setLink);
            }}
            style={{
              maxWidth: "60px",
              minWidth: "60px",
              padding: "0px",
              justifyContent: "flex-end",
            }}
          >
            <RefreshIcon />
          </Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search Customer Id'
              inputProps={{
                "aria-label": "search customer id",
              }}
              onChange={(e) =>
                handleSubmit1(e, link, setLink, value)
              }
            />
          </Search>
        </div>

        {/* add, edit, delete             */}
        <div className='headerButtonDiv'>
          <Button
            variant='outlined'
            onClick={handleAddOpen}
          >
            <AddIcon
              style={{ margin: "0", textAlign: "center" }}
            />
            ADD
          </Button>
          <Button
            variant={
              invoice_id === "" ? "disabled" : "outlined"
            }
            onClick={handleEditOpen}
          >
            <EditIcon
              style={{ margin: "0", textAlign: "center" }}
            />
            EDIT
          </Button>
          <Button
            //variant ll be disabled as sl_no is not defined

            variant='outlined'
            onClick={handleDeleteOpen}
          >
            <DeleteForeverIcon
              style={{ margin: "0", textAlign: "center" }}
            />
            DELETE
          </Button>
        </div>
      </div>
      {open && (
        <AdvanceSearch
          open={open}
          handleAdvClose={handleAdvClose}
        />
      )}

      {addOpen && (
        <AddModal
          addOpen={addOpen}
          handleAddClose={handleAddClose}
        />
      )}

      {deleteOpen && (
        <Delete
          deleteOpen={deleteOpen}
          handleDeleteClose={handleDeleteClose}
        />
      )}

      {editOpen && (
        <Edit
          editOpen={editOpen}
          handleEditClose={handleEditClose}
        />
      )}

      {analysisOpen && (
        <Analytics
          analysisOpen={analysisOpen}
          handleAnalysisClose={handleAnalysisClose}
        />
      )}
    </Fragment>
  );
};

export default ModalButton;
