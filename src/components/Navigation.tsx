import * as React from "react"

type NextLikeLinkProps = React.PropsWithChildren<
  React.ComponentPropsWithoutRef<"a"> & { href: string; legacyBehavior?: boolean; passHref?: boolean }
>;

const Link: React.FC<NextLikeLinkProps> = ({ href, children, legacyBehavior, ...props }) => {
  // If legacyBehavior is used (Next.js v12 style), forward the href to the child element
  if (legacyBehavior && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement, { href });
  }

  // Default: render a plain anchor
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const portfolioSections: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "#about",
    description: "Learn about my background, journey, and passion for development.",
  },
  {
    title: "Work",
    href: "#work",
    description: "Explore my latest projects and professional portfolio.",
  },
  {
    title: "Experience",
    href: "#experience",
    description: "Discover my professional background and career milestones.",
  },
  {
    title: "Blog",
    href: "#blog",
    description: "Read my thoughts on technology, development, and industry trends.",
  },
]

export function Navigation() {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 px-2 py-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/15 hover:rounded-xl focus:bg-white/15 data-[state=open]:bg-white/15 px-6 py-3 text-base font-medium h-auto border-none shadow-none">
              Portfolio
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-xl bg-white/5 border border-white/15 backdrop-blur-sm p-6 no-underline outline-none hover:bg-white/10 transition-colors duration-200 focus:shadow-md"
                      href="#hero"
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
                <ListItem href="#about" title="About">
                  Learn about my background and journey.
                </ListItem>
                <ListItem href="#work" title="Work">
                  Explore my latest projects and portfolio.
                </ListItem>
                <ListItem href="#experience" title="Experience">
                  Discover my professional background.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/15 hover:rounded-xl  focus:bg-white/15 data-[state=open]:bg-white/15 px-6 py-3 text-base font-medium h-auto border-none shadow-none">
              Sections
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
          <NavigationMenuItem>
            <Link href="#contact" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/15 hover:rounded-xl focus:bg-white/15 px-6 py-3 text-base font-medium h-auto border-none shadow-none")}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </div>
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
