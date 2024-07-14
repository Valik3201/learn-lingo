import { useFavoritesStore } from "@/store/useFavoritesStore";
import type { Teacher } from "@/store/useTeachersStore";
import { LessonBookSheet } from "@/components/lesson-book-sheet";
import {
  Card,
  CardHeader,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardStats,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BookIcon,
  HeartIcon,
  HeartSolidIcon,
  StarIcon,
} from "@/components/icons";

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useFavoritesStore();

  return (
    <Card>
      <CardHeader>
        <div className="flex gap-4 md:gap-8 mb-4 md:mb-8 lg:mb-0">
          <CardImage
            src={teacher.avatar_url}
            alt={`${teacher.name} ${teacher.surname}`}
          />

          <div className="lg:hidden text-nowrap">
            <CardSubtitle>Languages</CardSubtitle>
            <CardTitle>
              {teacher.name} {teacher.surname}
            </CardTitle>
          </div>
        </div>

        <div className="lg:hidden">
          {isFavorite(teacher.id) ? (
            <button onClick={() => removeFromFavorites(teacher.id)}>
              <HeartSolidIcon />
            </button>
          ) : (
            <button onClick={() => addToFavorites(teacher)}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HeartIcon />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Only authorized users can add teachers to their
                      <br />
                      favorites. Please log in to continue.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </button>
          )}
        </div>
      </CardHeader>

      <div className="w-full flex flex-col gap-8">
        <CardContent>
          <div className="hidden lg:block text-nowrap">
            <CardSubtitle>Languages</CardSubtitle>
            <CardTitle>
              {teacher.name} {teacher.surname}
            </CardTitle>
          </div>

          <CardStats>
            <div className="grid grid-cols-2 xl:grid-cols-none gap-4 xl:gap-0 xl:grid-flow-col xl:auto-cols-auto xl:divide-x-[1px] divide-[#121417]/20 font-medium lg:mr-16 text-nowrap">
              <div className="flex items-center gap-2 xl:pe-4">
                <BookIcon />
                <p>Lessons online</p>
              </div>

              <p className="xl:ps-4 xl:pe-4">
                Lessons done: {teacher.lessons_done}
              </p>

              <div className="flex items-center gap-2 xl:ps-4 xl:pe-4">
                <StarIcon />
                <p>Rating: {teacher.rating}</p>
              </div>

              <p className="xl:ps-4">
                Price / 1 hour:{" "}
                <span className="text-[#38CD3E]">
                  ${teacher.price_per_hour}
                </span>
              </p>
            </div>

            <div className="hidden lg:block h-[26px]">
              {isFavorite(teacher.id) ? (
                <button onClick={() => removeFromFavorites(teacher.id)}>
                  <HeartSolidIcon />
                </button>
              ) : (
                <button onClick={() => addToFavorites(teacher)}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <HeartIcon />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Only authorized users can add teachers to their
                          <br />
                          favorites. Please log in to continue.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </button>
              )}
            </div>
          </CardStats>
        </CardContent>

        <div>
          <div className="font-medium">
            <p>
              <span className="text-[#8A8A89]">Speaks: </span>
              <span className="underline">{teacher.languages.join(", ")}</span>
            </p>
            <p>
              <span className="text-[#8A8A89]">Lesson info: </span>
              {teacher.lesson_info}
            </p>
            <p>
              <span className="text-[#8A8A89]">Conditions: </span>
              {teacher.conditions}
            </p>
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="teacher">
              <AccordionTrigger>Read More</AccordionTrigger>
              <AccordionContent>
                <p className="py-4">{teacher.experience}</p>
                <div className="flex flex-col gap-8">
                  {teacher.reviews.map((review, reviewIndex) => (
                    <div key={reviewIndex}>
                      <div className="flex gap-3 mb-4">
                        <Avatar>
                          <AvatarFallback>
                            {review.reviewer_name.slice(0, 1)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="font-medium">
                          <p className="text-[#8A8A89]">
                            {review.reviewer_name}
                          </p>
                          <div className="flex items-center gap-2">
                            <StarIcon />
                            <p>{review.reviewer_rating.toFixed(1)}</p>
                          </div>
                        </div>
                      </div>

                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex gap-2 flex-wrap">
          {teacher.levels.map((lvl, i) => (
            <Badge key={i} variant={i === 0 ? "yellow" : "outline"}>
              #{lvl}
            </Badge>
          ))}
        </div>

        <LessonBookSheet teacher={teacher} />
      </div>
    </Card>
  );
}
