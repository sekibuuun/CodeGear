import { z } from "zod";

import { Social } from "@/types/types";

// フォームのルールを定義
function createFormSchema(social: Social) {
  const schema =
    social.service !== "None"
      ? z.object({
          URL: z.string(),
          userId: z.string().min(1, {
            message: "User ID must be at least 1 character.",
          }),
        })
      : z.object({
          URL: z.string(),
          userId: z.string(),
        });
  return schema;
}

export { createFormSchema };
