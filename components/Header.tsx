import { settings } from "@/utils/constants.ts";

export function Header() {
  return (
    <header
      id="header"
      class="bg-gradient-to-tl from-orange-500 to-sky-500 px-3 py-3 h-16 flex items-center text-black"
    >
      <div class="px-4 max-w-screen-md ">
        <a
          href="/"
          rel="noopener noreferrer"
          class="text-2xl font-bold hover:text-underline flex items-center gap-3"
        >
          <img
            src="/cool.jpeg"
            alt="avatar"
            width="100"
            height="100"
            class="w(12 md:12) h(12 md:12) rounded-full bg-white"
          />
          {settings.title}
        </a>
      </div>
    </header>
  );
}
