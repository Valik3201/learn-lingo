import { useState } from "react";
import {
  useForm,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
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

export function useFormHandler<T extends FieldValues>(
  schema: ZodSchema<T>,
  onSubmit: SubmitHandler<T>
): UseFormHandlerReturn<T> {
  const [error, setError] = useState<FirebaseError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const form = useForm<T>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldFocusError: false,
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
