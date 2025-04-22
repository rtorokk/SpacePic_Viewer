import React from 'react';

function DatePicker({ date, onChange }) {
  // Handle changes in the date input and pass the updated value to the parent
  const handleDateChange = (event) => {
    onChange(event.target.value); // Call the onChange function with the new date
  };

  return (
    <div>
      <label htmlFor="date-picker">Select a date: </label>
      {/* Input field for selecting a date */}
      <input
        id="date-picker"
        type="date"
        value={date} // Controlled input with the current date value
        onChange={handleDateChange} // Update the date when the input changes
      />
    </div>
  );
}

export default DatePicker;