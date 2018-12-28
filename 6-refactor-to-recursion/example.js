{ console.log('--- -- challenge name -- ---');

console.log('--- challenge description ---');

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

  const test_cases = [
      {name: '1', args: [1], expected: [0]},
      {name: '2', args: [2], expected: [0,1]},
      {name: '3', args: [3], expected: [0,1,1]},
      {name: '4', args: [4], expected: [0,1,1,2]},
      {name: '5', args: [5], expected: [0,1,1,2,3]},
      {name: '6', args: [6], expected: [0,1,1,2,3,5]},
      {name: '7', args: [7], expected: [0,1,1,2,3,5,8]},
      {name: '8', args: [8], expected: [0,1,1,2,3,5,8,13]},
      {name: '9', args: [9], expected: [0,1,1,2,3,5,8,13,21]},
    ];  

console.log('--- spec the body ---');
  /*
    what is my starting state
      the arg, an array
    what is my finished state
      an array as long as the arg
    -- -- -- -- -- -- -- -- -
    what do i change each time
      if it's not long enough, add a new item in the array by summing the last two
      unless arg === 1 or arg === 2:
        1 -> create [0]
        2 -> create [0,1]
    when do i stop repeating  
      when array is as long as arg
  */
  
  // describe & only writing valid test cases
  //  arg is a positive whole number > 0
  //  array has a minimum of 2 items
  const body_tests = [
      {name: '4, [3,4]', args: [4,[3,4]], expected: {cond: true, res: [3,4,7]}},
      {name: '4, [3,4,3,4]', args: [4,[3,4,3,4]], expected: {cond: false, res: [3,4,3,4]}},
      {name: '3, [3,4,3,4]', args: [3,[3,4,3,4]], expected: {cond: false, res: [3,4,3,4]}},
      {name: '8, [3,4,3,4]', args: [8,[3,4,3,4]], expected: {cond: true, res: [3,4,3,4,7]}},
      {name: '1, [3,4,3,4]', args: [1,[3,4,3,4]], expected: {cond: false, res: [0]}},
      {name: '2, [3,4,3,4]', args: [2,[3,4,3,4]], expected: {cond: false, res: [0,1]}},
    ];


console.log('--- develop the body ---');

  function body(arg, arr) {
    let res;
    let cond = true;

    if (arg === 1) {
      res = [0];
      cond = false
    } else if (arg === 2) {
      res = [0,1];
      cond = false
    } else {
      res = arr.slice();
      const length = arr.length;
      if (length < arg) {
        const new_entry = arr[length-1] + arr[length-2];
        res.push(new_entry);
      } else {
        cond = false;
      }
    }

    return {cond, res};
  }
  run_tests(body, body_tests);


console.log('--- recurse it ---');

  function recursed(arg, arr) {
    if (!arr) arr = [0,1];

    if (arg === 1) {
      res = [0];
      return res;
    } else if (arg === 2) {
      res = [0,1];
      return res;
    } else {
      const length = res.length;
      if (length < arg) {
        const new_entry = res[length-1] + res[length-2];
        res.push(new_entry);
        return recursed(res, arr);
      } else {
        return res;
      }
    }
  }
  run_tests(recursed, test_cases);


console.log('--- clean up ---')

  function cleaned(arg, arr) {
    if (!arr) arr = [0,1];

    let recurse = false
    if (arg === 1) {
      res = [0];
    } else if (arg === 2) {
      res = [0,1];
    } else {
      const length = res.length;
      if (length < arg) {
        const new_entry = res[length-1] + res[length-2];
        res.push(new_entry);
        recurse = true;
      };
    };

    if (recurse) {
      return cleaned(res, arr);
    } else {
      return res;
    };
  }
  run_tests(cleaned, test_cases);





// ---------- test utils ----------

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
      console.log(`${t_case.name}: \n`);
      console.log(`   actual: ${typeof actual},`, actual);
      console.log(`   expected: ${typeof expected},`, expected);
    };
  };
};

}