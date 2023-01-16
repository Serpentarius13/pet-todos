import { useToast } from "vue-toastification";
import { useField, useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import { z } from "zod";

export default (
  schema: z.ZodObject<any>,
  initialValues: Record<string, any>
) => {
  const toast = useToast();
  const zodSchema = toFormValidator(schema);

  const { validate: runValidator } = useForm({
    validationSchema: zodSchema,
    initialValues: initialValues,
    validateOnMount: false,
  });

  console.log(zodSchema, schema);

  const validate = async () => {
    const { valid, errors } = await runValidator();
    console.log(valid, errors);
    if (!valid) {
      toast.clear();
      const errArr = Object.values(errors);
      for (const err of errArr) {
        //@ts-ignore
        toast.error(err);
      }
      return false;
    } else {
      return true;
    }
  };

  return validate;
};
