import * as React from "react"
import { Menu } from "lucide-react"
import { Link as RouterLink } from "react-router-dom"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "")
  const toSection = (section: string) => `${basePath}/#${section}`

  const portfolioSections: { title: string; href: string; description: string }[] = [
    {
      title: "About",
      href: toSection("about"),
      description: "Learn about my background, journey, and passion for development.",
    },
    {
      title: "Work",
      href: toSection("work"),
      description: "Explore my latest works and professional portfolio.",
    },
    {
      title: "Experience",
      href: toSection("experience"),
      description: "Discover my professional background and career milestones.",
    },
    {
      title: "Blog",
      href: toSection("blog"),
      description: "Read my thoughts on technology, development, and industry trends.",
    },
  ]

  const sectionLinks = [
    { label: "Home", href: toSection("hero") },
    { label: "About", href: toSection("about") },
    { label: "Work", href: toSection("work") },
    { label: "Experience", href: toSection("experience") },
    { label: "Blog", href: toSection("blog") },
  ]

  return (
    <>
      <div className="fixed right-4 top-4 z-50 md:hidden">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-lg shadow-black/20 transition-colors hover:bg-white/20"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[85vw] border-white/20 bg-zinc-950/95 px-5 py-10 text-white backdrop-blur-lg"
          >
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/40">Navigate</p>
                <p className="text-2xl font-semibold text-white">Nadun Portfolio</p>
              </div>

              <div className="space-y-2">
                {sectionLinks.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-lg border border-white/10 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </div>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <SheetClose asChild>
                  <RouterLink
                    to="/works"
                    className="block rounded-lg border border-white/10 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300"
                  >
                    All Works
                  </RouterLink>
                </SheetClose>
                <SheetClose asChild>
                  <RouterLink
                    to="/blog"
                    className="block rounded-lg border border-white/10 px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-300"
                  >
                    All Articles
                  </RouterLink>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="fixed right-4 top-4 z-50 hidden md:block md:right-6 md:top-6">
        <div className="rounded-2xl border border-white/20 bg-white/10 px-2 py-1 shadow-lg shadow-black/20 backdrop-blur-md">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto border-none bg-transparent px-4 py-2 text-sm font-medium text-white shadow-none hover:rounded-xl hover:bg-white/15 focus:bg-white/15 sm:px-6 sm:py-3 sm:text-base data-[state=open]:bg-white/15">
                  Portfolio
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid max-w-[min(92vw,500px)] gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-xl border border-white/15 bg-white/5 p-6 no-underline outline-none transition-colors duration-200 hover:bg-white/10 focus:shadow-md"
                          href={toSection("hero")}
                        >
                          <div className="mb-2 mt-4 text-lg font-semibold text-white">
                            Nadun Madusanka
                          </div>
                          <p className="text-sm leading-tight text-white/60">
                            Software Engineer passionate about creating innovative solutions.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href={toSection("about")} title="About">
                      Learn about my background and journey.
                    </ListItem>
                    <ListItem href={toSection("work")} title="Work">
                      Explore my latest projects and portfolio.
                    </ListItem>
                    <ListItem href={toSection("experience")} title="Experience">
                      Discover my professional background.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto border-none bg-transparent px-4 py-2 text-sm font-medium text-white shadow-none hover:rounded-xl hover:bg-white/15 focus:bg-white/15 sm:px-6 sm:py-3 sm:text-base data-[state=open]:bg-white/15">
                  Sections
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[min(92vw,400px)] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {portfolioSections.map((section) => (
                      <ListItem
                        key={section.title}
                        title={section.title}
                        href={section.href}
                      >
                        {section.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-xl border border-transparent p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-white/10 hover:border-white/15 hover:text-white focus:bg-white/10 focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-white/70">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
