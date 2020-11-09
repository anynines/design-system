import React from 'react'
import { Row, TableBodyProps } from 'react-table'

import { TableRow, TableAccessor, TableColumnCell, TableColumnCellColor, TableColumnIcon } from './Table'
import SortableTableRow from './SortableTableRow'

interface SortableTableBodyProps {
  rows: [string, Row<TableRow>[]]
  index: number
  prepareRow: (row: Row<TableRow>) => void
  tableBodyProps: TableBodyProps
  getTableColumnColor: (type: TableAccessor | null) => TableColumnCellColor | null
  getTableColumnType: (type: TableAccessor | null) => TableColumnCell | null
  getTableColumnIconType: (type: TableAccessor | null) => TableColumnIcon | null
}

const SortableTableBody = ({
  rows, index, prepareRow, tableBodyProps, getTableColumnColor, getTableColumnType, getTableColumnIconType
}: SortableTableBodyProps): JSX.Element | null => {
  if (rows && rows[1].length) {
    return (
      <tbody {...tableBodyProps}>
        <SortableTableRow
          key='-1'
          type='category'
          getTableColumnColor={getTableColumnColor}
          getTableColumnType={getTableColumnType}
          getTableColumnIconType={getTableColumnIconType}
          category={rows[0]}
          rowIndex={-1}
          bodyIndex={index}
        />
        {rows[1].map((row: Row<TableRow>, rowIndex: number) => {
          prepareRow(row)
          return (
            <SortableTableRow
              key={row.id}
              getTableColumnColor={getTableColumnColor}
              getTableColumnType={getTableColumnType}
              getTableColumnIconType={getTableColumnIconType}
              row={row}
              rowIndex={rowIndex}
              bodyIndex={index}
            />
          )
        })}
      </tbody>
    )
  }
  return null
}

export default SortableTableBody
