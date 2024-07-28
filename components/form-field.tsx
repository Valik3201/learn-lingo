import React from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

interface FormFieldComponentProps<T extends FieldValues> {
  label?: string;
  type?: string;
  name: Path<T>;
  placeholder?: string;
  form: UseFormReturn<T>;
  showPassword?: boolean;
  setShowPassword?: (value: boolean) => void;
}

export function FormFieldComponent<T extends FieldValues>({
  label,
  type,
  name,
  placeholder,
  form,
  showPassword,
  setShowPassword,
}: FormFieldComponentProps<T>) {
  const inputPlaceholder = placeholder || label || name;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between">
            <FormLabel className={label ? "" : "sr-only"}>{label}</FormLabel>

            {form.formState.errors[name as string] && (
              <FormMessage className="leading-none">
                {form.formState.errors[name]?.message as React.ReactNode}
              </FormMessage>
            )}
          </div>

          <FormControl>
            {type === "password" ? (
              <div className="relative">
                <div className="absolute inset-y-0 end-4 flex items-center ps-3">
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword && setShowPassword(!showPassword)
                    }
                    className="hover:cursor-pointer focus:outline-none"
                  >
                    {showPassword ? <Eye /> : <EyeOff />}
                    <span className="sr-only">Show password</span>
                  </button>
                </div>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder={inputPlaceholder}
                  className="h-14"
                  {...field}
                />
              </div>
            ) : (
              <Input
                type={type}
                placeholder={inputPlaceholder}
                className="h-14"
                {...field}
              />
            )}
          </FormControl>
        </FormItem>
      )}
    />
  );
}
