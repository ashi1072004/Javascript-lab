describe("pow", function(){
    describe("raises x to power 3", function(){
        function makeTest(x){
            let expected = x**3;
            it(`${x} to power 3 is ${expected}`, function(){
                assert.equal(pow(x,3), expected);
            })
        }
        for(x=1; x<=5; x++){
            makeTest(x);
        }
    });
    describe("raises x to power 4", function(){
        function makeTest(x){
            let expected = x**4;
            it(`${x} to power 4 is ${expected}`, function(){
                assert.equal(pow(x,4), expected);
            })
        }
        for(x=1; x<=5; x++){
            makeTest(x);
        }
    });
});