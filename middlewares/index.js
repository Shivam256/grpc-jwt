import jwt from "jsonwebtoken";

const middlewares = (User, JWT_SECRET) => {
  const isLoggedIn = async (call, callback, data) => {
    const { token } = call.request;
    if (!token) {
      callback(null, { error: 1, message: "Authorization token missing" });
      return;
    }
    try {
      console.log("i am atleast here");
      const decoded = jwt.verify(token, JWT_SECRET);
      const rootUser = await User.findById(decoded._id);
      if (rootUser) {
        data.user = rootUser;
      }
    } catch (err) {
      callback(null, { error: 1, message: "Something went wrong!" });
    }
  };

  return {
    isLoggedIn,
  };
};

export default middlewares;
