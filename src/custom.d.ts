type RecordItem = {
  tags: Tag[],
  remarks: string,
  type: string
  amount: number
  createdATt?: string
};

type Tag = {
  id: string,
  name: string
}

type RootState = {
  recordList: RecordItem[]
  tagList: Tag[]
  currentTag?: Tag
}

