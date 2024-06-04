import { type PropsOf, component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
    </>
  );
});

type InputProps = PropsOf<"input">;

export const InputBase = component$<InputProps>((props) => {
  return <input {...props} />;
});

export const InputWrapper = component$<InputProps>((props) => {
  return <InputBase autoComplete="email" {...props} />;
});

export const InputWrapper2 = component$<InputProps>((props) => {
  return <InputBase {...props} />;
});
