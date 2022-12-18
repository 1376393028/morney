const localStorageName = 'tagList';
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
        this.data.push({id: Date.now().toString(), name});
        this.save();
        return 'success';
    },
    update(id, name) {
        const tag = window.findTag(id);
        if(tag) {
            const names = this.data.map((item) => item.name)
            if(names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                tag.name = name;
                this.save();
                return 'success';
            }
        } else {
            return 'not fount'
        }
    },
    remove(id) {
        this.data = this.data.filter(item => item.id !== id);
        this.save();
        return true;
    }
}

export default  tagListModule; 