import React from "react";
import { AccordionContents } from "./AccordionContent";

export interface Item {
  title: string;
  contents: string;
}

interface Props {
  items: Item[];
}

interface State {
  openIndexes: number[];
}

export class Accordion extends React.Component<Props, State> {
  state = { openIndexes: [0] };

  setOpenIndex = (openIndex: number) =>
    this.setState({ openIndexes: [openIndex] });

  render() {
    const { openIndexes } = this.state;

    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>
            <button onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            {openIndexes.includes(index) ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </li>
        ))}
      </ul>
    );
  }
}
