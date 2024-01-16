export default interface Challenge {
    creater: string,
    officerInCharge: string,
    description: string,
    proof: string,
    complaintAddress: string,
    yesVotes: number,
    noVotes: number,
    deadline: number,
    status: string,
    comments: string
}