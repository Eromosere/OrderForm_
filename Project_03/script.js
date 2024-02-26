// The Rosenbrock function is defined as follows:
f(x,y) = (1-x)^2 + 100(y-x^2)^2

// Define the Rosenbrock function
function rosenbrock(x, y) {
    return Math.pow(1 - x, 2) + 100 * Math.pow(y - x * x, 2);
  }
  
  // Define the gradient of the Rosenbrock function
  function rosenbrockGradient(x, y) {
    return {
      x: -2 * (1 - x) - 400 * x * (y - x * x),
      y: 200 * (y - x * x),
    };
  }
  
  // Set the initial values of x and y
  let x = 0;
  let y = 0;
  
  // Set the learning rate and maximum number of iterations
  const learningRate = 0.001;
  const maxIterations = 10000;
  
  // Perform the gradient descent algorithm
  for (let i = 0; i < maxIterations; i++) {
    // Calculate the gradient of the Rosenbrock function at the current point
    const gradient = rosenbrockGradient(x, y);
  
    // Update the values of x and y in the direction of the negative gradient
    x -= learningRate * gradient.x;
    y -= learningRate * gradient.y;
  
    // Calculate the value of the Rosenbrock function at the updated point
    const value = rosenbrock(x, y);
  
    // Print the current iteration and value to the console
    console.log(`Iteration ${i}: x = ${x.toFixed(6)}, y = ${y.toFixed(6)}, f(x,y) = ${value.toFixed(6)}`);
  
    // Check if the algorithm has converged to the minimum
    if (value < 1e-6) {
      console.log(`Converged to the minimum after ${i} iterations`);
      break;
    }
  }
  