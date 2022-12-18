type RecordItem = {
  tags: string[],
  remarks: string,
  type: string
  amount: number
  createdATt?: Date
};

type Tag = {
  id: string,
  name: string
}
type tagListModule = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => 'success' | 'duplicated' // success成功 duplicated 表示name重复
  save: () => void
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not fount'
  remove: (id: string) => boolean
}

interface Window {
  tagList: Tag[]
}