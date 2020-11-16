# EventTrackerProject

## Overview

As someone who has transitioned out the military into the civilian workforce,
the challenge can be daunting if not adequately prepared. While there may be
many resources for veterans, Garrison is the place where service members of
all branches can come together to receive that helpful guide for the journey
ahead. At Garrison, service members can use basic CRUD operations to add
themselves to the database inputting pertinent information related
to their transition out of the military. Here, they can access workforce
recruiters who specialize in working with veterans to make that transition
smooth. Also, members can specify that they are interested in a particular
DOD Skill Bridge program and sign up if they choose to do so. The event to be
tracked is the service members EAOS, which is their End of Active Obligated Service.

## Login Information

Users will be able to choose their username and password to access their accounts.

## REST API Endpoints

Expected Routes
Return Type	Route	Functionality
List<Veteran>	GET api/veterans	Gets all veterans
addVeteran	POST api/veterans Creates a new veteran to the database
updateVeteran	PUT api/veterans/{id}	Updates a veterans information
deleteVeteran DELETE api/veterans/{id} Deletes the veteran from database

## Technologies Used
* Postman
* Gradle
* REST API
* CRUD
* Spring Data JPA
* EC2
* My SQL Workbench
* Git
* Github
* JUnit Testing

## Key Lessons Learned
1. Learning the systems of REST API in the beginning was challenging to understand,
but as I began to use this system more frequently, I have learned to appreciate
the value of this technology while becoming more familiar with it.

2. This is the first project I have ever had to use the technology, Postman.
Learning how to test the mappings I created was tricky, but with patience and
determination I began really enjoying the simplicity of it.

3. I had a challenge creating/adding veterans to the database initially. I did
not understand that how the function @RequestBody worked. I eventually realized
how the object I was attempting to pass needed to be called upon by this annotation
in order to be able to use its properties when attempting to map it.
