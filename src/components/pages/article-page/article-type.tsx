
type Keywords = {
    major: string,
    name: string,
    rank: number,
    value: string
}


export type Article = {
    id: string,
    headline: string,
    abstract: string, 
    keywords: Keywords[],
    section: string,
    snippet: string,
    pub_date: string,
    source: string,
    web_url: string
}