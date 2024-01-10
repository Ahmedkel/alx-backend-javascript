interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
   }

   const teacher3: Teacher = {
    firstName: 'Mol',
    fullTimeEmployee: false,
    lastName: '7alawiyat',
    location: 'MAROC',
    contract: false,
   };
   
   console.log(teacher3);
 