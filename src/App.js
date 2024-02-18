import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import PostsPage from "./pages/PostsPage";
import Navbar from "./components/NavBar";
import SinglePostPage from "./pages/SinglePostPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import UserInfoPage from "./pages/UserInfoPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/posts"
            element={
              <>
                <Navbar />
                <PostsPage />
              </>
            }
          />
          <Route
            exact
            path="/posts/:postId"
            element={
              <>
                <Navbar />
                <SinglePostPage />
              </>
            }
          />
          <Route path="/searchResults" element={<SearchResultsPage />} />
          <Route path="/users/:userId" element={<UserInfoPage />} />
          <Route path="/login" element={<UnderConstructionPage />} />
          <Route path="/about" element={<UnderConstructionPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
