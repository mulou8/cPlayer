export declare type AddEventListener = (type: string, listener: (event: Event) => void, options?: AddEventListenerOptions) => void;
export interface cList {
    name: string;
    artist: string;
    image: string;
    url?: string;
    loop?: boolean;
    lyric?: string;
    transLyric?: string;
}
export interface cOption {
    element: HTMLElement;
    list?: cList[];
    autoplay?: boolean;
}
export interface __LYRIC__ {
    [index: number]: {
        "content": string;
        "time": number;
    };
    now?: number;
    length: number;
}
