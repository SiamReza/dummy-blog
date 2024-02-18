import axios from "axios";

const BASE_URL = "https://dummyjson.com/posts";

// Get all posts with pagination
const getAllPosts = async (limit = 30, skip = 0) => {
  try {
    const response = await axios.get(`${BASE_URL}?limit=${limit}&skip=${skip}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching all posts:", error);
    throw error;
  }
};

// Get a single post
const getSinglePost = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching single post:", error);
    throw error;
  }
};

// Search posts
const searchPosts = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search?q=${query}`);
    return response.data;
  } catch (error) {
    console.error("Error searching posts:", error);
    throw error;
  }
};

// Get a post's comments
const getPostsComments = async (postId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error("Error fetching post comments:", error);
    throw error;
  }
};

// Delete a post
const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }
};

// Get a posts by user
const getUserPosts = async (userId) => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/users/${userId}/posts`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts by user:", error);
    throw error;
  }
};

// Get user's info
const getUserInfo = async (userId) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user's info:", error);
    throw error;
  }
};

export {
  getAllPosts,
  getSinglePost,
  searchPosts,
  getPostsComments,
  deletePost,
  getUserPosts,
  getUserInfo,
};
