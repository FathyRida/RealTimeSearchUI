import React from "react";
import { get } from "lodash";

export default function HitItemComponent(props) {
  return (
    <div
      className={props.bemBlocks.item().mix(props.bemBlocks.container("item"))}
    >
      <img
        className={props.bemBlocks.item("poster")}
        src={props.result._source.poster}
      />
      <div
        className={props.bemBlocks.item("title")}
        dangerouslySetInnerHTML={{
          __html: get(
            props.result,
            "highlight.title",
            props.result._source.title
          ),
        }}
      ></div>
    </div>
  );
}
