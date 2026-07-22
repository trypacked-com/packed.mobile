import Link from "next/link";

import { Logo } from "@site/components/ui/logo";

import { ThemeToggle } from "./components/theme-toggle";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6 py-12">
      <header className="mb-16 flex items-center justify-between border-border-subtle border-b pb-5">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif font-semibold text-lg text-strong leading-none tracking-tight"
        >
          <Logo size="sm" />
          <span>
            Packed<span className="text-brand">.mobile</span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-muted-foreground text-sm">
          <ThemeToggle />
          <a
            href="https://github.com/trypacked-com/packed.mobile"
            className="transition-colors hover:text-strong"
          >
            github
          </a>
          <a
            href="/registry.json"
            className="transition-colors hover:text-strong"
          >
            registry.json
          </a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-20 border-border-subtle border-t pt-6 text-muted-foreground text-xs">
        Packed design system. Warm, sunset-led. Compose, don&apos;t fork.
      </footer>
    </div>
  );
}
