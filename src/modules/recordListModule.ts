import clone from "@/utils/clone";
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
    },
    create(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createdATt = new Date();
        this.data.push(record2);
        this.save()
    }
}

export default  recordListModule; 