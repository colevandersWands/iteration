{ console.log('--- -- name of challenge -- ---');

console.log('--- og code ---')

  function og(iters) {
    let result = [];

    for (let i = 0; i < iters; i++) {
      if (i % 2) {
        result.push(i);
      };
    };

    return result;
  };


console.log('--- test cases ---');

  const test_cases = [
      {name: '0', args: [0], expected: []},
      {name: '4', args: [4], expected: [1,3]},
      {name: '5', args: [5], expected: [1,3]},
      {name: '6', args: [6], expected: [1,3,5]},
      {name: '7', args: [7], expected: [1,3,5]},
      {name: '7', args: [7], expected: og(6)},
      {name: '13', args: [13], expected: [1,3,5,7,9,11]},
    ];
  run_tests(og, test_cases);


console.log('--- expand it ---')

  function pand(iters) {
    let result = [];

    let i = 0;
    let while_cond =  i < iters;
    while (while_cond) {
      let if_cond = i % 2;
      if (if_cond) {
        result.push(i);
      };
      i++;
      while_cond =  i < iters;
    };

    return result;
  };
  run_tests(pand, test_cases);


console.log('--- chunk it ---');

  function chunked(iters) {              
    let result = [];                    

    let i = 0;                          
    let while_cond =  i < iters;        
    while (while_cond) {

      let push_if_odd; {
        let if_cond = i % 2;              
        if (if_cond) {
          result.push(i);                 
        };
      push_if_odd = if_cond };

      i++;                              
      while_cond =  i < iters;          
    };
                                        
    return result;
  };
  run_tests(chunked, test_cases);

console.log('--- log strategy ---');
  
  function chunk_logged(iters) {              const log = [{iters}];
    let result = [];                          log.push({result: result.slice()});

    let i = 0;                          
    let while_cond =  i < iters;        
    while (while_cond) {

      let push_if_odd; {
        let if_cond = i % 2;              
        if (if_cond) {
          result.push(i);                 
        };
      push_if_odd = Boolean(if_cond) };       log.push({push_if_odd, i});

      i++;                              
      while_cond =  i < iters;          
    };
                                               log.push({result});
    return {result, log};
  };
  log_reports(chunk_logged, test_cases);


console.log('--- count steps ---');

  const step_cases = [
      {name: '0', args: [0], expected: 2},
      {name: '4', args: [4], expected: 24},
      {name: '5', args: [5], expected: 29},
      {name: '6', args: [6], expected: 35},
      {name: '7', args: [7], expected: 40},
      {name: '13', args: [13], expected: 73},
    ];
  function count(iters) {                     let ops = 0;
    let result = [];                          
    let i = 0;                          
    let while_cond =  i < iters;              ops+=2;
    while (while_cond) {
      let push_if_odd; {
        let if_cond = i % 2;                  ops+=2;
        if (if_cond) {
          result.push(i);                     ops++;
        };
      push_if_odd = !!if_cond };    
      i++;                                    ops++;
      while_cond =  i < iters;                ops+=2;
    };
                                           
    return ops;
  };
  run_tests(count, step_cases);


console.log('--- explained ---')

  function plaind(iters) {                    let ops = 0;
                                              const log = [{ops, iters}];
    let result = [];                          log.push({ops, result: result.slice()});
    let i = 0;                          
    let while_cond =  i < iters;              ops+=2;
    while (while_cond) {
      let push_if_odd; {
        let if_cond = i % 2;                  ops+=2;
        if (if_cond) {
          result.push(i);                     ops++;
        };
      push_if_odd = !!if_cond };              log.push({ops, push_if_odd, i});
      i++;                                    ops++;
      while_cond =  i < iters;                ops+=2;
    };
                                              log.push({ops, result});
    return {ops, log};
  };
  log_reports(plaind, step_cases);


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
function log_reports(_target, _cases) {
  const report = {}
  for (let t_case of _cases) {
     report[t_case.name] = _target(...t_case.args) 
  }
  console.log(report)
}
};