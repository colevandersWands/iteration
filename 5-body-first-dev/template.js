{ console.log('--- -- challenge name -- ---');

console.log('--- challenge description ---');

  // a challenge that can be solved by iteration

  const test_cases = [

    ];  

console.log('--- spec the body ---');
  /*
    what is my starting state
    what is my finished state
    -- -- -- -- -- -- -- -- -
    what do i change each time
    when do i stop repeating
  */
  const body_tests = [

    ];


console.log('--- develop the body ---');

  function body() {

  }
  run_tests(body, body_tests);


console.log('--- extract to loop ---');

  function loop() {

  }
  run_tests(loop, test_cases);




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