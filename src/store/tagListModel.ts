

const tagStore = {
    
    
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
  
    
    
    
}
tagStore.fetchTags();
export default tagStore;