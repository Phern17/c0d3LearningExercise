const fn = require("./arrayObject")

describe('getNext function', () => {
    it('should iterate through 3 elements', () => {
      const arr = ['Edna', 'Optimus', 'Minion'];
      let result = arr.getNext();
      expect(result).toEqual('Edna');
      expect(arr.getNext()).toEqual('Optimus');
      expect(arr.getNext()).toEqual('Minion');
    });
    it('should return to beginning once done', () => {
      const arr = [9, 80, 12, 2];
      expect(arr.getNext()).toEqual(9);
      expect(arr.getNext()).toEqual(80);
      expect(arr.getNext()).toEqual(12);
      expect(arr.getNext()).toEqual(2);
      expect(arr.getNext()).toEqual(9);
      expect(arr.getNext()).toEqual(80);
    });
    it('should return undefined for an empty array', () => {
      const arr = [];
      expect(arr.getNext()).toEqual(undefined);
    });
    it('should iterate through one element', () => {
      const arr = ['Ironman'];
      expect(arr.getNext()).toEqual('Ironman');
      expect(arr.getNext()).toEqual('Ironman');
    });
    it(`shouldn't iterate`, () => {
      const arr = []
      expect(arr.getNext()).toEqual()
      expect(arr.getNext()).toEqual()
      expect(arr.getNext()).toEqual()
      expect(arr.getNext()).toEqual()
    })
  });

  describe('setMaxSize prototype', () => {
    it('maxSize should stay four', () => {
      const arr = ['Michelangelo', 'Leonardo', 'Raphael'];
      arr.setMaxSize(4);
      arr.push('Donatello')
      arr.setMaxSize(3)
      arr.push('Shredder');
      arr.setMaxSize(1)
      arr.push('Splinter')
      expect(arr.length).toEqual(4)
    });
    it('maxSize should increase', () => {
      const arr = ['Michelangelo']
      arr.setMaxSize(2)
      arr.push('Donatello')
      expect(arr.length).toEqual(2)
    })
    it ('maxSize keeps array empty', () => {
      const arr = []
      arr.setMaxSize(0)
      arr.push('M', 'L', 'R')
      expect(arr.length).toEqual(0)
    })
  });

  describe('tiredForEach function', () => {
    jest.useFakeTimers()
    it('should call callback immediately when not tired', () => {
        const callback = jest.fn()
        const arr = ["Edna", "Optimus", "Minion"] 
        arr.tiredForEach(callback, 200)
        expect(callback).toHaveBeenCalled()
    })
    it('should not run function before time has passed', () => {
        const callback = jest.fn()
        const callback2 = jest.fn()
        const arr = ["Edna", "Optimus", "Minion"] 
        arr.tiredForEach(callback, 200)
        arr.tiredForEach(callback2, 200)
        expect(callback2).not.toHaveBeenCalled()
    })
    it('should work again once time has passed', () => {
        const callback = jest.fn()
        const arr = ["Edna", "Optimus", "Minion"] 
        arr.tiredForEach(callback, 200)
        jest.advanceTimersByTime(200)
        arr.tiredForEach(callback, 200)
        expect(callback).toHaveBeenCalledTimes(6)
    })
})