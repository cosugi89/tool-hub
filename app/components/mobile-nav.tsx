import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { TAGS } from "@/lib/tag"

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" >
        <div className=" flex flex-col">
          {TAGS.map ((tag) => (
            <Button
              variant="ghost"
              className=" justify-start"
              key={tag.id}
              asChild
            >
              <Link href={`/${tag.id}`}>{tag.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
