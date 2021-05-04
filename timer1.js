let myArgs = process.argv.slice(2);

const timer = function (args) {
  if (!args) {
    return;
  }

  let argsToNumber = args.map((arg) => Number(arg)).sort((a, b) => a - b);

  for (let elem of argsToNumber) {
    if (elem > 0 && typeof elem === "number") {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, elem * 1000);
    }
  }
};

timer(myArgs);
