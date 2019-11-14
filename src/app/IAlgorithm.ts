export interface IAlgorithm {
    _id: string;
    name: string;
    description: string;
    runtimeComplexities: {
        best: string,
        average: string,
        worst: string
    };
    spaceComplexity: string;
}
