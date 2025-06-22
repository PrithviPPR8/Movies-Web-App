import React from 'react'

// Helper to convert month number to name
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const ReleaseDate = ({ value }) => {
  if (!value || typeof value !== "string" || !value.includes("-")) {
    return <span className="text-red-400">Invalid date</span>;
  }

  const [year, month, day] = value.split("-");
  const monthName = monthNames[parseInt(month, 10) - 1];

  return (
    <div>
      <p className="font-dm-sans text-[#FFFFFF] mt-2 text-2xl font-semibold">{`${monthName} ${parseInt(day, 10)}, ${year}`}</p>
    </div>
  );
}

export default ReleaseDate