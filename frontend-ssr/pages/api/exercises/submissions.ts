import { NextApiRequest, NextApiResponse } from "next";
import { uuid } from "~/services/Utils";
import {  withMiddlewares } from "~/server/Middlewares";

export default withMiddlewares({
  GET: getSubmissions,
  POST: updateSubmission
})

async function getSubmissions(req: NextApiRequest, res: NextApiResponse) {
  const { page, query } = req.query;

  if (!query) {
    res.json(MOCK_SUBMISSIONS);
  } else {
    const filteredSubmissions = MOCK_SUBMISSIONS.filter((submission) =>
      submission.username.includes(query.toString())
    );
    res.json(filteredSubmissions);
  }
}

async function updateSubmission(req: NextApiRequest, res: NextApiResponse) {
  /** TO BE IMPLEMENTED */
  res.status(200);
  res.json({ message: 'Wohoo!'})
}

const MOCK_SUBMISSIONS = [
  {
    id: uuid(),
    username: "diana",
    avatarSrc:
      "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
    chapter: "html",
    type: "assigned",
    time: Date.now(),
  },
  {
    id: uuid(),
    username: "alex",
    avatarSrc: "https://www.flaticon.com/svg/static/icons/svg/147/147144.svg",
    chapter: "css",
    type: "pending",
    time: Date.now(),
  },
  {
    id: uuid(),
    username: "antonia",
    avatarSrc: "https://www.flaticon.com/svg/static/icons/svg/168/168734.svg",
    chapter: "js",
    type: "assigned",
    time: Date.now(),
  },
  {
    id: uuid(),
    username: "andrei",
    avatarSrc:
      "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-512.png",
    chapter: "css",
    type: "pending",
    time: Date.now(),
  },
  {
    id: uuid(),
    username: "test",
    avatarSrc:
      "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png",
    chapter: "js",
    type: "pending",
    time: Date.now(),
  },
];
