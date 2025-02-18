export default interface Candidate {
    readonly id: number;
    readonly login: string;
    readonly name: string | null;
    readonly avatar_url: string | null;
    readonly html_url: string;
    readonly location: string | null;
    readonly company: string | null;
    readonly email: string | null;
    readonly bio: string | null;
}