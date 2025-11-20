import { fetchGitHubLanguages } from "./services/fetchLanguagesRepositories.js";
import { createChart } from "./chart/chartSetup.js";
import { github } from "./config/config.js";
const { username } = github;

const canvas = document.querySelector('#chart-projects');
const tooltip = document.querySelector('#chart-tooltip');

async function execute() {
  const data = await fetchGitHubLanguages(username);
  const labels = Object.keys(data);
  const values = Object.values(data);

  createChart(canvas, tooltip, labels, values);
}

execute();