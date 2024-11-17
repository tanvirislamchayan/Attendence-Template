
# POLYTECHNINC ATTENDANCE MANAGEMENT SYSTEM TEMPLATE

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Sections Overview](#sections-overview)
  - [Dashboard](#dashboard)
  - [Authors](#authors)
  - [Teachers](#teachers)
  - [Departments, Probidhans, Seassons, Semesters, Group/Shift, Subjects](#departments-probidhans-seassons-semesters-groupshift-subjects)
  - [Students](#students)
  - [Attendance](#attendance)
  - [Attendance Calculation](#attendance-calculation)
- [User Roles and Access Control](#user-roles-and-access-control)
- [Setup Instructions](#setup-instructions)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Introduction

The Polytechnic Attendance Management System is a web-based application designed to streamline attendance tracking and percentage calculations for polytechnic institutes. The system provides distinct functionalities for administrators (authors) and teachers, ensuring secure and efficient attendance management. 

---

## Features

- **Dashboard**: Provides a summary with shortcuts to various sections.
- **Role-Based Access Control**: 
  - Authors have full administrative privileges.
  - Teachers can manage attendance but cannot create or delete critical data.
- **Student Management**:
  - Create single or bulk student records using forms or Excel files.
  - Advanced search functionality for student details.
- **Attendance Tracking**:
  - Track attendance at the department, semester, group/shift, and subject levels.
- **Attendance Calculation**:
  - Calculate attendance percentages date-wise, month-wise, or semester-wise.
- **Security**: Authentication required for access to any section.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Currently not available
- **Database**: Currently not available
- **Libraries**: Fundamental JavaScript for interactivity, Bootstrap for CSS Framework

---

## Sections Overview

### Dashboard
The central hub where users can view summaries, navigate sections, and access shortcuts to critical features.

### Authors
- Manage all core data (teachers, departments, seasons, semesters, groups, shifts, subjects).
- Only authors can create, delete, or modify records in these sections.
- View all authors and teachers with a count of each.

### Teachers
- Teachers are limited to attendance management functionalities.
- A dedicated view for teachers to create and manage attendance records.

### Departments, Probidhans, Seassons, Semesters, Group/Shift, Subjects
- Basic management views for adding, updating, or deleting relevant data.
- Changable by authors only. Teachers can view only.

### Students
- Search students by name, ID, or other filters.
- Add multiple students at once via Excel uploads or individually using a form.

### Attendance
- Teachers can create attendance records for students.
- Attendance is linked to departments, semesters, groups/shifts, subjects and most important **Date**.

### Attendance Calculation
- **Date-wise**: Select department, semester, and date to calculate percentages.
- **Month-wise**: Select department, semester, and month to calculate percentages.
- **Semester-wise**: Select department, semester, and a range of months to calculate percentages.



- **Extra Feature**: Exportable Excel Sheet

*GO TO `SCREEN SHOTS` FOLDER TO VIEW IMAGES*

---

## User Roles and Access Control

1. **Authors**:
   - Full access to all sections.
   - Ability to add, update, delete data across the system.
   - View and manage other authors and teachers.
2. **Teachers**:
   - Limited to attendance creation and calculation.
   - Cannot modify core data or manage other users.
3. **General Access Rules**:
   - Non-logged-in users cannot access the system.
   - Unauthorized users attempting to access restricted sections will be redirected.

---

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/tanvirislamchayan/Attendence-Template.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Attendence-Template-main
   ```
3. Open the `index.html` file in your browser to launch the application.

---

## Future Enhancements

- Implement a backend for persistent data storage (e.g., Django or Flask).
- Add a reporting feature to export attendance summaries.
- Enhance user interface with modern frameworks like React or Vue.js.
- Integrate role-based dashboards for better usability.

---

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes.

---
Designed and developed by [Tanvir Islam](https://www.facebook.com/titanvir01)

---
