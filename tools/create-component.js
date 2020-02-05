#!/usr/bin/env node
const fs = require("fs");

function genFile(name, ext, template = "") {
  fs.appendFile(`${name}.${ext}`, template, (err) => {
    if (err) throw err;
  });
}

function firstLetterToLowerCase(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

const componentName = process.argv[2];

const componentClassName = firstLetterToLowerCase(componentName);

const reactTemplate = `import React from "react";
import classes from "./${componentName}.css";

export const ${componentName} = React.memo(({}) => {
  
  return (
    <div className={classes.${componentClassName}}>

    </div>
  )
});

${componentName}.displayName = "${componentName}";
`;

const cssTemplate = `.${firstLetterToLowerCase(componentName)} {
}
`;

const dirPath = `${process.env.INIT_CWD}/${componentName}`;

fs.mkdir(dirPath, {}, (err) => {
  if (err) throw err;

  genFile(
    `${dirPath}/${componentName}`,
    "jsx",
    reactTemplate,
  );

  genFile(
    `${dirPath}/${componentName}`,
    "css",
    cssTemplate,
  );
});
