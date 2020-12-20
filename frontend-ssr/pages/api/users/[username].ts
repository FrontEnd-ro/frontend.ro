import UserModel from "~/server/model/user.model";
import { decode } from "jsonwebtoken";
import { withMiddlewares, check_auth } from "~/server/Middlewares";
import { NextApiRequest, NextApiResponse } from "next";

export default withMiddlewares({
  GET: withMiddlewares(get_user, [check_auth]),
});

async function get_user(req: NextApiRequest, res: NextApiResponse) {
  if (req.role === "admin") {
    console.log("is admin");
    let user = await UserModel.findUserBy([
      { key: "username", value: req.query.username },
    ]);
    if (user) {
      return res.json(user);
    }
    return res.status(404).json({ success: false, message: "Wrong route" });
  }
  let resp = await decode(req.cookies.auth);
  console.log(resp.user.username !== req.query.username);
  // console.log("I was used")
  if (resp.user.username !== req.query.username) {
    return res.status(404).json({ success: false, message: "Wrong route" });
  } else {
    return res.status(200).json({ ...resp.user });
  }
}
