List of possbile answers
findMissingBinary(given ArrayList of Binary values){
    findMissingByColumn(given ArrayList, L-1);
    return element that has proper length L in list;
}
findMissingByColumn(ArrayList input, column){
    if (column < 0) {
        return 0;
    }
    list count of zeroesIndicies = index of all elements in A with a 0 at the location L
    list count of onesIndicies = index of all elements in A with a 1 at the location L
    for (every element in input) {
        if (fetchbit(current_element, column) == 0) {
            add current_element to OnesIndices
        } else {
            add current_element to ZeroesIndices
        }
    }
    add to list of possible answers 0 + find missing( list of zeroes);
    add to list of possible answers 1 + find missing(list of ones);
}





