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


console.log('--- log each step ---');
  // this step may not be necessary ?
  
  function logged(iters) {              const log = [{iters}];
    let result = [];                    log.push({result: result.slice()})

    let i = 0;                          log.push({i})
    let while_cond =  i < iters;        log.push({['while (i < iters)']: while_cond});
    while (while_cond) {
      let if_cond = i % 2;              log.push({['if (i % 2)']: Boolean(if_cond)});
      if (if_cond) {
        result.push(i);                 log.push({result: result.slice()});
      };
      i++;                              log.push({i});
      while_cond =  i < iters;          log.push({['while (i < iters)']: while_cond});
    };
                                        log.push({result: result.slice()});
    return log;
  };
  log_reports(logged, test_cases);



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