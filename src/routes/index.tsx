import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { tw } from "~/tailwind";

export default component$(() => {
  return (
    <div class="flex h-screen w-screen flex-col items-center justify-center">
      <div class="mt-5 flex flex-col items-center justify-center md:mt-8">
        <div class="flex items-center justify-center gap-3 md:gap-4">
          <span class="animate-slide-down text-5xl font-bold md:text-8xl">
            Tech
          </span>
          <div
            class={tw(`relative animate-slide-up text-5xl 
            font-bold [animation-delay:0.5s] before:absolute
            before:left-0 before:top-0 before:h-full before:w-full 
            before:animate-expand-right before:border-b before:border-black 
            before:content-[''] before:[animation-delay:1.25s]
            md:text-8xl md:before:border-b-2`)}
          >
            stories
          </div>
        </div>
        <div
          class={tw(
            `animate-slide-right bg-gradient-to-r from-orange-400 to-lime-300
            bg-clip-text text-6xl font-semibold text-transparent
            [animation-delay:1s] md:text-9xl`
          )}
        >
          Streamlined
        </div>
      </div>
      <button
        class={tw(`relative mt-10 animate-slide-down rounded text-sm font-medium
        text-blue-950 [animation-delay:1.5s] before:absolute before:left-0 
        before:top-0 before:h-full before:w-full before:border-b 
        before:border-sky-400 before:transition-all before:content-[''] 
        hover:before:scale-x-100 active:before:scale-x-100 md:mt-16 md:text-base 
        md:before:scale-x-0 md:before:border-b-2`)}
      >
        Coming soon
      </button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Frontpage",
  meta: [
    {
      name: "description",
      content: "Tech Stories, Streamlined",
    },
  ],
};
