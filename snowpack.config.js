/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mode: "development",
  mount: {
    src: "/src",
    public: "/public",
  },

  buildOptions: {
    out: "dist",
    watch: true,
  },
  devOptions: {
    port: 3000,
    // openUrl: "public/index.html"
  },
};
