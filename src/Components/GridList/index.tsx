import { GridListProps } from './type';

const GridList = ({ data }: GridListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mail Received Date</th>
          <th>Solution Sent Date</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: item.isBackgroundColorRed ? 'red' : 'white',
            }}
          >
            <td>{item.name}</td>
            <td>{item.mailReceivedDate}</td>
            <td>{item.solutionSentDate || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GridList;
