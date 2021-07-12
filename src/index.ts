/**************EJERCICIO 1 JAVASCRIPT ****************/

const data = `id,name,surname,gender,email,picture
15519533,Raul,Flores,male,raul.flores@example.com,https://randomuser.me/api/portraits/men/42.jpg
82739790,Alvaro,Alvarez,male,alvaro.alvarez@example.com,https://randomuser.me/api/portraits/men/48.jpg
37206344,Adrian,Pastor,male,adrian.pastor@example.com,https://randomuser.me/api/portraits/men/86.jpg
58054375,Fatima,Guerrero,female,fatima.guerrero@example.com,https://randomuser.me/api/portraits/women/74.jpg
35133706,Raul,Ruiz,male,raul.ruiz@example.com,https://randomuser.me/api/portraits/men/78.jpg
79300902,Nerea,Santos,female,nerea.santos@example.com,https://randomuser.me/api/portraits/women/61.jpg
89802965,Andres,Sanchez,male,andres.sanchez@example.com,https://randomuser.me/api/portraits/men/34.jpg
62431141,Lorenzo,Gomez,male,lorenzo.gomez@example.com,https://randomuser.me/api/portraits/men/81.jpg
05298880,Marco,Campos,male,marco.campos@example.com,https://randomuser.me/api/portraits/men/67.jpg
61539018,Marco,Calvo,male,marco.calvo@example.com,https://randomuser.me/api/portraits/men/86.jpg`;

const fromCSV = (csv,nAttrs=0) => {
    const dataAll = csv.split('\n');
    let dataFields = dataAll[0].split(",");

    if(nAttrs >0 && nAttrs < dataFields.length){
        dataFields = dataFields.slice(0,nAttrs);
    }

    const excludeFields = ([ , ...data ]) => data;
    const data = excludeFields(dataAll);

    const result = data.map(row => {
        let values = row.split(",");
        let entry = {}
        let i=0;
        dataFields.forEach(element => {
            entry[element]= values[i];
            i++;
        });
        
        return entry;
    });
    
    return result;
};

/*
console.log(fromCSV(data)); // Cada usuario tendrá todos los atributos como la implementación original
console.log(fromCSV(data, 2)); // cada usuario tendrá sólo `id` y `name`
console.log(fromCSV(data, 3)); // cada usuario tendrá sólo `id`, `name` y `surname`
console.log(fromCSV(data, 4)); // cada usuario tendrá sólo `id`, `name`, `surname` y `gender`
*/


/**************EJERCICIO 2 JAVASCRIPT ****************/

const elements = ["lorem", "ipsum", "dolor", "sit", "amet"];
const index = 2;
const newValue = "furor";

const replaceAt = (arr, index, newElement) => {
    const result = [...arr];
    result[index]=newElement;

    return result;
};

const result = replaceAt(elements, index, newValue);
/*
console.log(result === elements); // false
console.log(result); // ['lorem', 'ipsum', 'furor', 'sit', 'amet'];
*/


/**************EJERCICIO 3 JAVASCRIPT ****************/

