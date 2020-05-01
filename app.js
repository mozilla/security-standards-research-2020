const express = require("express");
const exphbs = require("express-handlebars");
const helmet = require("helmet");

const TemplateHelpers = require("./template-helpers");

const app = express();
// eslint-disable-next-line no-process-env
const port = process.env.PORT || 8000;


// Use helmet to set security headers
// disable default HSTS; Ops handles it in stage & prod configs
app.use(helmet({
  hsts: false,
}));

app.use(helmet.contentSecurityPolicy({
  directives: {
    baseUri: ["'none'"],
    defaultSrc: ["'self'", "https://www.google-analytics.com"],
    connectSrc: ["https://www.google-analytics.com"],
    fontSrc: ["'self'"],
    frameAncestors: ["'none'"],
    mediaSrc: ["'self'"],
    imgSrc: ["'self'", "https://www.google-analytics.com"],
    objectSrc: ["'none'"],
    scriptSrc: ["'self'", "https://www.google-analytics.com/analytics.js"],
    styleSrc: ["'self'", " https://security-standards-research.herokuapp.com/docs/SSR_2020_CFP_v1.pdf"],
  },
}));
app.use(helmet.referrerPolicy({ policy: "strict-origin-when-cross-origin" }));
app.use(express.static("public", {
  setHeaders: res => res.set("Cache-Control",
    // 10-minute client-side caching; 24-hour server-side caching
    "public, maxage=" + 10 * 60 * 1000 + ", s-maxage=" + 24 * 60 * 60 * 1000
  ),
}));

const hbs = exphbs.create({
  extname: ".hbs",
  layoutsDir: __dirname + "/views/layouts",
  defaultLayout: "default",
  partialsDir: __dirname + "/views/partials",
  helpers: TemplateHelpers,
});
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");


app.get("/", (req, res) => {
  res.render("landing-page", {
  });
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Secure Standards Research Conference on Port ${port}.`));
