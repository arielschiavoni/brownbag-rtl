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
  openIndex: number;
}

export class Accordion extends React.Component<Props, State> {
  state = { openIndex: 0 };
  setOpenIndex = (openIndex: number) => this.setState({ openIndex });
  render() {
    const { openIndex } = this.state;

    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>
            <button onClick={() => this.setOpenIndex(index)}>
              {item.title}
            </button>
            {index === openIndex ? (
              <AccordionContents>{item.contents}</AccordionContents>
            ) : null}
          </li>
        ))}
      </ul>
    );
  }
}
