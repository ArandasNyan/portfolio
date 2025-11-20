import { github } from "../config/config.js";
const { headers } = github;

export async function fetchGitHubLanguages(username) {
  const reposURL = `https://api.github.com/users/${username}/repos`;
  const repositories = await fetch(reposURL, { headers }).then(repos => repos.json());

  const languagesCounter = {};

  for (const repository of repositories) {
    if(typeof repository.language === 'string'){
      languagesCounter[repository.language] = (languagesCounter[repository.language] || 0) + 1
    }
  }

  return languagesCounter
}