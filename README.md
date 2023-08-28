
# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT  -->

# 📖 [Pizza ordering app] <a name="about-project"></a>

**[Pizza ordering app]** This is a serveless application implemented using the saga design pattern. ***[Saga pattern]*** is it a design or mechanism that help to maintain data consistency and integrity in a microservice or distributed application(an application with multiple databases). A seccessful saga design should have the following characteristics
 - Compensation: Ensure smooth transaction even if the transaction is successful or not
 - Decentralized control: Each saga step manages it own transactions and interactions 
 - Even-driven: Each saga step is triger by an event 
It can be implemented in two ways: 
- Choreography: Each saga step communicate with each other via event and it dont have a centralise coordinator.
- Orchestration: Communicate via a centralise cordinator called orchestrator. 

This application is implement using the orchestration method.

## 🛠 Built With <a name="built-with"></a>

### AWS services Used
- ***[DynamoDB]***: is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.
- ***[Step function]***: is a serverless orchestration service that lets you combine AWS Lambda functions and other AWS services to build business-critical applications.
- ***[Lambda function]***: is a compute service that lets you run code without provisioning or managing servers.
- ***[Api gateway]***: is a compute service that lets you run code without provisioning or managing servers.
<!-- Features -->

### Key Features <a name="key-features"></a>

- **[Order pizza base on the quantity]**
- **[Change qauntity]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How it works
 
 This application make use of two databases that is order database and product database. When a user place an order, a series of saga steps are trigger and if the quantity is more than what is in the product database, the order will be cancel and the order will be deleted from the order table and if the order is less, the order will be place and the product database updated.  

<!-- LIVE DEMO -->

## 🚀Project Demo <a name="live-demo"></a>
 ### Saga Diagram 
![Screenshot 2023-08-28 at 12 39 38](https://github.com/anyepeter/Saga-application/assets/74084998/34c90745-cff6-479d-9131-73d9f66cbbc9)

### Unsuccessful order
Here the order is not made because the user wanted 5 quantities and the product have just 3 quantities

https://github.com/anyepeter/Saga-application/assets/74084998/52ae2baa-1c65-4157-8c21-732a3309d185



### successful order
Here the order is recorded and the product table updated since the user want 4 quantities and the product has 6. product quantity update to 2 

https://github.com/anyepeter/Saga-application/assets/74084998/88214060-999f-4e12-b841-52d46d1f8374


 
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- AWS account.
- Knowladge on step function, apigatway, lambda and dynamodb.
- Nodejs
- React

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git https://github.com/anyepeter/saga-application.git
```

### Install

Install this project with:

```sh
  cd saga-application
  npm install
  npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Peter**
- GitHub: [@anyepter](https://github.com/githubhandle)
- Twitter: [@anyepeter](https://twitter.com/twitterhandle)
- LinkedIn: [peterchendi](https://linkedin.com/in/linkedinhandle)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>


- [ ] **[Add Payment system]**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/anyepeter/saga-application/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project and how we managed to build it!


<!-- ACKNOWLEDGEMENTS -->

## Implementation plan and diffcuilties

### Monday 21/08/23
 - Understand what saga pattern is all about
 - Understand how a microservice application works

 ### Tuesday 22/08/23
 - How saga pattern is implemented
 - Can it be implement in a monolithic application?
 - Best way to implement the design

 ### Wednesday 23/08/23
 - AWS services needed for to implement the system

 ### Thursday 24/08/23
 - Try to use Ruby on Rails to implement the design pattern. It was unsuccessful
 ### Friday 25/08/23
 - When to the hospital(sick)
 ### Saturday  26/08/23
 - Implement the design with AWS services 
### Sunday 27/08/23
- Implement the frontend with React

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/anyepeter/Blog-app/blob/develop/LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
