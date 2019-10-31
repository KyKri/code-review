export interface IAlgorithm {
    name: string;
    description: string;
    runtimeComplexities: {
        best: string,
        average: string,
        worst: string
    };
    spaceComplexity: string;
}
