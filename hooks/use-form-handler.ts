import { useState } from "react";
import {
  useForm,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";
import { ZodSchema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FirebaseError } from "firebase/app";

interface UseFormHandlerReturn<T extends FieldValues> {
  form: UseFormReturn<T>;
  error: FirebaseError | null;
  loading: boolean;
  showPassword: boolean;
  setShowPassword: (value: boolean) => void;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  handleOpen: () => void;
}

interface UseFormHandlerOptions<T extends FieldValues> {
  schema: ZodSchema<T>;
  onSubmit: SubmitHandler<T>;
  defaultValues?: DefaultValues<T>;
}

export function useFormHandler<T extends FieldValues>({
  schema,
  onSubmit,
  defaultValues,
}: UseFormHandlerOptions<T>): UseFormHandlerReturn<T> {
  const [error, setError] = useState<FirebaseError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<T>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: false,
    defaultValues,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    setLoading(true);
    try {
      await onSubmit(data);
    } catch (err) {
      setError(err as FirebaseError);
    } finally {
      setLoading(false);
    }
  });

  const handleOpen = () => {
    form.reset();
    setError(null);
  };

  return {
    form,
    error,
    loading,
    showPassword,
    setShowPassword,
    handleSubmit,
    handleOpen,
  };
}
