import { Table } from '@mantine/core';
import { calculate1x2 } from './calculate1x2';
import { Home, Away } from './clubResults';
import { goals } from './allMatchesPush';

export function TableApp(){
    return(
    <Table captionSide="bottom" className="myScript">
    <caption>Moja aplikacja</caption>
    <thead>
    <tr>
      <td>Dokładny wynik</td>
      <td>Gospodarze</td>
      <td>Remis</td>
      <td>Goście</td>
    </tr>
    </thead>
    <tbody>{calculate1x2(Math.round(Home/(Home+Away)*100),Math.round(Away/(Home+Away)*100), goals)}</tbody>
</Table>)
}
export default TableApp