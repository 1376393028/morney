const localStorageName = 'tagList';
type Tag = {
    id: string,
    name: string
}
type tagListModule = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' // success成功 duplicated 表示name重复
    save: () => void
}
const tagListModule: tagListModule = {
    data: [],
    fetch() {
        this.data = JSON.parse(localStorage.getItem(localStorageName) || '[]');
        return this.data;
    },
    save() {
        localStorage.setItem(localStorageName, JSON.stringify(this.data));
    },
    create(name) {
        const names = this.data.map((item) => item.name)
        if(names.indexOf(name) >= 0) {
            return 'duplicated';
         }
        this.data.push({id: name, name});
        this.save();
        return 'success';
    }
}

export default  tagListModule; 