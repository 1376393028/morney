type RecordItem = {
  tags: string[],
  remarks: string,
  type: string
  amount: number
  createdATt?: String
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

