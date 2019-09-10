module.exports = {
  PORT: process.env.PORT || 8080,
  API_ENDPOINT:
    // process.env.REACT_APP_API_BASE_URL
    "https://damp-wildwood-37463.herokuapp.com/api" || "http://localhost:8000/api",
  TOKEN_KEY: "blogful-client-auth-token"
};
