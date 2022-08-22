export const setLocalStorageItem = (key: string, value: any) => {
    localStorage.setItem(key, value);
}

export const getLocalStorageItem = (key: string) => {
    localStorage.getItem(key);
}