import { ROOT_URL, API_KEY, FETCH_PAGES, FETCH_PAGE } from '../constants/index'
import axios from 'axios';

export function fetchPages() {
  const request = axios.get(`${ROOT_URL}/get/pages${API_KEY}`);

  return {
    type: FETCH_PAGES,
    payload: request
  }
}

export function fetchPage(slug) {
  const request = axios.get(`${ROOT_URL}/get/pages${API_KEY}&populate=1&filter[_Title_slug]=${slug}`);

  return {
    type: FETCH_PAGE,
    payload: request
  }
}