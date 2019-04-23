describe('NameTrack function', function(){
    it('Should return 5, with 6 names entered and 1 name repeating', function(){
        var greetCheckOne = NameTrack();
        greetCheckOne.add("Dyllan");
        greetCheckOne.add("Michael");
        greetCheckOne.add("John");
        greetCheckOne.add("Sam");
        greetCheckOne.add("Daniel");
        greetCheckOne.add("Dyllan");
        assert.equal(greetCheckOne.counter(),5);
    })
    it('Should return 5 of the entered names, and exclude the repeated name', function(){
        var greetCheckOne = NameTrack();
        greetCheckOne.add("Dyllan");
        greetCheckOne.add("Michael");
        greetCheckOne.add("John");
        greetCheckOne.add("Sam");
        greetCheckOne.add("Daniel");
        greetCheckOne.add("Dyllan");
        assert.equal(greetCheckOne.string(),'Dyllan,Michael,John,Sam,Daniel,');
    })
    it('Should return the 5 that was loaded in for the counter to be updated for a page refresh', function(){
        var greetCheckOne = NameTrack();
        greetCheckOne.load(5,'');
        assert.equal(greetCheckOne.counter(),5);
    })
    it('Should return the 5 names that were loaded in for the list of names previously entered for a page refresh', function(){
        var greetCheckOne = NameTrack();
        greetCheckOne.load(5,'Dyllan,Michael,John,Sam,Daniel,');
        assert.equal(greetCheckOne.string(),'Dyllan,Michael,John,Sam,Daniel,');
    })
})