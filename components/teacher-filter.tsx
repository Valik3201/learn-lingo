import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

export function TeacherFilter({
  setSelectedLanguage,
  setSelectedLevel,
  setSelectedPrice,
  languages,
  levels,
  prices,
  resetFilters,
}: {
  setSelectedLanguage: (value: string) => void;
  setSelectedLevel: (value: string) => void;
  setSelectedPrice: (value: string) => void;
  languages: string[];
  levels: string[];
  prices: number[];
  resetFilters: () => void;
}) {
  const form = useForm({
    defaultValues: {
      language: "",
      level: "",
      price: "",
    },
  });

  const onSubmit = () => {
    form.reset();
    resetFilters();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col md:flex-row gap-4 flex-wrap md:flex-nowrap"
      >
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#8A8A89]">Languages</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedLanguage(value);
                }}
                value={field.value}
              >
                <SelectTrigger className="lg:w-[221px]">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {languages.map((language) => (
                      <SelectItem key={language} value={language}>
                        {language}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#8A8A89] text-nowrap">
                Level of knowledge
              </FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedLevel(value);
                }}
                value={field.value}
              >
                <SelectTrigger className="lg:w-[221px]">
                  <SelectValue placeholder="Select level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#8A8A89]">Price</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setSelectedPrice(value);
                }}
                value={field.value}
              >
                <SelectTrigger className="lg:w-[124px]">
                  <SelectValue placeholder="Select price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {prices.map((price) => (
                      <SelectItem key={price} value={price.toString()}>
                        {`${price} $`}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          onClick={() => form.reset()}
          className="font-medium text-lg mt-4 place-self-end h-12 w-full md:w-fit"
        >
          Reset
        </Button>
      </form>
    </Form>
  );
}
