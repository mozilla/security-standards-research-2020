"use strict";

const fs = require("fs");

const glob = require("glob");
const htmllint = require("htmllint");

const htmllintopts = {
  "attr-bans": false,
  "attr-name-style": false,
  "attr-quote-style": false,
  "class-style": "none",
  "indent-style": false,
  "indent-width": false,
  "line-end-style": false,
  "line-no-trailing-whitespace": false
};

main();

async function main() {
  const files = glob.sync("./views/static/*.html");
  for (const file of files) {
    await lintFile(file);
  }
}

async function lintFile(file, opts = htmllintopts) {
  const _file = fs.readFileSync(file, "utf-8").toString();
  const errors = await htmllint(_file, opts);
  if (errors.length) {
    errors.map(err => {
      err.file = file;
      return err;
    });
    console.error(JSON.stringify(errors, null, 2));
    process.exitCode = 2;
  }
}
