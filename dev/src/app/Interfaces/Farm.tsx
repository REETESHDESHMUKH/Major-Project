export default interface Farm {
    farmAddress: string,
    cropType: string,
    creater: string,
    location: string,
    description: string,
    securityAmount: number,
    fundRaised: number,
    documents: string[],
    Requests: number[],
    contributors: string[],
    investments: Map<string,number>,
}