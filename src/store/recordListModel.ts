import clone from "@/utils/clone";

let data: RecordItem[] | undefined = undefined;
const localStorageName = 'recordList';

const recordStore = {
    // record store
    recordList: data,
    fetchRecords() {
        data = JSON.parse(localStorage.getItem(localStorageName) || '[]') as RecordItem[];
        return data;
    },
    createRecord(record: RecordItem) {
        const record2: RecordItem = clone(record);
        record2.createdATt = new Date();
        data && data.push(record2);
        recordStore.saveRecord();
    },
    saveRecord() {
        localStorage.setItem(localStorageName, JSON.stringify(data));
    }
}
recordStore.fetchRecords();
export default recordStore;