interface NavigationProps {
  className?: string;
}

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "#blog" },
];

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-6 text-right">
        {navItems.map((item, index) => (
          <li
            key={item.name}
            className="animate-slide-in-right"
            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
          >
            <a
              href={item.href}
              className="text-lg font-medium text-foreground hover:text-accent transition-colors duration-300 inline-block hover:translate-x-[-4px] transition-transform"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
