"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { itemlist } from "@/data/item";
import { TagId } from "@/data/tag";
import Link from "next/link";

export default function GlossaryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const tags = (searchParams.tags as string)?.split(",");

  const currentItems = itemlist.filter((item) => {
    if (!tags) {
      return true;
    }
    return tags.every((tags) => item.tags.includes(tags as TagId));
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {currentItems.map((item) => (
        <Card key={item} className="relative hover:shadow-red-600">
          <CardHeader>
            <CardTitle className="flex flex-wrap space-y-3 mb-4">
              <span className="mr-3">{item.label}</span>

              <span className="text-muted-foreground text-xs">
                {item.sublabel}
              </span>
              <div className="">
                <Dialog>
                  <DialogTrigger className="absolute inset-0 z-0"></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{item.label}</DialogTitle>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <Button
                            key={tagIndex}
                            variant="outline"
                            size="xs"
                            asChild
                          >
                            <Link href="http://www.tensurahyakka.com/library.html">
                              {tag}
                            </Link>
                          </Button>
                        ))}
                      </div>
                      <DialogDescription>{item.summary}</DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </CardTitle>
            <CardDescription className="line-clamp-3">
              {item.summary}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-2">
            {item.tags.map((tag, tagIndex) => (
              <Button key={tagIndex} variant="outline" size="xs" asChild>
                <Link href="http://www.tensurahyakka.com/library.html">
                  {tag}
                </Link>
              </Button>
            ))}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
