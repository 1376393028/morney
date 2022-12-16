const localStorageName = 'tagList';
type tagListModule = {
    data: string[]
    fetch: () => string[]
    create: (name: string) => boolean
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
        if(this.data.indexOf(name) >= 0) {
            return false;
         }
        this.data.push(name);
        this.save();
        return true;
    }
}

export default  tagListModule; 