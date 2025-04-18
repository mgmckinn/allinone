# Saturday Schedule Generator

This is a simple web-based application for generating, submitting, and tracking Saturday work schedules for two teams: **River Rd.** and **Noble Creek**. It ensures fairness by preventing the same person from being scheduled two weeks in a row.

## Features

- **Schedule Generator**: Randomly selects 1 manager and 3 bankers.
- **No Repeat Logic**: Prevents the same people from working consecutive Saturdays.
- **Submit Schedule**: Only submitted schedules are saved.
- **Clear Schedule**: Allows users to discard a generated schedule.
- **History Page**: Displays a running log of all submitted schedules.
- **Tracker Page**: Counts how many times each individual has worked.
- **Reset Tracker**: Resets the tracking history to start fresh.
- **Modern UI**: Clean, responsive design with a sleek blue-and-gold theme.

## Team Members

**Managers**:


**Bankers**:


## Pages

### 1. `index.html`
- Main page to generate, submit, or clear schedules.

### 2. `tracker.html`
- Displays how many times each person has worked.
- Includes a reset button.

### 3. `history.html`
- Lists all submitted (accepted) schedules.

## How It Works

1. Click **Generate Schedule** to create a new schedule.
2. If it looks good, click **Submit Schedule** to save it.
3. If not, click **Clear Schedule** to discard it.
4. Use the **View History** button to check the log.

## Technologies Used

- **HTML5** & **CSS3**: Layout and styling.
- **JavaScript (Vanilla)**: Logic for generation, submission, tracking.
- **LocalStorage**: Stores submitted schedules and tracker data client-side.

## Notes

- No server or database needed — all data is saved locally.
- For fairness, staff are rotated and cannot work back-to-back weeks.

---

For improvements or deployment, this project can easily be extended with:
- Authentication & user roles
- Server-side database for persistent history
- Export to CSV or PDF
- Scheduling for multiple days

---

Made with 💼 and 💙 for Saturday teamwork!
