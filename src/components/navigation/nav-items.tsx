import { Signal, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { tw } from "~/tailwind";

type Props = {
  routes: { path: string; name: string }[];
  activePath: Readonly<Signal<string>>;
  show: Readonly<Signal<boolean>>;
};

export default component$<Props>(({ activePath, routes, show }) => {
  return (
    <div class="relative flex items-center justify-center">
      <div
        class={tw(`absolute h-full w-full translate-y-[200%] bg-gradient-to-tr from-sky-300 to-lime-400 
        opacity-0 blur-sm transition-opacity delay-200 data-[show]:translate-y-0 data-[show]:opacity-100`)}
        data-show={show.value}
      />
      <div
        class="group relative flex translate-y-[200%] flex-col-reverse items-start justify-center overflow-hidden rounded data-[show]:translate-y-0"
        data-show={show.value}
      >
        {routes.map(({ path, name }, i) => (
          <Link
            href={path}
            class={tw(`w-full -translate-x-40 bg-white px-3 py-2 
            text-start transition-all hover:bg-gray-200
            hover:!delay-0 active:bg-gray-200 active:!delay-0 
            data-[isactive]:bg-black data-[isactive]:text-white 
            group-data-[show]:translate-x-0 md:px-5 md:py-3 md:text-xl`)}
            style={{
              transitionDelay: `${i * 50}ms`,
            }}
            data-isactive={activePath.value === path}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
});
