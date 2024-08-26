import { Post } from "./post";
import { Author } from "./author";

Post.belongsTo(Author);
Author.hasMany(Post);

export { Post, Author };
