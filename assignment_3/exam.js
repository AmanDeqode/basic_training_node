const d = [
    {
      name: 'A',
      technologies: [
        {
          name: 'JAVA',
          experience: 2,
        },
        {
          name: 'Javascript',
          experience: 5,
        },
        {
          name: 'TypeScript',
          experience: 2,
        },
        {
          name: 'NodeJs',
          experience: 5,
        },
        {
          name: 'NestJs',
          experience: 2,
        },
        {
          name: 'TypeORM',
          experience: 5,
        },
      ],
    },
    {
      name: 'B',
      technologies: [
        {
          name: 'JAVA',
          experience: 2,
        },
        {
          name: 'Javascript',
          experience: 5,
        },
        {
          name: 'TypeScript',
          experience: 2,
        },
        {
          name: 'NodeJs',
          experience: 5,
        },
        {
          name: 'Scala',
          experience: 2,
        },
        {
          name: 'Python',
          experience: 5,
        },
      ],
    },
    {
      name: 'C',
      technologies: [
        {
          name: 'JAVA',
          experience: 2,
        },
        {
          name: 'Javascript',
          experience: 5,
        },
        {
          name: 'TypeScript',
          experience: 2,
        },
        {
          name: 'CPP',
          experience: 5,
        },
        {
          name: 'Python',
          experience: 2,
        },
        {
          name: 'ROR',
          experience: 5,
        },
      ],
    },
    {
      name: 'D',
      technologies: [
        {
          name: 'JAVA',
          experience: 2,
        },
        {
          name: 'Javascript',
          experience: 5,
        },
        {
          name: 'TypeScript',
          experience: 2,
        },
        {
          name: 'NodeJs',
          experience: 5,
        },
        {
          name: 'NestJs',
          experience: 2,
        },
        {
          name: 'TypeORM',
          experience: 5,
        },
      ],
    },
    {
      name: 'E',
      technologies: [
        {
          name: 'JAVA',
          experience: 2,
        },
        {
          name: 'Javascript',
          experience: 1,
        },
        {
          name: 'TypeScript',
          experience: 2,
        },
        {
          name: 'NodeJs',
          experience: 1,
        },
        {
          name: 'NestJs',
          experience: 2,
        },
        {
          name: 'TypeORM',
          experience: 5,
        },
      ],
    },
    {
      name: 'F',
      technologies: [
        {
          name: 'JAVA',
          experience: 1,
        },
        {
          name: 'Javascript',
          experience: 5,
        },
        {
          name: 'TypeScript',
          experience: 2,
        },
        {
          name: 'NodeJs',
          experience: 5,
        },
        {
          name: 'NestJs',
          experience: 2,
        },
        {
          name: 'TypeORM',
          experience: 5,
        },
      ],
    },
    {
      name: 'G',
      technologies: [
        {
          name:'JAVA',
          experience:2
        },
        {
          name: 'Javascript',
          experience: 1,
        },
        {
          name: 'TypeScript',
          experience: 1,
        },
        {
          name: 'NodeJs',
          experience: 1,
        },
        {
          name: 'NestJs',
          experience: 1,
        },
        {
          name: 'TypeORM',
          experience: 1,
        },
      ],
    },
  ];

  const techArray =  ['Javascript','TypeScript','NodeJs','NestJs','TypeORM'];

//     ------------------old solution--------------

  // const requiredCandidate = d.filter((person)=> techArray.every((language)=> person.technologies.some((technology)=>{
  //   return technology.name === language && technology.experience>1
  // })));

  //console.log(JSON.stringify(requiredCandidate,undefined,4));


  // -------------------------new solution-----------------------

   const filterData = d.filter((candidate) => techArray.every((technologyName)=> candidate.technologies.find((techName)=> techName.name === technologyName)));

  const experienceData = filterData.filter((candidate)=> techArray.every((language)=> {
    const techExperienceInfo = candidate.technologies.find((techDetails)=> techDetails.name=== language);
    return techExperienceInfo && techExperienceInfo.experience>=2
  }))


  //console.log(JSON.stringify(experienceData,undefined,4));

  //=================================== Question-1======================================= 
  const data = {
    products: [
        [
            {
                category: "A",
                items: [
                    {
                        "name": "Aloe",
                        "price": 10
                    },
                    {
                        "name": "Apples",
                        "price": 5
                    }
                ]
            },
            {
                category: "B",
                items: [
                    {
                        "name": "Bread",
                        "price": 5
                    }
                ]
            }
        ],
        [
            {
                category: "C",
                items: [
                    {
                        "name": "Candy",
                        "price": 5
                    },
                    {
                        "name": "Crayon",
                        "price": 5
                    }
                ]
            },
            {
                category: "D",
                items: [
                    {
                        "name": "Dice",
                        "price": 5
                    },
                    {
                        "name": "Doll",
                        "price": 10
                    }
                ]
            }
        ]
    ]
}

