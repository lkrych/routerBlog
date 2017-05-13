import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts`);
  return {
    type: FETCH_POSTS
  };
};
