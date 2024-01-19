# Image Uploader
This is a simple image uploader API. It uses cloudinary as a storage for the images and saves the secure and unique image URL to mongoDB database.
## Table of Contents
- [Image Uploader](#image-uploader)
  - [Table of Contents](#table-of-contents)
  - [General Info](#general-info)
  - [Documentation](#documentation)
  - [Prerequisites](#prerequisites)
  - [Modules and Dependencies](#modules-and-dependencies)
  - [Setup](#setup)
  - [Usage](#usage)
    - [Deployed](#deployed)

## General Info

A simple API built with expressjs, mongoDB and cloudinary to save, store and retrieve images.

## Documentation
Click [this]() link to view a detailed documentation of this resource.

## Prerequisites

To run this API locally or following through the implementation, [Node.js](nodejs.org/en) runtime environment is required, most preferably, the long term support (LTS) version and mongoDB also.

## Modules and Dependencies

The node modules used for this API are

- Express
- Mongoose
- Cloudinary
  with their versions shown in the package.json file.

## Setup

To run this project (i.e. locally), mongodb should be available on your machine or use mongodb Atlas

- Clone the repo:

```
git clone https://github.com/VictorChukwudi/image-uploader-task.git
```

- Open the folder and run the command to install the dependencies:

```
npm install
```
- Go [Cloudinary](https://cloudinary.com/) to sign up or login to get your unique cloud_name, api_key and api_secret
  
- Create a .env file in the root and add code below to the file

```
dbURI= <mongodb_connection_string>
PORT= 2000
CLOUD_NAME=<cloudinary_cloud_name>
API_KEY=<cloudinary_api_key>
API_SECRET=<cloudinary_api_secret>
```

- Next, run the command below to start the server

```
npm run dev
```

## Usage

The Image Uploader API has the routes(endpoints) available for the api usage:

- **POST** /upload : to upload an image.
- **GET** /get_image/id : to retrieve an immage using the image id.


The routes are appended to the base URL with is

- for local

```
http://localhost:2000
```

- for deployed

```
https://image-uploader-x4uk.onrender.com
```

### Deployed

To use the deployed version of the API, the base URL is https://image-uploader-x4uk.onrender.com (with the routes attached for any of the operations)
