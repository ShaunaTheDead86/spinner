// again, I don't know why but the delays are much too short on my computer, so I increased them to 500 ms per iteration

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 2000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   ');
}, 2500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r/   ');
}, 3000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r-   ');
}, 3500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 4000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r|   ');
}, 4500);