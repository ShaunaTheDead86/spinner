// again, I don't know why but the delays are much too short on my computer, so I increased them to 500 ms per iteration


let animation = '|/-\\|/-\\|';
let delay = 500;

for (const char of animation) {
  setTimeout(() => {
    process.stdout.write('\r' + char);
  },delay);
  delay += 500;
  console.log(delay);
}
