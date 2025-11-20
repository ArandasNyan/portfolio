import hexToRgba from "../utils/hexToRgba.js";

export function customTooltip(context, tooltip) {
  const { tooltip: model } = context;

  if(model.opacity == 0) {
    tooltip.classList.add("hidden");
    return;
  }

  tooltip.classList.remove("hidden");

  const data = model.dataPoints[0];
  const label = data.label;
  const value = data.formattedValue;
  const color = model.labelColors[0].backgroundColor;

  tooltip.innerHTML = `
    <p class="font-semibold">${label}</p>
    <p>${value} projetos</p>
  `;

  tooltip.style.backgroundColor = hexToRgba(color, 0.35);
  tooltip.style.border = `2px solid ${color}`;
  tooltip.style.left = model.caretX + "px";
  tooltip.style.top = model.caretY + "px";
}
