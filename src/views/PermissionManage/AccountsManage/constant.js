export const accountColumns = [
  { width: 200, title: 'Column 1', dataIndex: 'address', key: '1', ellipsis: true },
  { width: 200, title: 'Column 2', dataIndex: 'address', key: '2' },
  { width: 200, title: 'Column 3', dataIndex: 'address', key: '3' },
  { width: 200, title: 'Column 4', dataIndex: 'address', key: '4' },
  { width: 200, title: 'Column 5', dataIndex: 'address', key: '5' },
  { width: 200, title: 'Column 6', dataIndex: 'address', key: '6' },
  { width: 200, title: 'Column 7', dataIndex: 'address', key: '7' },
  { width: 200, title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    width: 200,
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    scopedSlots: { customRender: 'action' }
  }
]
