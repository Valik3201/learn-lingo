import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TeacherFilter({
  setSelectedLanguage,
  setSelectedLevel,
  setSelectedPrice,
  languages,
  levels,
  prices,
}: {
  setSelectedLanguage: (value: string) => void;
  setSelectedLevel: (value: string) => void;
  setSelectedPrice: (value: string) => void;
  languages: string[];
  levels: string[];
  prices: number[];
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="space-y-2">
        <Label className="text-[#8A8A89]">Languages</Label>
        <Select onValueChange={(value) => setSelectedLanguage(value)}>
          <SelectTrigger className="md:w-[221px]">
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
      </div>

      <div className="space-y-2">
        <Label className="text-[#8A8A89]">Level of knowledge</Label>
        <Select onValueChange={(value) => setSelectedLevel(value)}>
          <SelectTrigger className="md:w-[221px]">
            <SelectValue placeholder="Select level" />
          </SelectTrigger>
          <SelectContent className="w-[221px]">
            <SelectGroup>
              {levels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-[#8A8A89]">Price</Label>
        <Select onValueChange={(value) => setSelectedPrice(value)}>
          <SelectTrigger className="md:w-[124px]">
            <SelectValue placeholder="Select price" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {prices.map((price) => (
                <SelectItem
                  key={price}
                  value={price.toString()}
                >{`${price} $`}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
