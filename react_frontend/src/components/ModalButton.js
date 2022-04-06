import {
  alpha,
  Button,
  Container,
  InputBase,
  styled,
} from "@mui/material";
import React, { Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "./App.css";

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
  return (
    <Fragment>
      {/* predict, annalysis, advanceserch */}

      <div className='headerButtonContainer'>
        <div className='headerButtonDiv'>
          <Button variant='contained'>
            <OnlinePredictionIcon /> PREDICT
          </Button>
          <Button variant='outlined'>
            <AnalyticsIcon />
            ANALYTICS VIEW
          </Button>
          <Button variant='outlined'>
            <SavedSearchIcon />
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
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>

        {/* add, edit, delete             */}
        <div className='headerButtonDiv'>
          <Button variant='outlined'>
            <AddIcon />
            ADD
          </Button>
          <Button variant='disabled'>
            <EditIcon />
            EDIT
          </Button>
          <Button variant='outlined'>
            <DeleteForeverIcon />
            DELETE
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default ModalButton;
