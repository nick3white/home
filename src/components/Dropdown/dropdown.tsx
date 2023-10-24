import { component$, useSignal, $ } from "@builder.io/qwik";

export interface DropdownProps {
  list: {
    title: string;
    links: {
      url: string;
      text: string;
    }[];
  };
}

export const Dropdown = component$<DropdownProps>(({ list }) => {
  const active = useSignal(false);
  const wtf = $(() => {
    active.value = !active.value;
  });
  return (
    <div class="dropdown" document:onClick$={() => (active.value = false)}>
      <button onClick$={wtf}>{list.title}</button>
      <ul class={active.value ? "active" : ""}>
        {list.links.map((link, idx) => (
          <a key={`dropdown-${idx}`} href={link.url}>
            <li>{link.text}</li>
          </a>
        ))}
      </ul>
    </div>
  );
});
