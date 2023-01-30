export function setLocalData<T>(key: string, fallbackValue: T) {
    const value = fallbackValue;
    typeof window !== 'undefined' ? localStorage.setItem(key, JSON.stringify(value)): "";
}

export function getLocalData(key: string) {
    if (typeof window !== 'undefined') return localStorage.getItem(key);

    return null;
}