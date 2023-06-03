import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import NavMenu from "./nav-menu";

const routes = [
  {
    path: "/",
    name: "Explore",
  },
  {
    path: "/newest",
    name: "Latest",
  },
  {
    path: "/ask",
    name: "Discuss",
  },
  {
    path: "/show",
    name: "Showcase",
  },
  {
    path: "/jobs",
    name: "Jobs",
  },
] as const;

export default component$(() => {
  const show = useSignal(false);
  const { url } = useLocation();

  const activePath = useComputed$(() => url.pathname);

  return (
    <>
      <nav class="fixed bottom-5 left-5 z-50 flex flex-col-reverse items-start justify-center gap-3">
        <NavMenu show={show} />
        <div
          class="group flex flex-col-reverse items-start justify-center overflow-hidden rounded data-[show]:translate-x-0"
          data-show={show.value}
        >
          {routes.map(({ path, name }, i) => (
            <Link
              href={path}
              class="w-full -translate-x-40 bg-white px-3 py-2 text-start transition-all hover:bg-zinc-100 hover:!delay-0 data-[isactive]:bg-black data-[isactive]:text-white group-data-[show]:translate-x-0"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
              data-isactive={activePath.value === path}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
      <div
        class="fixed inset-0 -z-40 bg-black/50 opacity-0 backdrop-blur-sm transition-opacity data-[show]:z-40 data-[show]:opacity-100 md:bg-black/10"
        data-show={show.value}
      />
    </>
  );
});
