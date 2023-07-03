import styled from '@emotion/styled';

export const Table = styled.table`
  margin-bottom: 10px;

  width: 100%;

  border-collapse: collapse;

  text-align: center;

  & tbody tr:nth-of-type(even) {
    background-color: rgb(240, 248, 255);
  }
`;

export const TableRow = styled.tr`
  height: 50px;

  border-bottom: 1px solid #dddddd;
`;

export const TableHeader = styled.th`
  padding: 10px;

  color: white;

  background-color: rgb(176, 196, 222);
`;

export const TableData = styled.td`
  padding: 10px;
`;

export const TableActionsCell = styled(TableData)`
  width: 60px;
`;
