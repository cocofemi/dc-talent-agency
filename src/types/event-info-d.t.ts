export interface IEventInfo {
    artist: string;
    location: string;
    venue: string;
    capacity: number;
    date: string;
    currency: string;
}

export interface ITicketInfo {
    tickets: TicketInfo[];
}

export interface TicketInfo {
    name: string;
    price: string;
    quantity: string;
    ref: React.RefObject<HTMLDivElement>;
}