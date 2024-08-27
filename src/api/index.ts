import express, { Request, Response } from "express";
import { PostsControllers } from "../controllers/posts";
import { PostValidate } from "../middleware/schema/posts";
import { UUID } from "crypto";
import { buildPaginationWithPages, PaginationQuery } from "../lib/pagination-builder";
import { syncDb } from "../db/sync";

const router = express.Router();
const postsController = new PostsControllers();
router.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

router.get("/posts", async (req: Request, res: Response) => {
  try {
    const { offset, limit } = req.query as unknown as PaginationQuery;
    const allPosts = await postsController.getAllPosts({ offset, limit });
    res.json({ message: "All posts fetched succesfully", data: allPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on fetching posts", error: error.message });
  }
});
router.get("/posts/ids", async (req: Request, res: Response) => {
  try {
    const allPosts = await postsController.getAllPostsIds();
    res.json({ message: "All posts fetched succesfully", data: allPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on fetching posts", error: error.message });
  }
});
router.get("/post/:id", PostValidate.getPostById, async (req: Request, res: Response) => {
  try {
    const post = await postsController.getPostById(req.params.id as UUID);
    res.json({ message: "Post fetched succesfully", data: post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on fetching post", error: error.message });
  }
});
router.get("/posts/related", async (req: Request, res: Response) => {
  try {
    const relatedPosts = await postsController.getRelatedPosts();
    res.json({ message: "Related posts fetched succesfully", data: relatedPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on fetching related posts", error: error.message });
  }
});
router.post("/post/related", PostValidate.createPost, async (req: Request, res: Response) => {
  try {
    const newPost = await postsController.createPost(req.body);
    res.json({ message: "Post created succesfully", data: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on creating post", error: error.message });
  }
});

export default router;
