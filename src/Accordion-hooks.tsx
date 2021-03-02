import React from "react";
import { Item } from "./Accordion";
import { AccordionContents } from "./AccordionContent";

export function Accordion({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <ul>
      {items.map((item: Item, index: number) => (
        <li key={index}>
          <button onClick={() => setOpenIndex(index)}>{item.title}</button>
          {index === openIndex ? (
            <AccordionContents>{item.contents}</AccordionContents>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
