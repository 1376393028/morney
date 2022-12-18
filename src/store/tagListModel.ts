
const localStorageName = 'tagList';

const tagStore = {
    tagList: [] as Tag[],
    fetchTags() {
      this.tagList = JSON.parse(localStorage.getItem(localStorageName) || '[]');
      return this.tagList;
    },
    saveTags() {
      localStorage.setItem(localStorageName, JSON.stringify(this.tagList));
    },
    removeTag(id: string) {
      this.tagList = this.tagList.filter(item => item.id !== id);
      this.saveTags();
      alert('删除成功');
      return true;
    },
  
    updateTag(id: string, name: string) {
      const tag = this.findTag(id);
        if(tag) {
            const names = this.tagList.map((item) => item.name)
            if(names.indexOf(name) >= 0) {
                return 'duplicated';
            } else {
                tag.name = name;
                this.saveTags();
                return 'success';
            }
        } else {
            return 'not fount'
        }
    },
  
    findTag(id: string) {
      return this.tagList.filter(item => item.id === id)[0]
    },
    createTag(name: string) {
      const names = this.tagList.map((item) => item.name)
        if(names.indexOf(name) >= 0) {
          alert('创建的标签已存在');
          return
         }
        this.tagList.push({id: Date.now().toString(), name});
        this.saveTags();
        alert('创建成功');
    }
    
}
tagStore.fetchTags();
export default tagStore;