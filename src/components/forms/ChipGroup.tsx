"use client";

import { useState, type CSSProperties } from "react";

/** Single-choice chip selector that submits its value with the surrounding form. */
export default function ChipGroup({
  label,
  name,
  options,
  defaultIndex = 0,
  style,
  legendStyle,
}: {
  label: string;
  name: string;
  options: string[];
  defaultIndex?: number;
  style?: CSSProperties;
  legendStyle?: CSSProperties;
}) {
  const [value, setValue] = useState(options[defaultIndex] ?? options[0]);
  return (
    <fieldset style={style}>
      <legend style={legendStyle}>{label}</legend>
      <input type="hidden" name={name} value={value} />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {options.map((o) => (
          <button
            key={o}
            type="button"
            className={o === value ? "chip on" : "chip"}
            aria-pressed={o === value}
            onClick={() => setValue(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
