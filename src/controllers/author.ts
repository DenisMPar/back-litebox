import { Author } from "../models";

export class AuthorControllers {
  createAuthor = async ({ name, profileImageUrl }: { name: string; profileImageUrl: string }) => {
    return await Author.create({ name, profileImageUrl });
  };
}
