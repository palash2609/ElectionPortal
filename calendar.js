// Function to create a calendar for a specific year
function createCalendar(year) {
    const calendarElement = document.querySelector('.calendar');

    // Define important dates for Lok Sabha elections in phases
    const lokSabhaDates = [
        { month: 3, day: 19, phase: "Phase 1" },
        { month: 3, day: 26, phase: "Phase 2" },
        { month: 4, day: 7, phase: "Phase 3" },
        { month: 4, day: 13, phase: "Phase 4" },
        { month: 4, day: 20, phase: "Phase 5" },
        { month: 4, day: 25, phase: "Phase 6" },
        { month: 5, day: 1, phase: "Phase 7" },

        // Add more phases as needed
    ];

    // Loop through each month
    for (let month = 0; month < 12; month++) {
        const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
        const monthElement = document.createElement('div');
        monthElement.classList.add('month');
        monthElement.innerHTML = `<div class="month-name">${monthName}</div>`;
        
        const daysElement = document.createElement('div');
        daysElement.classList.add('days');

        // Get the first day of the month
        const firstDayOfMonth = new Date(year, month, 1).getDay();

        // Get the number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day', 'empty');
            daysElement.appendChild(emptyDay);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = day;

            // Highlight important dates for Lok Sabha elections
            lokSabhaDates.forEach(date => {
                if (month === date.month && day === date.day) {
                    dayElement.classList.add('highlight');
                    dayElement.setAttribute('title', `Lok Sabha Election - ${date.phase}`);
                }
            });

            dayElement.addEventListener('click', function() {
                const title = dayElement.getAttribute('title');
                if (title) {
                    displayEventInfo(title, dayElement);
                }
            });

            daysElement.appendChild(dayElement);
        }

        monthElement.appendChild(daysElement);
        calendarElement.querySelector('.months').appendChild(monthElement);
    }
}

// Function to display event information
function displayEventInfo(eventInfo, clickedDay) {
    // Remove any existing event info elements
    const existingEventInfo = document.querySelector('.event-info');
    if (existingEventInfo) {
        existingEventInfo.remove();
    }

    // Create and position the event info element
    const eventInfoElement = document.createElement('div');
    eventInfoElement.classList.add('event-info');
    eventInfoElement.innerHTML = `<p>${eventInfo}</p>`;

    // Position the event info element relative to the clicked day
    const dayRect = clickedDay.getBoundingClientRect();
    eventInfoElement.style.top = `${dayRect.top + window.scrollY}px`;
    eventInfoElement.style.left = `${dayRect.right + window.scrollX}px`;

    // Append the event info element to the body
    document.body.appendChild(eventInfoElement);
}

// Call the createCalendar function with the year 2024
createCalendar(2024);
