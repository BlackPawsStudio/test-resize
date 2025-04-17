import { useState } from "react";
import { Resizable } from "react-resizable";

interface Size {
  width: number;
  height: number;
}

export const ResizableBox = () => {
  const [size, setSize] = useState<Size>({ width: 200, height: 200 });

  const [left, setLeft] = useState(0);

  return (
    <Resizable
      height={size.height}
      width={size.width}
      onResize={(_, { size: newSize, handle }) => {
        if (handle === "nw") {
          setLeft((p) => p + (size.width - newSize.width));
        } else {
          if (handle === "w") {
            setLeft((p) => p + (size.width - newSize.width));
          }
          setSize(newSize);
        }
      }}
      axis="x"
      resizeHandles={["e", "w", "nw"]}
      handle={(axis, ref) => (
        <div
          ref={ref}
          style={{
            backgroundColor: "blue",
            width: "10px",
            height: "10px",
            position: "absolute",
            left: axis === "w" ? "0px" : axis === "nw" ? "50%" : "auto",
            right: axis === "e" ? "0px" : "auto",
            bottom: axis === "nw" ? "0px" : "auto",
          }}
        ></div>
      )}
    >
      <div
        className="box"
        style={{
          backgroundColor: "red",
          margin: "0 auto",
          width: `${size.width}px`,
          height: `${size.height}px`,
          position: "absolute",
          left: `${left}px`,
        }}
      ></div>
    </Resizable>
  );
};
