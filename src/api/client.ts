type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// All fields are optional since there are defaults
interface RequestOptions<TBody> {
    method?: HttpMethod;
    body?: TBody;
    headers?: HeadersInit;
    credentials?: RequestCredentials;
}

// TResponse: expected response from the server
// TBody: expected shape of the body (default: unknown)
// Params: endpoint and RequestOptions
export async function apiRequest<TResponse, TBody = unknown>(
    endpoint: string,
    options: RequestOptions<TBody> = {}
): Promise<TResponse> {
    const { method = 'GET', body, headers = {}, credentials = 'include' } = options; // defaults

    const response = await fetch(endpoint, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        credentials,
        body: body ? JSON.stringify(body) : undefined,
    });

    // Error handling
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    // Success
    return response.json();
}
