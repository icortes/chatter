module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'SuperSecretsecret',
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:300/api'  //development api
        : 'https://chatter.isaaccortes.com/api',  //product api
  },
};
