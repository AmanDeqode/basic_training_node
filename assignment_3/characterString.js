// let str = 'deqode industry'

// str = str.split(' ');

// let arr = [];

// str.forEach((s)=> {
//     const firstChar = s.charAt(0);

//     const newStr = s.replace(firstChar,firstChar.toUpperCase());

//     arr.push(newStr);
// });

// console.log(arr.join(' '));

const arr = [
    {
      name: 'D',
      technologies: [{
        name: 'JAVA',
        experience: '2 years'
      },
      {
        name: 'Javascript',
        experience: '5 years',
      }]
    },
    {
      name: 'C',
      technologies: [{
        name: 'NodeJs',
        experience: '5 years'
      },
      {
        name: 'Typescript',
        experience: '10 years',
      }]
    },
    {
      name: 'K',
      technologies: [{
        name: 'CPP',
        experience: '10 years'
      },
      {
        name: 'Python',
        experience: '10 years',
      }]
    }
  ]


 const technologies = arr.flatMap((item)=> item.technologies)

 console.log(technologies);


 
 //console.log(arr.flat());


