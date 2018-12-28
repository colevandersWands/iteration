{ console.log('--- -- name of challenge -- ---');

console.log('--- og code ---')
  // https://github.com/GramParallelo/freecodecamp-solutions/blob/master/intermediate-algorithm-scripting/sum-all-odd-fibonacci-number.js

  function og(num) {
    let previous = 0,
        current = 1,
        result = 0;
    while(current <= num){
      if (current%2!==0){
        result += current;
      }
      current += previous;
      previous = current - previous;
    }
    return result;
  }


console.log('--- test cases ---');

  const test_cases = [
      {name: '0', args: [0], expected: 0},
      {name: '4', args: [4], expected: 5},
      {name: '5', args: [5], expected: 10},
      {name: '6', args: [6], expected: 10},
      {name: '7', args: [7], expected: 10},
      {name: '13', args: [13], expected: 23},
    ];
  run_tests(og, test_cases);


console.log('--- extract the body ---')
  
  const body_cases = [
      {name: '4, 8, 3, 8',  
          args: [{res: 4, num: 8, prev: 3, curr: 8}], 
          expected: {while_cond: false, result: 4, current: 11, previous: 8}},
      {name: '1990, 13, 5, 9',  
          args: [{res: 1990, num: 13, prev: 5, curr: 9}],
          expected: {while_cond: false, result: 1999, current: 14, previous: 9}},
      {name: '10, 3, 1, 1',  
          args: [{res: 10, num: 3, prev: 1, curr: 1}],
          expected: {while_cond: true, result: 11, current: 2, previous: 1}},
      {name: '6, 23, 6, 2',  
          args: [{res: 6, num: 23, prev: 6, curr: 2}],
          expected: {while_cond: true, result: 6, current: 8, previous: 2}},
      {name: '6, 23, 6, 3',  
          args: [{res: 6, num: 23, prev: 6, curr: 3}],
          expected: {while_cond: true, result: 9, current: 9, previous: 3}},
    ];
  function body(args) {
      // pass in all vars the body needs as a structured arg
      let result = args.res;
      let num = args.num;
      let previous = args.prev;
      let current = args.curr;

      if (current%2!==0){
        result += current;
      }
      current += previous;
      previous = current - previous;

      // return whether the loop should return
      const while_cond = current <= num;

      // only need to return things that change
      return {while_cond, result, current, previous};
  }
  run_tests(body, body_cases);






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
      console.log(`${t_case.name}: \n`);
      console.log(`   actual: ${typeof actual},`, actual);
      console.log(`   expected: ${typeof expected},`, expected);
    };
  };
};

};