const sentence = "hello there from lighthouse labs.\n";
let delay = 0;
let increment = 50;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += increment;
}
// setTimeout(() => console.log("\n"),1550);

