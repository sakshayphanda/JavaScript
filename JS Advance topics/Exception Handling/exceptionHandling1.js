try {
    console.log('A');
    console.log('B');
    throw 'invalid';
    console.log('C');

} catch(exception) {
    console.log(`catch block: ${exception}`);
} finally {
    console.log('It will always run');

}