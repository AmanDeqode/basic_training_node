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

  //  6. length

  const calculateLength = (data) =>{
    let length=0;

    while(data[length]!== undefined)
    {
        length++;
    }
    return length;
  }

  const candidatesArrayLength = calculateLength(candidatesArray);

  // 1. PUSH method

   candidatesArray[candidatesArrayLength] = obj;

    console.log(JSON.stringify(candidatesArray,undefined,4))

   // =======================================================================================

  // 2. POP method

    candidatesArray[candidatesArrayLength] = candidatesArray[candidatesArrayLength-1];

    console.log(JSON.stringify(candidatesArray,undefined,4))

// ========================================================================================

 // 3. shift method
  
    for(let i=0;i<candidatesArrayLength-2;i++)
    {
        candidatesArray[i] = candidatesArray[i+1];
    }
    candidatesArray[candidatesArrayLength] = candidatesArray[candidatesArrayLength-1];

   console.log(JSON.stringify(candidatesArray,undefined,4))

// ==========================================================================================

// 4. unshift method

   for(let i=candidatesArrayLength;i>=1;i--)
   {
        candidatesArray[i] = candidatesArray[i-1]
   }
   candidatesArray[0]=obj;
   console.log(JSON.stringify(candidatesArray,undefined,4));

// ============================================================================================

//  7. splice method

   const splice = (index,data)=>{
    for(let i=candidatesArrayLength;i>index;i--)
    {
        candidatesArray[i] = candidatesArray[i-1];
    }
    candidatesArray[index] = data;
    return candidatesArray;
   }

   console.log(splice(1,obj))

// ============================================================================================

// 8.forEach

  for(let candidates of candidatesArray)
  {
      console.log(JSON.stringify(candidates,undefined,4))
  }







