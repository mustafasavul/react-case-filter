import { useEffect, useState } from 'react';
import './App.css';
import GridList from './Components/GridList';
import DataList from './Data.json';

function App() {
  const [wrongRows, setWrongRows] = useState(0);
  const [today, setToday] = useState<string>('');
  const [limit, setLimit] = useState<string>('');

  const control = (today: Date, limit: number) => {
    const rows = document.querySelector('table')?.querySelectorAll('tbody tr');

    let wrongRow = 0;

    if (rows) {
      rows.forEach((row) => {
        const tableRow = row.querySelectorAll('td');
        const mailReceivedDate = new Date(tableRow[1].textContent || '');
        const solutionSentDate = tableRow[2].textContent
          ? new Date(tableRow[2].textContent)
          : today;

        const differenceTime = Math.abs(
          solutionSentDate.getTime() - mailReceivedDate.getTime()
        );

        const differenceDays = Math.ceil(
          differenceTime / (1000 * 60 * 60 * 24)
        );

        const isBgColorRed =
          window.getComputedStyle(row).getPropertyValue('background-color') ===
          'red';

        if (
          (differenceDays > limit && !isBgColorRed) ||
          (differenceDays <= limit && isBgColorRed)
        ) {
          wrongRow++;
        }
      });
    }

    setWrongRows(wrongRow);
  };

  useEffect(() => {
    const today = new Date('2021-10-06');
    const limit = 5;
    control(today, limit);
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    control(new Date(today), Number(limit));
  };

  return (
    <>
      <GridList data={DataList} />

      <div className="control-inputs">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Today"
            pattern="^(?:20\d{2})-(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])$"
            title="Please enter a date in the format YYYY-MM-DD"
            onChange={(e) => setToday(e.target?.value)}
            required
          />
          <input
            type="text"
            placeholder="Limit"
            pattern="^[0-9]+$"
            title="Please enter a numeric value"
            onChange={(e) => setLimit(e.target?.value)}
            required
          />

          <button className="control-button" type="submit">
            Send
          </button>
        </form>
      </div>

      <p className="wrong-row">Hatalı Satır Sayısı: {wrongRows}</p>
    </>
  );
}

export default App;
