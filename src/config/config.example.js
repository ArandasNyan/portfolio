const GITHUB_TOKEN = "seu_token_aqui";

export const github = {
  username: 'seu_username_aqui',
  token: GITHUB_TOKEN,
  headers: {
    Authorization:  `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
  },
};
