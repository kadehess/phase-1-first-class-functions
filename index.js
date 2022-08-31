function receivesAFunction(bakery) {
    bakery();
  }
  function returnsANamedFunction() {
    function kaliGurl() {
      return "Kali Gurl! from the coyote den!";
    }
    return kaliGurl;
  }
  function returnsAnAnonymousFunction() {
    return () => {};
  }