import { Post } from "../models";
import { UUID } from "crypto";
import { v4 as uuid } from "uuid";
import { uploadImage } from "../lib/image-loader";

export interface PostProps {
  title: string;
  content: string;
  AuthorId: UUID;
  tag: string;
  heroImageBase64: string;
  related: boolean;
}
export class PostsControllers {
  getAllPosts = async ({ offset, limit }: { offset: number; limit: number }) => {
    return await Post.findAndCountAll({
      offset,
      limit,
      order: [["createdAt", "DESC"]],
      attributes: ["id", "title", "heroImageUrl", "tag"],
    });
  };
  getAllPostsIds = async () => {
    return await Post.findAll({ attributes: ["id"] });
  };
  getRelatedPosts = async () => {
    return await Post.findAll({ where: { related: true }, limit: 3 });
  };
  getPostById = async (id: UUID) => {
    const post = await Post.findOne({ where: { id }, include: ["Author"] });
    if (!post) throw new Error("Post not found");
    return post;
  };
  createPost = async ({ title, content, tag, heroImageBase64, related }: PostProps) => {
    const imageUrl = await uploadImage(heroImageBase64);
    return await Post.create({
      id: uuid(),
      title,
      content,
      AuthorId: "4610dc13-3798-4e45-8a98-97d178eb9776",
      tag,
      heroImageUrl: imageUrl,
      related,
    });
  };
}
