"use client";

import { Accordion } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { mainTags, TagId } from "@/data/tag";
import { useTagParams } from "@/hooks/tag-params";
import { getTagLabel, getTagSubLabel } from "@/lib/tag";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const defaultTags = (useSearchParams().get("tags")?.split(",") ??
    []) as TagId[];

  const { addTagToSearchParams, removeTagFromSearchParams } = useTagParams();
  const router = useRouter();

  return (
    <div className="w-52">
      <Accordion type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="my-4">
            <span>
              CATEGORY
              <span className="text-muted-foreground text-xs ml-3">
                カテゴリー
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <RadioGroup defaultValue="04" className="mb-10">
              {mainTags.map((tagId) => (
                <Link
                  key={tagId}
                  href={`/glossary?tags=${addTagToSearchParams(tagId)}`}
                  passHref
                  legacyBehavior
                >
                  <a className="flex items-center space-x-4 no-underline text-inherit">
                    <div className="flex items-center space-x-4 w-full">
                      <RadioGroupItem value={tagId} id={tagId} />
                      <Label
                        htmlFor={tagId}
                        className="text-base w-[77%] flex justify-between items-center py-1 cursor-pointer"
                      >
                        <div className="text-xs">
                          {getTagLabel(tagId)}
                          <span className="text-muted-foreground text-xs ml-3">
                            {getTagSubLabel(tagId)}
                          </span>
                        </div>
                        <div className="text-muted-foreground text-xs">
                          500{/* {item.value} */}
                        </div>
                      </Label>
                    </div>
                  </a>
                </Link>
              ))}
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="border-t">
        <Accordion type="single" defaultValue="item-1" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="my-4">
              <span>
                TAG
                <span className="text-muted-foreground text-xs ml-3">
                  タグで絞り込む
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-10">
                <div className="flex space-x-4 items-center">
                  <Checkbox
                    id="13"
                    onCheckedChange={(v) => {
                      if (v) {
                        router.replace(
                          `/glossary?tags=${addTagToSearchParams(
                            "聖魔十二守護王",
                            true
                          )}`
                        );
                      } else {
                        router.replace(
                          `/glossary?tags=${removeTagFromSearchParams(
                            "聖魔十二守護王"
                          )}`
                        );
                      }
                    }}
                  />
                  <Label
                    htmlFor="13"
                    className="text-base w-[77%] flex justify-between items-center py-1 cursor-pointer"
                  >
                    <div className="text-xs">聖魔十二守護王</div>
                    <div className="text-muted-foreground text-xs">
                      500{/* {item.value} */}
                    </div>
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* <div className="container border-t">
        <Accordion
          type="single"
          defaultValue="item-1"
          className="container"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="my-4">
              <span>
                SORT BY
                <span className="text-muted-foreground text-xs ml-3">
                  並び替え
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <RadioGroup defaultValue="01" className="mb-10">
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="01" id="01" />
                  <Label htmlFor="01" className="text-base w-[100%] py-2">
                    更新順
                  </Label>
                </div>
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="02" id="02" />
                  <Label htmlFor="02" className="text-base w-[100%] py-1">
                    人気順
                  </Label>
                </div>
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value="03" id="03" />
                  <Label htmlFor="03" className="text-base w-[100%] py-1">
                    五十音順
                  </Label>
                </div>
              </RadioGroup>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div> */}
    </div>
  );
}

// {items.map((item) => (
//   <div key={item.id} className="flex items-center space-x-4">
//     <RadioGroupItem value={item.id} id={item.id} />
//     <Label
//       htmlFor={item.id}
//       className="text-base w-[100%] flex justify-between items-center py-1"
//     >
//       <div>
//         {item.label}
//         <span className="text-muted-foreground text-xs ml-3">
//           {item.subLabel}
//         </span>
//       </div>
//       <div className="text-muted-foreground text-xs">
//         {item.value}
//       </div>
//     </Label>
//   </div>
// ))}
