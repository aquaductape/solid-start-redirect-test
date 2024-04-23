import Counter from "~/components/Counter";
// import TextEditor from "~/components/TextEditor";
import { clientOnly } from "@solidjs/start";
const TextEditor = clientOnly(() => import("~/components/TextEditor"));

import { cache, createAsync, redirect } from "@solidjs/router";
import {
  Component,
  Suspense,
  SuspenseList,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import RPC from "~/components/RPC";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />
      <Suspense fallback={<div>waiting 1 seconds...</div>}>
        <RPC timeout={2000} />
      </Suspense>
      {/* <Suspense fallback={<div>waiting 5 seconds...</div>}>
          <RPC timeout={5000} />
        </Suspense> */}
      {/* <TextEditor /> */}
    </main>
  );
}
