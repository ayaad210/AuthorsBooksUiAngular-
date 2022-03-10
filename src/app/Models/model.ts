


export interface Department
{
      DepartmentID :string, 
      DepartmentName :string,
      DepartmentCode :string
}

export interface IBook {
  id: number;
  title: string;
  dateOfPublication: string;
  coverPath: string;
  description: string;
  authors: IAuthor[];
}


export interface IAuthor {
  id: number;
  name: string;
  dateOfBirth: string;
  bio: string;
  imagePath: string;
  books: IBook[];
}

export interface IBooksCreate {
  title: string;
  dateOfPublication: string;
  coverPath: string;
  description: string;
}

export interface IAuthorCreate {
  name: string;
  dateOfBirth: string;
  bio: string;
  imagePath: string;
}