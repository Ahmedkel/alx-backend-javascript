interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
   }

   interface Directors extends Teacher {
    numberOfReports: number;
   }

   const teacher3: Teacher = {
    firstName: 'Mol',
    fullTimeEmployee: true,
    lastName: '7alawiyat',
    location: 'MAROC',
    numberOfReports: 18,
   };
   
   console.log(teacher3);
 
