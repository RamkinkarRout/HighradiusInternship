import {
  alpha,
  Button,
  InputBase,
  styled,
} from "@mui/material";
import React, {
  Fragment,
  useContext,
  useState,
} from "react";
import SearchIcon from "@mui/icons-material/Search";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./App.css";
import AdvanceSearch from "./AdvanceSearch";
import { LinkContext } from "../LinkCoontext";
import { useDebounce } from "use-debounce";

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let { link, setLink } = useContext(LinkContext);

  console.log(link);

  const [text, setText] = useState("");
  const [debouncedText] = useDebounce(text, 3000);

  const handleSubmit = (e, link, setLink) => {
    e.preventDefault();
    console.log(e.target.value);

    if (debouncedText) {
      setText(debouncedText);
    }

    if (
      //doc_id or cust_number or invoice_id or buisness_year

      e.target.value !== ""
    ) {
      setLink(
        `http://localhost:8080/highradius_project/searchData?doc_id=${text}&cust_number=${text}&invoice_id=${text}&buisness_year=${text}`
      );
    } else
      setLink(
        `http://localhost:8080/highradius_project/data`
      );

    console.log(link);
  };

  return (
    <Fragment>
      {/* predict, annalysis, advanceserch */}

      <div className='headerButtonContainer'>
        <div className='headerButtonDiv'>
          <Button variant='contained'>
            <OnlinePredictionIcon
              style={{ marginRight: "10px" }}
            />
            PREDICT
          </Button>
          <Button variant='outlined'>
            <AnalyticsIcon
              style={{ marginRight: "10px" }}
            />
            ANALYTICS VIEW
          </Button>
          <Button variant='outlined' onClick={handleOpen}>
            <SavedSearchIcon
              style={{ marginRight: "10px" }}
            />
            ADVANCE SEARCH
          </Button>
        </div>

        {/* search */}

        <div className='headerButtonDiv'>
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
                handleSubmit(e, link, setLink)
              }
            />
          </Search>
        </div>

        {/* add, edit, delete             */}
        <div className='headerButtonDiv'>
          <Button variant='outlined'>
            <AddIcon style={{ marginRight: "10px" }} />
            ADD
          </Button>
          <Button variant='disabled'>
            <EditIcon style={{ marginRight: "10px" }} />
            EDIT
          </Button>
          <Button variant='outlined'>
            <DeleteForeverIcon
              style={{ marginRight: "10px" }}
            />
            DELETE
          </Button>
        </div>
      </div>
      {open && (
        <AdvanceSearch
          open={open}
          handleClose={handleClose}
        />
      )}
    </Fragment>
  );
};

export default ModalButton;
