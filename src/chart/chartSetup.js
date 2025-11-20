import languageColors from './languageColors.js';
import { customTooltip } from './tooltip.js';

export function createChart(canvas, tooltip, labels, values){
  const colors = labels.map(
    (lang) => languageColors[lang] || languageColors.Other
  );

  new Chart(canvas, {
    type: "doughnut",
    data:{
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: colors,
          spacing: 10,
          borderRadius: 5,
          borderWidth: 0,
          borderJoinStyle: "round"
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "85%",
      plugins: {
        tooltip: {
          enabled: false,
          external: (context) => customTooltip(context, tooltip),
        },
        legend: {
          display: false,
          position: "bottom",
          labels: {
            color: "#F5F5F5",
            usePointStyle: true,
            pointStyle: "circle",
          },
        }
      }
    },
  })
}