import { IAlgorithm } from './IAlgorithm';

export const algorithms: IAlgorithm[] = [
    {
        _id: '',
        name: 'Bubble Sort',
        description: `Bubble sort, sometimes referred to as sinking sort,
         is a simple sorting algorithm that repeatedly steps through the list,
         compares adjacent elements and swaps them if they are in the wrong order.`,
        runtimeComplexities: {
            best: 'O(n)',
            average: 'O(n^2)',
            worst: 'O(n^2)'
        },
        spaceComplexity: 'O(1)',
    },
    {
        _id: '',
        name: 'Mergesort',
        description: `Conceptually, a merge sort works as follows:
         1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
         2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining.
         This will be the sorted list.`,
        runtimeComplexities: {
            best: 'O(n log(n))',
            average: 'O(n log(n))',
            worst: 'O(n log(n))'
        },
        spaceComplexity: 'O(n)',
    },
    {
        _id: '',
        name: 'Quicksort',
        description: `Quicksort is a comparison sort, meaning that it can sort items of any type for which a "less-than"
         relation (formally, a total order) is defined.
         Efficient implementations of Quicksort are not a stable sort, meaning that the relative order of equal sort items is not preserved.
         Quicksort can operate in-place on an array, requiring small additional amounts of memory to perform the sorting.
         It is very similar to selection sort, except that it does not always choose worst-case partition.`,
        runtimeComplexities: {
            best: 'O(n log(n))',
            average: 'O(n log(n))',
            worst: 'O(n^2)'
        },
        spaceComplexity: 'O(log(n))',
    }
];