const flatternData = data.products.flatMap((product)=> product)

const itemsArray = flatternData.flatMap((data)=> data.items.map((item)=> item))

//console.log(itemsArray);

//================================ Question - 2=========================================

let arrayOfElements = 
    [
        {
           "name": "a",
           "subElements": 
           [
             {"surname": 1},
             {"surname": 2}
           ]
        },
        {
           "name": "b",
           "subElements": 
           [
             {"surname": 3},
             {"surname": 1}
           ]
        },
        {
           "name": "c",
           "subElements": 
           [
             {"surname": 2},
             {"surname": 5}
           ]
        }
    ];

    const requiredName = arrayOfElements.filter((data)=> data.subElements.some((person)=> person.surname===1));
    
    //console.log(JSON.stringify(requiredName,undefined,4));

    // ================================  Question 3 =========================================

    const brandArray = [
      {
        "id": 10,
        "name": "Parent Brand 1",
        "parent": null,
        "author": 1,
        "deleted_at": null,
        "created_at": "2017-02-02 09:55:51",
        "updated_at": "2017-02-02 09:55:51",
        "subBrands": [
          {
            "id": 31,
            "name": "Sub Brand 6",
            "parent": 10,
            "author": 1,
            "deleted_at": null,
            "created_at": "2017-02-02 11:24:49",
            "updated_at": "2017-02-02 11:42:02"
          },
          {
            "id": 32,
            "name": "Sub Brand 7",
            "parent": 10,
            "author": 1,
            "deleted_at": null,
            "created_at": "2017-02-02 11:24:57",
            "updated_at": "2017-02-02 11:42:18"
          },
          {
            "id": 33,
            "name": "Sub Brand 8",
            "parent": 10,
            "author": 1,
            "deleted_at": null,
            "created_at": "2017-02-02 11:25:04",
            "updated_at": "2017-02-02 11:42:34"
          },
          {
            "id": 34,
            "name": "Sub Brand 9",
            "parent": 10,
            "author": 1,
            "deleted_at": null,
            "created_at": "2017-02-02 11:25:39",
            "updated_at": "2017-02-02 11:42:43"
          },
          {
            "id": 35,
            "name": "Sub Brand 10",
            "parent": 10,
            "author": 1,
            "deleted_at": null,
            "created_at": "2017-02-02 11:25:46",
            "updated_at": "2017-02-02 11:42:52"
          },
          {
            "id": 36,
            "name": "Sub Brand 4",
            "parent": 10,
            "author": 1,
            "deleted_at": null,
            "created_at": "2017-02-02 11:43:53",
            "updated_at": "2017-02-02 11:43:53"
          }
        ]
      },
      {
        "id": 12,
        "name": "Parent Brand 2",
        "parent": null,
        "author": 1,
        "deleted_at": null,
        "created_at": "2017-02-02 09:56:16",
        "updated_at": "2017-02-02 09:56:16",
        "subBrands": []
      },
      {
        "id": 16,
        "name": "Brand no children",
        "parent": null,
        "author": 1,
        "deleted_at": null,
        "created_at": "2017-02-02 10:37:40",
        "updated_at": "2017-02-02 10:37:40",
        "subBrands": []
      },
      {
        "id": 37,
        "name": "Whoops brand",
        "parent": null,
        "author": 1,
        "deleted_at": null,
        "created_at": "2017-02-02 11:44:10",
        "updated_at": "2017-02-02 11:44:10",
        "subBrands": []
      }
    ]














    //============================================================================================

  
    //const regExp = new RegExp();

    //const reg = /abc/;

    const password = 'a121BCDttp@qwq1212$.'

    const regExp = /B/g;

    const regExp1 = /BCD/g;

    const regExp2 = /bcd/i;

    const reg1 = /[a-z]/;

    const reg2 = /[A-Za-z]/g;

    const reg3 = /[0-9]/g;

    console.log(regExp.exec(password));

    console.log(reg1.exec(password));

    console.log(reg2.exec(password));

    console.log(reg2.exec(password));

    console.log(reg2.exec(password));

    console.log(reg2.exec(password));

    console.log(regExp1.exec(password));

    console.log(regExp2.exec(password));

    console.log(reg3.exec(password));

    console.log(reg3.exec(password));

    console.log(reg3.exec(password));

    const string = 'There are 12345678 floors'

    const reg4 = /\d{7}/

    console.log(string.match(reg4));

    const reg5 = /\d{9}/

    console.log(string.match(reg5));

    console.log(reg4.test(string))

    const reg6 = /\b\d{5}\b/

    console.log(string.match(reg6))

    const string1 = 'booh boooooooh'

    const reg7 = /o{5,}/g

    console.log(string1.match(reg7))

