# Netflix Clone
It is MERN stack Netflix App Clone Project 

It uses following technologies such as:

- React
- Node.js
- MongoDB 

With main technologies using  different sub technologies such as:
Context API, JWT and React hooks

## Client Side Screenshots

### Registration Page: 
![Screenshot (1923)](https://user-images.githubusercontent.com/79634532/181877674-9af3e317-42a1-4ca0-96cf-c418f8160661.png)

### Login Page: 
![Screenshot (1922)](https://user-images.githubusercontent.com/79634532/181877773-8ca25941-e003-42a7-b2d8-6c1a28be442b.png)
<br>

### Home Page: 
- It consists of options such as Series, Movies and Logout
- The randomly generated movie or series on the top of Home Page.

![Screenshot (1871)](https://user-images.githubusercontent.com/79634532/181877879-4cd15794-cf05-40fe-b5ab-32236583f5df.png)

### Log out: 
- When we click on log out options it will redirected to the log in page.

![Screenshot (1877)](https://user-images.githubusercontent.com/79634532/181878124-e04cfc91-2ffc-49ac-9331-16e0bb255b63.png)

### Movies Page: 
![Screenshot (1880)](https://user-images.githubusercontent.com/79634532/181878218-664d1ece-41a3-41d2-a3e9-53389bb6d84f.png)

### Series Page: 
![Screenshot (1924)](https://user-images.githubusercontent.com/79634532/181878276-9125338f-122a-4415-8c9f-8c388e7858ea.png)

### Trailer of the movie or series: 
![trailer](https://user-images.githubusercontent.com/70846234/179347424-b14c43ec-fe6c-4744-bca1-7de4166dce37.png)

### Movie or Series: 
![actual move play ](https://user-images.githubusercontent.com/70846234/179347426-8c2b7275-b811-4bf4-ac1d-8cadea4f5954.png)

### Default Watch Page: 
![watch page](https://user-images.githubusercontent.com/70846234/179347427-c55153ae-1b2b-4b24-ac63-4bab431774bf.png)


# Backend Screenshots: 

## 1. REST API

- create (post method)
- upadate (put method)
- delete (del method)
- get (GET method)
- get all (GET method)

ALL REST API structure is JSON(KEY-VALUE Pair)

### CRUD Operations of User: 
- Creating, updating and deleting user
- Get all users.

![registre](https://user-images.githubusercontent.com/70846234/179347893-e3cf34ff-9830-444e-992c-7ecfc0e55462.png)
![update](https://user-images.githubusercontent.com/70846234/179347906-f83660a0-0eda-439a-a49f-3e8ae7d3b12f.png)
![delete](https://user-images.githubusercontent.com/70846234/179347908-5067daec-4056-4114-8dad-26b5a73a4da2.png)
![login](https://user-images.githubusercontent.com/70846234/179347910-fe444501-46b9-4c5a-a5b6-50eab04fc1fd.png)


### CRUD operations of movies and series: 
- Creating, updating and deleting movie or series
- Get all movies or series.

![create moive](https://user-images.githubusercontent.com/70846234/179348938-200e4d71-2afe-4169-a7cd-1b5d189d333e.png)

### CRUD operation of list of movies or series: 
- Creating, updating and deleting list of movies or series
- Get all lists movies or series.

![lists](https://user-images.githubusercontent.com/70846234/179348969-e054861d-bfa6-4883-9101-fea924416dfd.png)


## 2. MongoDB Database:

- Created database named as netflix.
- It consists of 3 different collections.

  1. users
  2. movies
  3. lists
  
- In user collection there is one admin which can perform CRUD operations on users, movies and lists

![Screenshot (1925)](https://user-images.githubusercontent.com/79634532/181878805-745ba237-1aef-4eac-993b-06d823494ea2.png)
![Screenshot (1929)](https://user-images.githubusercontent.com/79634532/181879030-14135f0a-d5f2-420e-9627-7ae3612104ae.png)

### 1. Users Collection: 

![Screenshot (1926)](https://user-images.githubusercontent.com/79634532/181878898-fdbbe24e-12b3-4a78-8430-cf852cff35e8.png)

### 2. Movies Collection: 

![Screenshot (1927)](https://user-images.githubusercontent.com/79634532/181878900-d8d5d612-835d-4344-9c3c-63ab39da525e.png)

### 3. Lists Collection: 

![Screenshot (1928)](https://user-images.githubusercontent.com/79634532/181878904-930b777b-f098-4110-8727-37f3f6dc9e24.png)


# Admin Site

## 1. For user: 
### All users:  
![Screenshot (1894)](https://user-images.githubusercontent.com/79634532/181882568-16a4c402-4a43-40e4-9b77-7d55f42077f2.png)
<br>

### Create User:
![Screenshot (1911)](https://user-images.githubusercontent.com/79634532/181883092-9b446957-c04d-42bc-b729-e3da41a88b35.png)
<br>

### Update User: 
![Screenshot (1910)](https://user-images.githubusercontent.com/79634532/181883547-d08464fe-48df-4ac6-a30c-2f6f2715af7c.png)
<br>

### User Stats:
![Screenshot (1930)](https://user-images.githubusercontent.com/79634532/181893576-d3145f68-9c3d-4207-9600-a5e90790f073.png)
![Screenshot (1931)](https://user-images.githubusercontent.com/79634532/181893629-8237eac8-667f-4fba-bc1f-1919bbb8774d.png)

<br>

## 2. For  movies:

### All movies and series:
![Screenshot (1895)](https://user-images.githubusercontent.com/79634532/181888578-0f68ce66-ab6e-4f6f-a3a7-d78c245df1d5.png)

### Create movie or series:

![Screenshot (1903)](https://user-images.githubusercontent.com/79634532/181887351-d5889aad-90c6-426e-aa41-f7793a4f957f.png)
![Screenshot (1904)](https://user-images.githubusercontent.com/79634532/181887379-dc3b53ac-b6d3-41e1-814d-4262922d7e36.png)

### Update movie or series:

![Screenshot (1901)](https://user-images.githubusercontent.com/79634532/181887952-781d34a1-1488-4036-a0f4-d5e62d623c78.png)


## 3. For movie or series list:
### All lists:

![Screenshot (1896)](https://user-images.githubusercontent.com/79634532/181889504-7ee90929-58ab-470e-b48d-5afc1e2314d7.png)

### Create List:

![Screenshot (1898)](https://user-images.githubusercontent.com/79634532/181889940-d34368c3-2517-4fd1-98b3-96ab14a2ed15.png)


# Firebase:

![Screenshot (1932)](https://user-images.githubusercontent.com/79634532/181892604-c0b78a14-12e5-4f30-a2e1-c7d693c7348d.png)


