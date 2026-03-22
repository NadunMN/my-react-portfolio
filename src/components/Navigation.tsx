import * as React from "react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { useIsMobile } from "@/hooks/use-mobile"

const portfolioSections: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "#about",
    description: "Learn about my background, journey, and passion for development.",
  },
  {
    title: "Work",
    href: "#work",
    description: "Explore my latest works and professional portfolio.",
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
  const isMobile = useIsMobile()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Close mobile menu when navigating
  const handleMobileNav = (href: string) => {
    setMobileMenuOpen(false)
    // Delay matches the 300ms CSS transition duration on the drawer
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }, 300)
  }

  if (isMobile) {
    return (
      <>
        {/* Mobile Hamburger Button */}
        <div className="fixed top-5 right-5 z-50">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-white/15"
          >
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-all duration-300",
                mobileMenuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-all duration-300",
                mobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-white transition-all duration-300",
                mobileMenuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Drawer */}
        <div
          className={cn(
            "fixed top-0 right-0 z-50 h-full w-72 bg-zinc-950/95 border-l border-white/10 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-in-out flex flex-col pt-20 pb-8 px-6 overflow-y-auto",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-white/40 mb-6">
            Navigation
          </p>

          <nav className="flex flex-col gap-1">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-red-400/70 mb-2 mt-4">
              Sections
            </p>
            {portfolioSections.map((section) => (
              <button
                key={section.title}
                onClick={() => handleMobileNav(section.href)}
                className="flex flex-col gap-0.5 rounded-xl border border-transparent px-4 py-3 text-left transition-all duration-200 hover:bg-white/10 hover:border-white/15"
              >
                <span className="text-sm font-medium text-white">{section.title}</span>
                <span className="text-xs leading-snug text-white/50">{section.description}</span>
              </button>
            ))}

            <p className="text-xs font-mono tracking-[0.2em] uppercase text-red-400/70 mb-2 mt-6">
              Portfolio
            </p>
            <a
              href="/works"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col gap-0.5 rounded-xl border border-transparent px-4 py-3 text-left transition-all duration-200 hover:bg-white/10 hover:border-white/15"
            >
              <span className="text-sm font-medium text-white">Works</span>
              <span className="text-xs leading-snug text-white/50">All projects and case studies.</span>
            </a>
            <a
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex flex-col gap-0.5 rounded-xl border border-transparent px-4 py-3 text-left transition-all duration-200 hover:bg-white/10 hover:border-white/15"
            >
              <span className="text-sm font-medium text-white">Blog</span>
              <span className="text-xs leading-snug text-white/50">Articles and technical notes.</span>
            </a>
          </nav>
        </div>
      </>
    )
  }

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
