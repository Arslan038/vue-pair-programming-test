// Safely stringify value
export function safeStringify(value: unknown, fallback = ''): string {
    try {
        return JSON.stringify(value)
    } catch(error) {
        console.warn("JSON stringify error : ", error);
        return fallback;
    }
}

// Safely parse a JSON string
export function safeParse<T>(jsonString: string | null | undefined, fallback: T): T {
    if (!jsonString) return fallback;

    try {
        return JSON.parse(jsonString) as T;
    } catch(error) {
        console.warn(`JSON parse error for value ${jsonString}: `, error);
        return fallback;
    }
}