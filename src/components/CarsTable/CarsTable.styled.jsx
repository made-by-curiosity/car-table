import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;

  margin-bottom: 10px;

  border-collapse: collapse;

  text-align: center;

  & tbody tr:nth-of-type(even) {
    background-color: ${props => props.theme.colors.tableSecondaryColor};
  }
`;

export const TableRow = styled.tr`
  height: 50px;

  border-bottom: ${props => props.theme.borders.tableRow};
`;

export const TableHeader = styled.th`
  padding: 10px;

  color: ${props => props.theme.colors.secondary};

  background-color: ${props => props.theme.colors.tableHead};
`;

export const TableData = styled.td`
  padding: 10px;
`;

export const TableActionsCell = styled(TableData)`
  width: 60px;
`;
