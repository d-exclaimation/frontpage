import { component$, type Signal } from "@builder.io/qwik";

type Props = {
  show: Signal<boolean>;
};

export default component$<Props>(({ show }) => {
  return (
    <button
      class="group relative z-[60] flex items-center justify-center overflow-hidden rounded-md bg-white p-2 shadow-xl outline-none transition-all data-[show]:bg-black"
      onClick$={() => (show.value = !show.value)}
      data-show={show.value}
    >
      <img
        src="/press.svg"
        class="h-8 w-8 transition-all group-data-[show]:-translate-x-full dark:content-[url('/press-dark.svg')]"
      />
      <img
        src="/press-dark.svg"
        class="absolute h-8 w-8 translate-x-full transition-all group-data-[show]:translate-x-0 dark:content-[url('/press.svg')]"
      />
    </button>
  );
});
