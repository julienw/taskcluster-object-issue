module.exports = {
  // This transformIgnorePatterns is better understood as a double negation: the
  // package names below _will_ be transformed.
  // This is needed mostly because our fetch-mock doesn't use esm, but these
  // dependencies of fetch-mock do! Hopefully this won't be needed in the future
  // when fetch-mock updates.
  transformIgnorePatterns: [
    '/node_modules/(?!(taskcluster-client-web)/)',
  ],
};