const data2 = [
    { ranking: 6.3, year: 1998, name: "Monroe", gender: "Genderfluid", id: 1450, surname: "Jerde" },
    { ranking: 5.4, year: 1999, name: "Maxie", gender: "Bigender", id: 1652, surname: "Keebler" },
    { ranking: 8.7, year: 2000, name: "Emilee", gender: "Genderqueer", id: 4779, surname: "Ritchie" },
    { ranking: 6.5, year: 2001, name: "Rudy", gender: "Bigender", id: 7105, surname: "Gusikowski" },
    { ranking: 7.1, year: 1998, name: "Randy", gender: "Genderqueer", id: 5950, surname: "Lebsack" },
    { ranking: 4.9, year: 2000, name: "Esteban", gender: "Genderqueer", id: 7987, surname: "Fritsch" },
    { ranking: 5.3, year: 2001, name: "Leonard", gender: "Male", id: 6268, surname: "Frami" },
    { ranking: 8.8, year: 2002, name: "Lang", gender: "Polygender", id: 1033, surname: "Dietrich" },
    { ranking: 9.1, year: 2000, name: "Lettie", gender: "Agender", id: 6403, surname: "Gutmann" },
    { ranking: 6.0, year: 1998, name: "Shonda", gender: "Agender", id: 1324, surname: "Borer" },
    { ranking: 7.3, year: 2003, name: "Francene", gender: "Agender", id: 6836, surname: "Blanda" },
    { ranking: 6.8, year: 2003, name: "Everett", gender: "Polygender", id: 4937, surname: "O'Keefe" },
    { ranking: 5.3, year: 1998, name: "Bernardo", gender: "Agender", id: 8148, surname: "Baumbach" },
    { ranking: 9.3, year: 2003, name: "Brianna", gender: "Female", id: 7716, surname: "Schamberger" },
    { ranking: 9.7, year: 1998, name: "Douglass", gender: "Male", id: 4152, surname: "Hilpert" },
    { ranking: 4.8, year: 1998, name: "Angel", gender: "Female", id: 355, surname: "O'Hara" },
    { ranking: 5.7, year: 2000, name: "Hugh", gender: "Male", id: 9600, surname: "Hilll" },
    { ranking: 8.5, year: 1999, name: "Graciela", gender: "Agender", id: 871, surname: "Kerluke" },
    { ranking: 2.4, year: 2000, name: "Chassidy", gender: "Agender", id: 4313, surname: "Hegmann" },
    { ranking: 3.4, year: 1999, name: "Abdul", gender: "Agender", id: 367, surname: "Weimann" },
    { ranking: 7.1, year: 2002, name: "Coleen", gender: "Non-binary", id: 1428, surname: "Feil" },
    { ranking: 8.7, year: 2001, name: "Eleanora", gender: "Genderfluid", id: 984, surname: "Barton" },
    { ranking: 9.7, year: 2002, name: "Sean", gender: "Agender", id: 5689, surname: "Runolfsson" },
    { ranking: 4.5, year: 1999, name: "Ike", gender: "Female", id: 8445, surname: "Haag" },
    { ranking: 7.7, year: 2001, name: "Rachele", gender: "Genderqueer", id: 6978, surname: "Grady" },
    { ranking: 9.1, year: 2001, name: "Sam", gender: "Bigender", id: 1321, surname: "Fritsch" },
    { ranking: 9.0, year: 2000, name: "Eddy", gender: "Polygender", id: 8273, surname: "Kemmer" },
    { ranking: 4.6, year: 1999, name: "Jamar", gender: "Female", id: 6052, surname: "Grant" },
    { ranking: 9.3, year: 2001, name: "Dino", gender: "Genderfluid", id: 5671, surname: "Erdman" },
    { ranking: 7.6, year: 1999, name: "Ervin", gender: "Non-binary", id: 9945, surname: "Powlowski" }
  ];
  
  const winnerByYear = (arr, year) => {
    let result = arr.filter(person => person.year === year)
    .map(person => [person.ranking,person.year,person.name])
    .sort((a,b) => b[0] - a[0])
    .slice(0,3)
    .map(person => person[2]);

    return result;
  };
  
  /*
  console.log(winnerByYear(data2, 1998)) // [ 'Douglass', 'Randy', 'Monroe' ]
  console.log(winnerByYear(data2, 1999)) // [ 'Graciela', 'Ervin', 'Maxie' ]
  console.log(winnerByYear(data2, 2000)) // [ 'Lettie', 'Eddy', 'Emilee' ]
  console.log(winnerByYear(data2, 2001)) // [ 'Dino', 'Sam', 'Eleanora' ]
  console.log(winnerByYear(data2, 2002)) // [ 'Sean', 'Lang', 'Coleen' ]
  console.log(winnerByYear(data2, 2003)) // [ 'Brianna', 'Francene', 'Everett' ]
  console.log(winnerByYear(data2, 2004)) // []
  */

/**************EJERCICIO 4 JAVASCRIPT ****************/

const collection = [
    {
      id: "f0b6930c-331a-43e1-80db-e6c46ed552aa",
      nationality: "Barbadians",
      language: "English",
      capital: "Belgrade",
      national_sport: "taekwondo",
      flag: "🇮🇩",
    },
    {
      id: "3e690823-fc74-4376-999a-501e5f9ae4be",
      nationality: "Congolese",
      language: "German",
      capital: "Kinshasa",
      national_sport: "wrestling",
      flag: "🇺🇾",
    },
    {
      id: "9edd87d6-2f4f-4701-8ec4-272a361dbfe9",
      nationality: "Libyans",
      language: "Tagalog",
      capital: "Jakarta",
      national_sport: "buzkashi",
      flag: "🇬🇼",
    },
    {
      id: "9873a1ed-6dc5-4034-8214-1f428c8951bd",
      nationality: "Guineans",
      language: "Hakka",
      capital: "Ankara",
      national_sport: "gymnastics",
      flag: "🇹🇷",
    },
    {
      id: "4679c4a4-4e2e-4470-a900-2445dc1f4a1e",
      nationality: "Ugandans",
      language: "German",
      capital: "Beijing",
      national_sport: "dandi biyo",
      flag: "🇮🇳",
    },
    {
      id: "4274ad62-5089-4b8e-a002-b2c1c3c74926",
      nationality: "Finns",
      language: "Swedish",
      capital: "Djibouti",
      national_sport: "bull fighting",
      flag: "🇭🇲",
    },
    {
      id: "2bb25c20-7962-47b7-82d9-d62a9493308f",
      nationality: "Poles",
      language: "Swedish",
      capital: "Beirut",
      national_sport: "cricket",
      flag: "🇰🇭",
    },
    {
      id: "9b3e09da-7484-49f3-aed0-13ccc7e77fff",
      nationality: "Guineans",
      language: "Portuguese",
      capital: "Guatemala City",
      national_sport: "cricket",
      flag: "🇩🇪",
    },
    {
      id: "903fb062-647c-46f8-857f-c1eba0cbbc9b",
      nationality: "Ivoirians",
      language: "Nepali",
      capital: "Juba",
      national_sport: "cricket",
      flag: "🇫🇮",
    },
    {
      id: "21bcd231-1d8f-49f5-826a-1dc986c52f0d",
      nationality: "Hungarians",
      language: "Russian",
      capital: "Tarawa Atoll",
      national_sport: "gymnastics",
      flag: "🇲🇴",
    },
  ];
  
  const normalize = (arr) => {
    const result={};
    const salida = arr.map((country) => {
        const { id, ...resto} = country;
        result[`${id}`]=resto;
        return result;
    });
    return salida[0];
  };
  
  /*
  const result1 = normalize(collection);
  console.log(result1);
*/
/**************EJERCICIO 5 JAVASCRIPT ****************/
/*
null
undefined
NaN
0
""
false
*/


