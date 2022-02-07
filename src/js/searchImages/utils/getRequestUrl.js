import { BASE_URL } from "../constants";

export const getRequestUrl = ({ page, query }) => `${BASE_URL}&page=${page}&q=${query}`;
