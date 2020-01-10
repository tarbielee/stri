let calcular = require("../src/string calculator")

describe("handle integers paased in as a string", function() {
    
    
    it('add ""', function() {
        expect(myString.string("")).toBe("should return 0")

    it('add "1"', function() {
        expect(myString.string("1")).toBe("should return 1")

    it('add "1,1"', function() {
        expect(myString.string("1,1")).toBe("should return 2")

    it('add "1,2,3,4"', function() {
        expect(myString.string("1,2,3,4")).toBe("should return 10")

    it('add ""', function() {
        expect(myString.string("")).toBe("should return 1")

    it('add "1,1"', function() {
        expect(myString.string("1,1")).toBe("should return 2")

    it('add "1\n2,3"', function() {
        expect(myString.string("1\n2,3")).toBe("should return 6")

    it('add "//;\n1;2"', function() {
        expect(myString.string("//;\n1;2")).toBe("should return 3")
        
    it('add "//4\n142"', function() {
        expect(myString.string("//4\n142")).toBe("should return 3")

    it('add "-1,-2,-3,-4"', function() {
        expect(myString.string("-1,-2,-3,-4")).toBe("Should return an ERROR")



    }
}