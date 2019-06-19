findMissingBinaries(given ArrayList of Binary values){
    findMissingByColumn(given ArrayList, L-1);
    return Missing;
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
    if (size of OnesIndices > size of ZeroesIndices) 
    {
        add 0 + findMissingByColumn(ZeroesIndices, column - 1) to Missing
    } 
    else if (size of OnesIndices < size of ZeroesIndices)
    {
        add 1 + findMissingByColumn(OnesIndices, column - 1) to Missing
    }
    else{
        add 0 + findMissingByColumn(ZeroesIndices, column - 1) to Missing
        add 1 + findMissingByColumn(OnesIndices, column - 1) to Missing
    }
}





