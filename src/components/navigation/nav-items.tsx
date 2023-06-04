import { Signal, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { tw } from "~/tailwind";

type Props = {
  routes: { path: string; name: string }[];
  show: Readonly<Signal<boolean>>;
};

export default component$<Props>(({ routes, show }) => {
  return (
    <div
      class={tw(`group relative flex translate-y-[200%]
      flex-col-reverse items-start justify-center overflow-hidden
      rounded shadow-lg data-[show]:translate-y-0`)}
      data-show={show.value}
    >
      {routes.map(({ path, name }, i) => (
        <Link
          href={path}
          class={tw(`w-full -translate-x-40 bg-white px-3 py-2 
          text-start transition-all hover:bg-stone-100
          hover:!delay-0 active:bg-stone-100 active:!delay-0 
          group-data-[show]:translate-x-0 md:px-5`)}
          style={{
            transitionDelay: `${i * 50}ms`,
          }}
        >
          {name}
        </Link>
      ))}
    </div>
  );
});
