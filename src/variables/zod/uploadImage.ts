import { z } from "zod";

export default z.object({
  text: z
    .string()
    .max(10000, "Cant be longer than 10000 symbols xD")
    .optional(),
  title: z.string().max(40, "Why so long of a title..").optional(),
});