const compact = (arg) => {
    if(typeof arg === "object" && arg){
        if(Array.isArray(arg)){
            let result= arg.filter(value=> Boolean(value));
            return result;
        }else if(Object.getOwnPropertyNames(arg).length === 0){
            return arg;
        }
        else
        {
            let result={};
            for (const property in arg) {
                if(Boolean(arg[property])){
                    result[property]= arg[property];
                }
              }
            return result;
        }
    }else{
        return  arg;
    }
};

/*
console.log(compact(123)); // 123
console.log(compact(null)); // null
console.log(compact([0, 1, false, 2, "", 3])); // [1, 2, 3]
console.log(compact({})); // {}
console.log(compact({ price: 0, name: "cloud", altitude: NaN, taste: undefined, isAlive: false })); // {name: "cloud"}
*/

/********************EJERCICIO 1 TYPESCRIPT***************************/

interface Student {
    name: string;
    age: number;
    occupation: string;
}

const students: Student[] = [
    {
      name: "Patrick Berry",
      age: 25,
      occupation: "Medical scientist",
    },
    {
      name: "Alice Garner",
      age: 34,
      occupation: "Media planner",
    },
  ];
  
  const logStudent = ({ name, age }: Student) => {
    console.log(`  - ${name}, ${age}`);
  };
  
  console.log("Students:");
  students.forEach(logStudent);

  /********************EJERCICIO 2 TYPESCRIPT***************************/


  interface Teacher {
    name: string;
    age: number;
    subject: string;
  }
  
  type User = Student | Teacher;
  
  const users: User[] = [
    {
      name: "Luke Patterson",
      age: 32,
      occupation: "Internal auditor",
    },
    {
      name: "Jane Doe",
      age: 41,
      subject: "English",
    },
    {
      name: "Alexandra Morton",
      age: 35,
      occupation: "Conservation worker",
    },
    {
      name: "Bruce Willis",
      age: 39,
      subject: "Biology",
    },
  ];
  
  const logUser = ({ name, age }: User) => {
    console.log(`  - ${name}, ${age}`);
  };
  
  users.forEach(logUser);


  /********************EJERCICIO 3 TYPESCRIPT***************************/



  function isStudent(user: Student | Teacher): user is Student {
    return (user as Student).occupation !== undefined;
  }

  function isTeacher(user: Student | Teacher): user is Teacher {
    return (user as Teacher).subject !== undefined;
  }

  const logPerson = (person: Student | Teacher):void  => {
    let extraInfo: string;
    if (isStudent(person)) {
      extraInfo = person.occupation;
    } else if(isTeacher(person)) {
      extraInfo = person.subject;
    }else{
        extraInfo = "";
    }
    console.log(`  - ${person.name}, ${person.age}, ${extraInfo}`);
  };

  users.forEach(logPerson);

    /********************EJERCICIO 4 TYPESCRIPT***************************/

    const students2: Student[] = [
        {
          name: "Luke Patterson",
          age: 32,
          occupation: "Internal auditor",
        },
        {
          name: "Emily Coleman",
          age: 25,
          occupation: "English",
        },
        {
          name: "Alexandra Morton",
          age: 35,
          occupation: "Conservation worker",
        },
        {
            name: "Bruce Willis",
            age: 39,
            occupation: "Placement officer",
          },
      ];
      
     
      type CriteriaFlags = {
        [Key in keyof Student]?: Student[Key];
      };

      const filterStudentsBy = (students: Student[], criteria: CriteriaFlags): Student[] => {
        return students.filter((user) => {
          const criteriaKeys = Object.keys(criteria);
          return criteriaKeys.every((fieldName) => {
            return criteria[fieldName] === user[fieldName];
          });
        });
      };
      
      const logStudent2 = ({ name, occupation }: Student) => {
        console.log(`  - ${name}, ${occupation}`);
      };
      
      console.log("Students of age 35:");
      filterStudentsBy(students2, { age: 39}).forEach(logStudent2);

    /********************EJERCICIO 5 TYPESCRIPT***************************/

    const swap = <T,U>(arg1:T, arg2:U):[U,T] => {
        return [arg2, arg1];
      };
      
      let age: number, occupation: string;
      
      [occupation, age] = swap(39, "Placement officer");
      console.log("Occupation: ", occupation);
      console.log("Age: ", age);




