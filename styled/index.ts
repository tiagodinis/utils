type FlexProps = {
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const flex = ({ direction, align, justify }: FlexProps = {}) => `
  display: flex;
  flex-direction: ${direction || 'row'};
  justify-content: ${justify || 'space-between'};
  align-items: ${align || 'center'};
`;

export const shift = (x = 0, y = 0) => `translate: ${x}px ${y}px`;

export const scrimGradient = (
  red = 0,
  green = 0,
  blue = 0,
  angle = 180
) => `linear-gradient(
    ${angle}deg,
    rgba(${red}, ${green}, ${blue}, 1) 0%,
    rgba(${red}, ${green}, ${blue}, 0.738) 19%,
    rgba(${red}, ${green}, ${blue}, 0.541) 34%,
    rgba(${red}, ${green}, ${blue}, 0.382) 47%,
    rgba(${red}, ${green}, ${blue}, 0.278) 56.5%,
    rgba(${red}, ${green}, ${blue}, 0.194) 65%,
    rgba(${red}, ${green}, ${blue}, 0.126) 73%,
    rgba(${red}, ${green}, ${blue}, 0.075) 80.2%,
    rgba(${red}, ${green}, ${blue}, 0.042) 86.1%,
    rgba(${red}, ${green}, ${blue}, 0.021) 91%,
    rgba(${red}, ${green}, ${blue}, 0.008) 95.2%,
    rgba(${red}, ${green}, ${blue}, 0.002) 98.2%,
    transparent 100%
  )`;

// export function getPoints(numDivisions, easingFunction, start = 0, end = 1) {
//   if (numDivisions < 1) {
//     throw new Error("Number of divisions must be at least 1.");
//   }

//   const increment = (end - start) / (numDivisions + 1);
//   const points = Array.from({ length: numDivisions + 1 }, (_, i) =>
//     easingFunction(i * increment + start)
//   );

//   return [...points, end];
// }

// export function customGradient(angle, red, green, blue, points) {
//   let res = `linear-gradient(${angle}deg`;
//   const increment = 1 / (points.length - 1);

//   for (let i = 0; i < points.length; i++) {
//     res += `, rgba(${red}, ${green}, ${blue}, ${round(points[i], 3)}) ${round(i * increment * 100, 1)}%`;
//   }

//   return `${res})`;
// }




// ----------------------------------------------------------------------------

// export const clampedLerp = (min, max, from, to, unit) => `
//   clamp(
//     ${min}${unit},
//     calc(${min}${unit} + (${max} - ${min}) * ((100vw - ${from}px) / (${to} - ${from}))),
//     ${max}${unit}
//   );
// `;

// TODO: make it more generic by receiving array of ranges
// export const responsiveLerp = (property, min, max) => `
//   @media (min-width: ${ranges.laptop[0]}px) {
//     ${property}: ${clampedLerp(min, max, ...ranges.laptop, 'px')};
//   }
//   @media (min-width: ${ranges.tablet[0]}px) {
//     ${property}: ${clampedLerp(min, max, ...ranges.tablet, 'px')};
//   }
//   ${property}: ${clampedLerp(min, max, ...ranges.mobile, 'px')};
// `;

// export const centeringAbsolute = (position) => `
//   position: ${position};
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;

// export const centeringFlex = `
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const stackingGrid = `
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr;

//   & > div {
//     grid-area: 1 / 1 / 2 / 2;
//   }
// `;

// export const evenGrid = (rows, cols) => `
//   display: grid;
//   grid-template-columns: repeat(${cols}, 1fr);
//   grid-template-rows: repeat(${rows}, 1fr);
// `;
