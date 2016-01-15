/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' ); 

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

test( "sum Test", 2, function() {
    // Verify the method exists
    equal( typeof sum, 'function', 'Must contain a sum function' );

    // Make sure the result from the divide function is valid
    ok(sum( [2,4], 2 ), 8, 'Expected 8 as the result, the result was: ' + sum( 4, 2 ) );
});

test( "splitListStrUsingComma Test", 2, function() {
    // Verify the method exists
    equal( typeof splitListStrUsingComma, 'function', 'Must contain a sum function' );

    // Make sure the result from the divide function is valid
    ok(splitListStrUsingComma( 'thanuz'), "t,h,a,n,u,z", 'Expected t,h,a,n,u,z as the result, the result was: ' + splitListStrUsingComma( 'thanuz' ) );
});

test( "findMinValue Test", 2, function() {
    // Verify the method exists
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );

    // Make sure the result from the divide function is valid
    ok(findMinValue([2,0,12,-9]), -9, 'Expected -9 as the result, the result was: ' + findMinValue([2,0,12,-9]) );
});


test( "reverseString Test", 2, function() {
    // Verify the method exists
    equal( typeof reverseString, 'function', 'Must contain a reverseString function' );

    // Make sure the result from the divide function is valid
    ok(reverseString( "abc"), "cba", 'Expected cba as the result, the result was: ' + reverseString("abc") );
});

test( "findDistinctValues Test", 2, function() {
    // Verify the method exists
    equal( typeof findDistinctValues, 'function', 'Must contain a findDistinctValues function' );

    // Make sure the result from the divide function is valid
    ok(findDistinctValues([1,6,7,2,3,2,7,7]),[1,6,7,2,3], 'Expected [1,6,7,2,3] as the result, the result was: ' + findDistinctValues([1,6,7,2,3,2,7,7]) );
});

test( "removeFruits Test", 2, function() {
    // Verify the method exists
    equal( typeof removeFruits, 'function', 'Must contain a removeFruits function' );

    // Make sure the result from the divide function is valid
    ok(removeFruits(["apple","grape","banana"],["apple"]), ["grape","banana"], 'Expected ["grape","banana"]  as the result, the result was: ' + removeFruits(["apple","grape","banana"],["apple"]) );
});


test( "pushOntoArray Test", 2, function() {
    // Verify the method exists
    equal( typeof pushOntoArray, 'function', 'Must contain a pushOntoArray function' );

    // Make sure the result from the divide function is valid
    ok(pushOntoArray([1,2,3],4,[5,6]), [1,2,3,4,5,6], 'Expected [1,2,3,4,5,6] as the result, the result was: ' + pushOntoArray([1,2,3],4,[5,6]) );
});