function updateClockCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"][now.getDay()];
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockCalendarElement = document.getElementById('clock-calendar');
    clockCalendarElement.innerHTML = `
      <p class="calender">${year}/${month}/${day} (${dayOfWeek})</p>
      <p class="time">${hours}:${minutes}:${seconds}</p>
    `;
}
  
setInterval(updateClockCalendar, 1000); // Update every 1 second
updateClockCalendar(); // Initial call to avoid delay

const colorButtons = document.querySelectorAll('.colorButton');
colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = getComputedStyle(button).backgroundColor;
    });
});
    
function changeFont(font) {
    document.body.style.fontFamily = font;
}
