describe('NameTrack function', function(){
    it('Should return 5, with 6 names entered and 1 name repeating', function(){
        var greetCheckOne = NameTrack(2,{Mike:0,Micah:0});
        greetCheckOne.add("Dyllan");
        greetCheckOne.add("Michael");
        greetCheckOne.add("John");
        greetCheckOne.add("Sam");
        greetCheckOne.add("Daniel");
        greetCheckOne.add("Dyllan");
        assert.equal(greetCheckOne.counter(),7);
    })
    it('Should return 2 of the entered names, and exclude the repeated name', function(){
        var greetCheckOne = NameTrack(0,{});
        greetCheckOne.add("Dyllan");
        greetCheckOne.add("Michael");
        greetCheckOne.add("Dyllan");
        assert.deepEqual(greetCheckOne.items(),{Dyllan: 0,Michael: 0});
    })
    it('Should return the 5 that was loaded in for the counter to be updated for a page refresh', function(){
        var greetCheckOne = NameTrack(5,{});
        assert.equal(greetCheckOne.counter(),5);
    })
    it('Should return the 2 names that were loaded in for the list of names previously entered for a page refresh', function(){
        var greetCheckOne = NameTrack(5,{Dyllan:0,Michael:0});
        assert.deepEqual(greetCheckOne.items(),{Dyllan: 0, Michael: 0});
    })
})