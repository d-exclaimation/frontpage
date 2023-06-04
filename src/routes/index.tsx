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
    <div class="my-3 grid w-[95%] grid-cols-3 place-items-center gap-1 bg-white">
      {data.value.news.map(
        ({ id, title, user, type, comment_count, time_ago, points }) => {
          return <div>{time_ago}</div>;
        }
      )}
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
