import { component$, Slot } from "@builder.io/qwik";
import Navigation from "~/components/navigation";

export default component$(() => {
  return (
    <>
      <Navigation />
      <Slot />
    </>
  );
});
