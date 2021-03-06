Package.describe({
  summary: "Reaction Logger - core logging libs for Reaction Commerce",
  name: "reactioncommerce:reaction-logger",
  documentation: "README.md",
  version: "0.2.1"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.3");
  api.use("tmeasday:check-npm-versions@0.3.1");
  api.use([
    "ecmascript",
    "underscore"
  ]);

  api.mainModule("server/main.js", "server");
  api.mainModule("client/main.js", "client");

  api.export("bunyan", "client");
  api.export("Logger", "server");
});

Package.onTest(function (api) {
  api.use("tinytest", "client");
  api.addFiles("tests/bunyan-test.js", "client");
});
