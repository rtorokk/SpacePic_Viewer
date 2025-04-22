import React from 'react';

function DatePicker({ date, onChange }) {
  const handleDateChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="date-picker">Select a date: </label>
      <input
        id="date-picker"
        type="date"
        value={date}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DatePicker;