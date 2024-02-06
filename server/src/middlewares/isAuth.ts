// import { User } from "../models/users/User";
// import { UserService } from "../services/UserService";
// import jwt from "jsonwebtoken"

// export const isAuth = async (req: Request, res: Response) => {
//   try {
//     const token = getTokenFromHeaders(req);

//     jwt.verify(token, process.env.SECRET_KEY, async (err: any, decoded: any) => {
//       if (err) {
//         // Using standard Express response methods for UNAUTHORIZED error
//         return res.status(401).json({ error: "Unauthorized access." });
//       }

//       const userService = new UserService()
//       const user = await UserService.;

//       if (!user) {
//         // Using standard Express response methods for USER NOT FOUND error
//         return res.status(404).json({ error: "User not found." });
//       }

//       req.user = user;
//       next();
//     });
//   } catch (error) {
//     // Using standard Express response methods for generic error handling
//     return res.status(403).json({ error: error.message });
//   }
// };
