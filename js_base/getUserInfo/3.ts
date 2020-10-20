interface IUser {
    name: string;
    age: number;
}

type IUserInfoFunc = (user: IUser) => string;

const getIUserInfo:IUserInfoFunc = (user) => 
`
        name: ${user.name}, age: ${user.age}
`