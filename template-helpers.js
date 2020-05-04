"use strict";

const siteStrings = {
  "websiteTitle": "Security Standardisation Research Conference 2020 - Brought to you by Mozilla",
  "websiteDescription": "A virtual conference covering the full spectrum of research on security standardisation.",
};

function getString(stringId) {
  return siteStrings[stringId];
}

module.exports = {
  getString,
};
