const candidatesArray = [
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


  const obj = {
      name:'H',
      technologies:[
        {
            name: 'NextJs',
            experience: 2,
          },
          {
            name: 'ROR',
            experience: 3,
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
            name: 'ReactJs',
            experience: 5,
          }, 
      ], 
  }

  const obj1 = {
    name:'T',
    technologies:[
      {
          name: 'Python',
          experience: 2,
        },
        {
          name: 'Laravel',
          experience: 3,
        },
        {
          name: 'DataScience',
          experience: 2,
        },
        {
          name: 'Angular',
          experience: 5,
        },
        {
          name: 'Flutter',
          experience: 2,
        },
        {
          name: 'MySQL',
          experience: 5,
        }, 
    ],
}
  const calculateLength = (data) =>{
    let length=0;

    while(data[length]!== undefined)
    {
        length++;
    }
    return length;
  }

  let candidatesArrayLength = calculateLength(candidatesArray);

  // 1. PUSH method

  Array.prototype.addElementAtLastIndex = (...elements) =>{
    console.log(elements);

    for(let element of elements)
    {
      candidatesArray[candidatesArrayLength] = element;
      candidatesArrayLength++;
    }
  }

   // 2. POP method

    Array.prototype.removeLastIndexElement = () =>{
      
       candidatesArrayLength = candidatesArrayLength-1;
       console.log(candidatesArrayLength);
       for(let i=0;i<candidatesArrayLength;i++)
       {
         console.log(candidatesArray[i]);
       }
    }

  // 3. shift method

    Array.prototype.removeFirstIndexElement = () =>{

      for(let i=0;i<candidatesArrayLength-1;i++)
      {
        candidatesArray[i] = candidatesArray[i+1];
      }
      candidatesArrayLength = candidatesArrayLength-1;
      
      for(let i=0;i<candidatesArrayLength;i++)
      {
        console.log(candidatesArray[i]);
      }
    }

 // 4. unshift method

    Array.prototype.addElementAtFirstIndex = () =>{

      for(let i=candidatesArrayLength;i>=1;i--)
      {
        candidatesArray[i] = candidatesArray[i-1]
      }
      candidatesArray[0]=obj;
      candidatesArrayLength++;
      console.log(candidatesArray);
      console.log(candidatesArrayLength);
     }

//  7. splice method

  Array.prototype.addObjectAtSpecificIndex = (index,data) =>{

    for(let i=candidatesArrayLength;i>index;i--)
    {
        candidatesArray[i] = candidatesArray[i-1];
    }
    candidatesArray[index] = data;
    candidatesArrayLength++;
    
    return candidatesArray;
  }


// ============================================================================================

// 8.forEach

  for(let candidates of candidatesArray)
  {
      console.log(JSON.stringify(candidates,undefined,4))
  }

 // 1 push method

 //candidatesArray.addElementAtLastIndex(obj,obj1);

 // 2. pop method

 // candidatesArray.removeLastIndexElement();

 // 3. shift method

 //candidatesArray.removeFirstIndexElement();

  // 4. unshift method

 // candidatesArray.addElementAtFirstIndex();

 // 5. splice method

 // console.log(candidatesArray.addObjectAtSpecificIndex(1,obj));
 