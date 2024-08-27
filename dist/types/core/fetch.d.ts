export type OnFetchError = {
    url: string;
    status: number;
    statusText: string;
    method: 'POST' | 'GET';
    body: any;
    elapsedTime: number;
};
export type OnBeforeProps = {
    url: string;
    method: 'POST' | 'GET';
    options?: RequestInit;
};
export type InterceptFetchType = {
    pagePath: string;
    onError: (error: OnFetchError) => void;
    onBefore?: (props: OnBeforeProps) => void;
    onAfter?: (result: any) => void;
};
declare const interceptFetch: ({ pagePath, onError, onBefore, onAfter }: InterceptFetchType) => (...args: any) => Promise<any>;
export default interceptFetch;
