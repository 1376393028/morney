const localStorageName = 'recordList';
const recordListModule = {
    data: [] as RecordItem[],
    fetch() {
        this.data = JSON.parse(localStorage.getItem(localStorageName) || '[]') as RecordItem[];
        return this.data;
    },
    save() {
        localStorage.setItem(localStorageName, JSON.stringify(this.data));
    },
    clone(data: RecordItem[]|RecordItem) {
        return JSON.parse(JSON.stringify(data));
    }
}

export default  recordListModule; 