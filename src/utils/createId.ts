let lastId = localStorage.getItem('tagId') || '0';
function createId() {
    lastId = (parseInt(lastId) + 1).toString()
    localStorage.setItem('tagId', lastId);
    return lastId;
}

export default createId;