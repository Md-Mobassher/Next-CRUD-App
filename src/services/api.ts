import axios from "axios";
import { Post } from "../types";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getPosts = async () => {
  try {
    const response = await axios.get<Post[]>(`${API_URL}/posts`);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error Fetching post:",
      error.response?.data || error.message
    );
  }
};

export const createPost = async (post: any) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, post);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error creating post:",
      error.response?.data || error.message
    );
  }
};

export const getAPost = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching post:",
      error.response?.data || error.message
    );
  }
};

export const updatePost = async (id: number, post: any) => {
  console.log("id", id);
  try {
    const response = await axios.patch(`${API_URL}/posts/${id}`, post);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error updating post:",
      error.response?.data || error.message
    );
  }
};

export const deletePost = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error deleting post:",
      error.response?.data || error.message
    );
  }
};
