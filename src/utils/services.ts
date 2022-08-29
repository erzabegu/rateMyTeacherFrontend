export const setLocalStorageItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorageItem = (key: string) => {
    const item = localStorage.getItem(key)
    return item && JSON.parse(item)
}