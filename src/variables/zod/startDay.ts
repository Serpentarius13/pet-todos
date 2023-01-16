import { z } from "zod";

import regex from "emoji-regex";

const emojiRegex = regex();

export default z.object({
  mood: z
    .string()
    .min(1, "Cant be less than 1 symbol")
    .max(2, "Cant be more than 2 symbols since its an emoji")
    .regex(emojiRegex, "Must be an emoji"),
});
