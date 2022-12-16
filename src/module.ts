const localStorageName = 'recordList';
const module = {
    fetch() {
        return JSON.parse(localStorage.getItem(localStorageName) || '[]') as RecordItem[];
    },
    save(data: RecordItem[]) {
        localStorage.setItem(localStorageName, JSON.stringify(data));
    },
    clone(data: RecordItem[]|RecordItem) {
        return JSON.parse(JSON.stringify(data));
    }
}

export default  module; 