// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const SearchBar = () => {
//     const [query, setQuery] = useState('');
//     const navigate = useNavigate();

//     const handleSearch = (event) => {
//         event.preventDefault(); // Prevent form submission from reloading the page
//         if (query.trim() !== '') {
//             navigate(`/searchResults?query=${encodeURIComponent(query.trim())}`);
//         }
//     };

//     return (
//         <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
//             <TextField
//                 variant="outlined"
//                 placeholder="Search posts..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 InputProps={{
//                     endAdornment: (
//                         <InputAdornment position="end">
//                             <IconButton type="submit" aria-label="search">
//                                 <SearchIcon />
//                             </IconButton>
//                         </InputAdornment>
//                     ),
//                 }}
//                 sx={{ width: '80%', maxWidth: '500px' }} // Adjust based on your layout needs
//             />
//         </Box>
//     );
// };

// export default SearchBar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import sb from "../assets/sb.webm";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim() !== "") {
      navigate(`/searchResults?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "0 0 15px 15px",
        height: "35vh",
        display: "flex",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={sb} type="video/webm" />
      </video>
      <Box
        component="form"
        onSubmit={handleSearch}
        sx={{
          zIndex: 2,
          width: "100%",
          maxWidth: "500px",
          p: 2,
          border: "0",
          mt: 4,
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search posts by tag..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              borderRadius: "20px",
              color: "#1B1A55",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1B1A55",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1B1A55",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#1B1A55",
                borderWidth: "2px",
              },
            },
          }}
          InputLabelProps={{
            style: { color: "#1B1A55" },
          }}
          sx={{ backgroundColor: "#FFF7F1", borderRadius: "20px" }}
          inputProps={{
            style: { color: "#1B1A55", WebkitTextFillColor: "#1B1A55" },
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
