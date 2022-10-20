/**
 * @param {number[]} stones
 * @return {number}
 */

 class MaxHeap {
    constructor() {
        this.storage = [];
        return this;
    }

    getChildIndex = (startIndex) => {
        if (this.storage[startIndex * 2 + 1] == Math.max(this.storage[startIndex * 2 + 2], this.storage[startIndex * 2 + 1]))
            return startIndex * 2 + 1;
        return startIndex * 2 + 2;
    }

    getParentIndex = (index) => {
        return Math.floor(index / 2);
    }
    
    insert(value) {
        this.storage.push(value);
        let index = this.storage.length - 1;
        let parentIndex = this.getParentIndex(index);
        while (this.storage[index] > this.storage[parentIndex]) {
            [this.storage[index], this.storage[parentIndex]] = [this.storage[parentIndex], this.storage[index]];
            index = parentIndex;
            parentIndex = this.getParentIndex(index);
        }
    }
    
    getMax() {
        return this.storage[1];
    }
    
    extractMax = () => {
        [this.storage[1], this.storage[this.storage.length - 1]] = [this.storage[this.storage.length - 1], this.storage[1]];
        let maxValue = this.storage.pop();
        let startIndex = 1;
        let childIndex = this.getChildIndex(startIndex);
        while(this.storage[startIndex] < this.storage[childIndex]) {
            [this.storage[startIndex], this.storage[childIndex]] = [this.storage[childIndex], this.storage[startIndex]];
            startIndex = childIndex;
            childIndex = this.getChildIndex(startIndex);
        }
        return maxValue;
    }
  }
  
  
  var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap();
    for (let i = 0; i < stones.length; i++) {
        maxHeap.insert(stones[i]);
    }
    
    
    while(maxHeap.storage.length > 1) {
        let max1 = maxHeap.extractMax();
        let max2 = maxHeap.extractMax();
        let diff = max1 - max2;
        if (diff >= 0) maxHeap.insert(diff);
    }
    if (maxHeap.storage.length == 0) return 0;
    
    return maxHeap.storage[0];
  };

console.log(lastStoneWeight([285,740,94,103,144,805,517,232,571,760,586,184,660,256,863,465,322,957,18,670,516,526,853,116,353,16,408,346,521,638]));