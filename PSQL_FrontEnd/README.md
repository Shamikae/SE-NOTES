# PSQL Practice
### Creating my own DB and utilizing DB to populate a web page

## TASKS:
* Create DB (students)
* Create Table (students)
* Add a few items (students)
* Write a selector to retrieve info
* Write Javascript utilizing the selector to log the info
* Write Javascript tp display info on we page
* Stretch Goal: CRUD?

## NOTES:
CREATE TABLE students(
    ID SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    image VARCHAR,
    email VARCHAR,
    major VARCHAR,
    gpa INTEGER   
);

Add data: 
INSERT INTO 
    students(first_name, last_name, image, email, major, gpa)
VALUES
    ('Malia', 'Obama', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1ydAMx-WmCrPkVCa7RFjg56NGHudDL6a3LQ&usqp=CAU', 'Malia.O@sharvard.com', 'Visual', 4),
    ('Yara', 'Shahidi', 'https://akns-images.eonline.com/eol_images/Entire_Site/201757/rs_600x600-170607071548-600.Yara-Shahidi.jpg?fit=around|600:auto&output-quality=90&crop=600:auto;center,top', 'Yara.S@sharvard.com', 'Sociology', 3),
    ('Rashida', 'Jones', 'https://vignette.wikia.nocookie.net/the-time-crisis-universe/images/7/73/RashidaJonespic1.jpg/revision/latest/scale-to-width-down/340?cb=20181227061210', 'Rashida.J@sharvard.com', 'Philosophy', 4),
    ('Hilary', 'Duff', 'https://uproxx.com/wp-content/uploads/2018/09/hilary-duff.jpg?w=650', 'Hilary.D@sharvard.com', 'Science', 3);

Update data: UPDATE students SET email = 'Hilary.d@sharvard.com' WHERE id = 4;




## Repeat instructions:
* Download PSQL
* Log into PSQL (via CLI: psql -U (username) ) our usernames are 'postgres'
* CREATE DATABASE (dbname); (students)
* connect to db
* CREATE TABLE (tableName); (students)
* Insert a few items into the table
* Install 
*
