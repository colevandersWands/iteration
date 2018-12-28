{ console.log('--- -- name of challenge -- ---');
  
  // you will be given a loop
  // your task is to refactor it into every loop type
  //  except of course the one it already is

  // take note of the types of code that are simpler or trickier with different loops

  // in & of won't work for every challenge, take not of which ones don't work
  //  for more info look up 'iterables'

console.log('--- og loop ---');

  function og(args) {
    let result;
    // loop
    return result;
  }

console.log('--- test cases ---');

  const test_cases = [{}];
  run_tests(og, test_cases);

console.log('--- while loop ---');

  function while_loop(args) {
    let result;
    // loop
    return result;
  }
  run_tests(while_loop, test_cases);

console.log('--- do while loop ---');

  function do_while_loop(args) {
    let result;
    // loop
    return result;
  }
  run_tests(do_while_loop, test_cases);

console.log('--- for loop ---');

  function for_loop(args) {
    let result;
    // loop
    return result;
  }
  run_tests(for_loop, test_cases);

console.log('--- for in loop ---');

  function for_in_loop(args) {
    let result;
    // loop
    return result;
  }
  run_tests(for_in_loop, test_cases);

console.log('--- for of loop ---');

  function for_of_loop(args) {
    let result;
    // loop
    return result;
  }
  run_tests(for_of_loop, test_cases);




// ------- testing utils ------- 



function run_tests(_target, _cases) {
  for (let t_case of _cases) {
    const expected = t_case.expected;
    const actual = _target(... t_case.args, false);

    let pass;
    if (typeof expected === 'object') {
      const _actual = JSON.stringify(actual);
      const _expected = JSON.stringify(expected);
      pass = _actual === _expected;
    } else {
      pass = actual === expected;
    };

    if (!pass) {
      console.log(`${t_case.name}: \n` + 
          `   actual: {${typeof actual}, ${actual}} \n` +
          `   expected: {${typeof expected}, ${expected}}`);
    };
  };
};

};