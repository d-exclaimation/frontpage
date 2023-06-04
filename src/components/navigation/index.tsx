import {
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import NavItems from "./nav-items";
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
];

export default component$(() => {
  const show = useSignal(false);
  const { url } = useLocation();

  const activePath = useComputed$(() => url.pathname);

  useVisibleTask$(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") show.value = false;
    });
  });

  return (
    <nav class="fixed bottom-5 left-5 z-50 flex flex-col-reverse items-start justify-center gap-3">
      <NavMenu show={show} />
      <NavItems routes={routes} show={show} />
    </nav>
  );
});
