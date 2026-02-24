//simple way to create an assync function

function delayeFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreeting(name) {
  await delayeFn(2000);
  console.log(`Hello ${name} 😉`);
}

delayedGreeting("David");

//handling errors

async function divisioFn(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("can not divide by 0");
    } else return num1 / num2;
  } catch (error) {
    console.log(error);
    return null;
  }
}

//calling the division function
async function mainFn(params) {
  console.log(await divisioFn(15, 3));
  console.log(await divisioFn(15, 0));
}

mainFn();
