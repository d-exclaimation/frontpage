import { component$ } from "@builder.io/qwik";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { __api__ } from "~/common/constant";
import { Stories } from "~/types/story";

export const useNews = routeLoader$(async (ev) => {
  const res = await fetch(`${__api__}/news`);
  const body = await res.json();

  const maybeNews = await Stories.safeParseAsync(body);
  if (!maybeNews.success) {
    throw maybeNews.error;
  }

  return {
    news: maybeNews.data,
  };
});

export default component$(() => {
  const data = useNews();
  return (
    <div class="my-3 flex w-[95%] flex-col items-center gap-1">
      {data.value.news.map(({ id, title }) => (
        <div class="flex min-h-[4rem] w-full rounded-sm bg-white px-3 py-4 shadow">
          {title}
        </div>
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
