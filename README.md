# Mentor-Student Management System

## Project Overview

This project is a Mentor-Student Management System built using Node.js, Express, and MongoDB. It allows you to manage mentors and students, assign students to mentors, and track mentor-student relationships.

## Features

- Create mentors and students
- Assign students to mentors
- Change a student's mentor
- Retrieve students for a specific mentor
- Get the previous mentor of a student
- List students who do not have a mentor

## Technology Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **ODM**: Mongoose

## Test Endpoints in Postman

**1. Create Mentors:**

**POST** http://localhost:3000/api/mentors

**2. Create Students:**

**POST** http://localhost:3000/api/students

**3. Assign Students to Mentor:**

**POST** http://localhost:3000/api/mentors/1/assign-students

**4. Change Mentor for a Student:**

**POST** http://localhost:3000/api/students/1/change-mentor

**5. Get Students for a Mentor:**

**GET** http://localhost:3000/api/mentors/1/students

**6. Get Previous Mentor for a Student:**

**GET** http://localhost:3000/api/students/1/previous-mentor

**7. Get All Students Excluding Those With a Mentor:**

**GET** http://localhost:3000/api/students
