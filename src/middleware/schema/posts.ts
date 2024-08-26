import { NextFunction, Request, Response } from "express";
import { boolean, object, Schema, string } from "yup";

export class PostValidate {
  static async createPost(req: Request, res: Response, next: NextFunction) {
    const createPostSchema: Schema = object({
      body: object({
        title: string().required(),
        content: string().required(),
        heroImageBase64: string().required(),
        tag: string().required(),
        related: boolean().required(),
      })
        .noUnknown()
        .strict(true),
    })
      .noUnknown()
      .strict(true);
    try {
      const validate = await createPostSchema.validate({
        body: req.body,
      });
      if (validate) return next();
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({
        field: "body",
        message: "BAD_REQUEST",
        error: error.errors,
      });
    }
  }

  static async getPostById(req: Request, res: Response, next: NextFunction) {
    const getPostByIdSchema: Schema = object({
      params: object({
        id: string().uuid().required(),
      }),
    });
    try {
      const validate = await getPostByIdSchema.validate({
        params: req.params,
      });
      if (validate) return next();
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({
        field: "body",
        message: "BAD_REQUEST",
        error: error.errors,
      });
    }
  }
}
